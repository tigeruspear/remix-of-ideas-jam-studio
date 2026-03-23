import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { ChevronLeft, ChevronRight, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mentors } from "@/components/FullMentorsSection";

const getTitleParts = (title: string) => {
  const separatorIndex = title.indexOf(",");

  if (separatorIndex === -1) {
    return { role: title, company: "" };
  }

  return {
    role: title.slice(0, separatorIndex).trim(),
    company: title.slice(separatorIndex + 1).trim(),
  };
};

const getCompanyFromTitle = (title: string) => getTitleParts(title).company || "Independent";

const MentorsSection = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const isHoveringRef = useRef(false);
  const isDraggingRef = useRef(false);
  const hasDraggedRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);

  const groupedMentors = useMemo(() => {
    return [...mentors].sort((a, b) => {
      const companyCompare = getCompanyFromTitle(a.title).localeCompare(getCompanyFromTitle(b.title));
      if (companyCompare !== 0) {
        return companyCompare;
      }

      const roleCompare = getTitleParts(a.title).role.localeCompare(getTitleParts(b.title).role);
      if (roleCompare !== 0) {
        return roleCompare;
      }

      return a.name.localeCompare(b.name);
    });
  }, []);

  const loopedMentors = useMemo(
    () => [...groupedMentors, ...groupedMentors, ...groupedMentors],
    [groupedMentors]
  );

  useEffect(() => {
    const target = gridRef.current;
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const target = gridRef.current;
    if (!target || groupedMentors.length === 0) {
      return;
    }

    const setupInitialPosition = () => {
      const blockWidth = target.scrollWidth / 3;
      target.scrollLeft = blockWidth;
    };

    setupInitialPosition();

    const handleLooping = () => {
      const blockWidth = target.scrollWidth / 3;
      if (blockWidth <= 0) {
        return;
      }

      if (target.scrollLeft <= blockWidth * 0.25) {
        target.scrollLeft += blockWidth;
      } else if (target.scrollLeft >= blockWidth * 1.75) {
        target.scrollLeft -= blockWidth;
      }
    };

    target.addEventListener("scroll", handleLooping, { passive: true });
    return () => target.removeEventListener("scroll", handleLooping);
  }, [groupedMentors.length]);

  useEffect(() => {
    const target = gridRef.current;
    if (!target) {
      return;
    }

    let animationFrameId = 0;
    const autoScroll = () => {
      if (!isHoveringRef.current && !isDraggingRef.current) {
        target.scrollLeft += 0.45;
      }
      animationFrameId = window.requestAnimationFrame(autoScroll);
    };

    animationFrameId = window.requestAnimationFrame(autoScroll);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, []);

  const getCardStyle = (index: number): CSSProperties =>
    ({
      "--mentor-delay": `${index * 90}ms`,
    } as CSSProperties);

  const handleOpenPopup = (mentor) => {
    setSelectedMentor(mentor);
  };

  const handleClosePopup = () => {
    setSelectedMentor(null);
  };

  const scrollMentors = (direction: "left" | "right") => {
    if (!gridRef.current) {
      return;
    }

    const amount = Math.max(gridRef.current.clientWidth * 0.85, 280);
    gridRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!gridRef.current) {
      return;
    }

    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    dragStartXRef.current = event.clientX;
    dragStartScrollLeftRef.current = gridRef.current.scrollLeft;
    gridRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!gridRef.current || !isDraggingRef.current) {
      return;
    }

    const delta = event.clientX - dragStartXRef.current;
    if (Math.abs(delta) > 6) {
      hasDraggedRef.current = true;
    }
    gridRef.current.scrollLeft = dragStartScrollLeftRef.current - delta;
  };

  const stopDragging = () => {
    if (!gridRef.current) {
      return;
    }

    isDraggingRef.current = false;
    gridRef.current.style.cursor = "grab";
  };

  const handleWheelScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (!gridRef.current) {
      return;
    }

    if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) {
      return;
    }

    event.preventDefault();
    gridRef.current.scrollBy({
      left: event.deltaY,
      behavior: "auto",
    });
  };

  return (
    <section id="mentors" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-teal-light text-teal text-sm font-semibold rounded-full mb-4">
            <Users className="inline w-4 h-4 mr-2" />
            Expert Guidance
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
            Meet Our <span className="text-gradient">Mentors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn from industry leaders and experienced entrepreneurs who are dedicated to your success
          </p>
        </div>

        <style>{`
          .mentor-scroll {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .mentor-scroll::-webkit-scrollbar {
            display: none;
          }

          .mentor-card {
            opacity: 0;
          }

          .mentor-card.is-visible {
            animation: mentor-slide-in 650ms ease forwards;
            animation-delay: var(--mentor-delay, 0ms);
          }

          @keyframes mentor-slide-in {
            from {
              opacity: 0;
              transform: translateY(12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        <div className="relative max-w-7xl mx-auto">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-background to-transparent z-10" />

          <button
            type="button"
            onClick={() => scrollMentors("left")}
            aria-label="Scroll mentors left"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full border border-border/60 bg-background/90 backdrop-blur-sm text-foreground hover:bg-background transition-colors hidden md:flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => scrollMentors("right")}
            aria-label="Scroll mentors right"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full border border-border/60 bg-background/90 backdrop-blur-sm text-foreground hover:bg-background transition-colors hidden md:flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div
            ref={gridRef}
            onWheel={handleWheelScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={() => {
              stopDragging();
              isHoveringRef.current = false;
            }}
            onMouseEnter={() => {
              isHoveringRef.current = true;
            }}
            className="mentor-scroll flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-3 py-5 cursor-grab select-none"
          >
          {loopedMentors.map((mentor, index) => (
            <div
              key={`${mentor.name}-${index}`}
              onClick={() => {
                if (hasDraggedRef.current) {
                  hasDraggedRef.current = false;
                  return;
                }
                handleOpenPopup(mentor);
              }}
              style={getCardStyle(index)}
              className={`mentor-card snap-start shrink-0 basis-[82%] sm:basis-[47%] lg:basis-[23%] group bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-border/50 cursor-pointer flex flex-col items-center justify-center min-h-[220px] ${hasAnimated ? "is-visible" : ""}`}
            >
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full overflow-hidden mb-3 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                  style={{ 
                    objectPosition: mentor.imagePosition,
                    transform: `scale(${mentor.imageZoom || 1})`
                  }}
                />
              </div>
              
              <h3 className="font-display font-bold text-base text-card-foreground text-center mb-0">
                {mentor.name}
              </h3>

              <div className="min-h-[2.9rem] flex items-center justify-center mt-0">
                <div className="text-center leading-tight">
                  <p className="text-xs text-accent font-medium">{getTitleParts(mentor.title).role}</p>
                  {getTitleParts(mentor.title).company && (
                    <p className="text-[11px] text-muted-foreground mt-1">{getTitleParts(mentor.title).company}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Button variant="hero" size="lg" asChild>
            <a href="/mentors">Check out all the industry experts joining us!</a>
          </Button>
        </div>
      </div>

      {/* POPUP MODAL */}
      {selectedMentor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={handleClosePopup}
          />
          
          {/* Modal Content */}
          <div className="relative bg-card w-full max-w-xl rounded-2xl shadow-2xl p-1 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button 
              onClick={handleClosePopup}
              className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full text-foreground transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="bg-background rounded-xl overflow-hidden">
                {/* Header Background */}
                <div className={`h-40 ${selectedMentor.bgColor} w-full flex items-end justify-center pb-6`}>
                     <div className="w-32 h-32 rounded-full bg-white shadow-lg overflow-hidden transform translate-y-12">
                        <img
                          src={selectedMentor.image}
                          alt={selectedMentor.name}
                          className="w-full h-full object-cover"
                          style={{ 
                            objectPosition: selectedMentor.imagePosition,
                            transform: `scale(${selectedMentor.imageZoom || 1})`
                          }}
                        />
                     </div>
                </div>

                <div className="pt-16 pb-8 px-8 text-center">
                    <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                        {selectedMentor.name}
                    </h3>
                    <p className="text-accent font-semibold mb-6">
                        {selectedMentor.title}
                    </p>
                    
                    <div className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base text-left">
                        {selectedMentor.description}
                    </div>
                    


                </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MentorsSection;
