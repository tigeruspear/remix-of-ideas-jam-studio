import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Users } from "lucide-react";
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
  const [hasAnimated, setHasAnimated] = useState(false);
  const gridRef = useRef<HTMLDivElement | null>(null);

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
    if (!target || groupedMentors.length === 0) {
      return;
    }

    let animationFrameId = 0;
    const autoScroll = () => {
      const blockWidth = target.scrollWidth / 3;
      target.scrollLeft += 0.40;

      // Handle infinite looping
      if (target.scrollLeft >= blockWidth * 1.75) {
        target.scrollLeft -= blockWidth;
      }

      animationFrameId = window.requestAnimationFrame(autoScroll);
    };

    animationFrameId = window.requestAnimationFrame(autoScroll);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [groupedMentors.length]);

  const getCardStyle = (index: number): CSSProperties =>
    ({
      "--mentor-delay": `${index * 90}ms`,
    } as CSSProperties);

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
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background via-background/60 to-transparent z-10 blur-md" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background via-background/60 to-transparent z-10 blur-md" />

          <div
            ref={gridRef}
            className="mentor-scroll flex gap-6 overflow-x-auto px-3 py-5 select-none"
          >
          {loopedMentors.map((mentor, index) => (
            <div
              key={`${mentor.name}-${index}`}
              style={getCardStyle(index)}
              className={`mentor-card shrink-0 basis-[82%] sm:basis-[47%] lg:basis-[23%] group bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-border/50 flex flex-col items-center justify-center min-h-[220px] ${hasAnimated ? "is-visible" : ""}`}
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
    </section>
  );
};

export default MentorsSection;
