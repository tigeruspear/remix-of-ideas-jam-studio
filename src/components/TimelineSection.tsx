import { CalendarDays } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const timelineEvents = [
  {
    date: "4 February 2026",
    title: "Registration OPEN!",
    description: "Sign up and begin your ideation journey",
    side: "right",
    highlight: true,
  },
  {
    date: "7 March 2026",
    title: "BootCamp",
    description: "Intensive workshops at NTU LT1A",
    side: "left",
    highlight: false,
  },
  {
    date: "21 March 2026",
    title: "Preliminary Submission",
    description: "Submit your initial business proposal",
    side: "right",
    highlight: false,
  },
  {
    date: "28 March 2026",
    title: "Finalist Announcement",
    description: "Top teams advance to finals",
    side: "left",
    highlight: false,
  },
  {
    date: "4 April 2026",
    title: "Pitch Practice",
    description: "Refine your presentation with mentors",
    side: "right",
    highlight: false,
  },
  {
    date: "11 April 2026",
    title: "Final Pitch Day",
    description: "Present to judges and compete for the top prizes",
    side: "left",
    highlight: false,
  },
];

const TimelineSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the section is visible
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const sectionBottom = rect.bottom;

      // Calculate scroll progress within the section (0 to 1)
      let progress = 0;
      if (sectionTop <= windowHeight / 2 && sectionBottom >= windowHeight / 2) {
        // Section is in view, calculate progress based on center position
        const centerPosition = windowHeight / 2;
        const sectionCenter = sectionTop + sectionHeight / 2;
        progress = Math.max(0, Math.min(1, (centerPosition - sectionTop) / sectionHeight));
      } else if (sectionTop > windowHeight / 2) {
        progress = 0; // Section hasn't reached center yet
      } else {
        progress = 1; // Section has passed center
      }

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="timeline" ref={sectionRef} className="py-20 md:py-28 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            <CalendarDays className="inline w-4 h-4 mr-2" />
            Important Dates
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Competition Timeline
          </h2>
          <p className="text-muted-foreground">
            Mark your calendars for these key milestones
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line - mobile left, desktop center */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-accent/10 md:left-1/2 md:-translate-x-0.5" />

          {timelineEvents.map((event, index) => (
            <div
              key={event.title}
              className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-4 last:mb-0 pl-12 md:pl-0 ${
                event.side === "left" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content card */}
              <div className={`flex-1 w-full md:w-auto ${event.side === "left" ? "md:text-right" : ""}`}>
                <div className={`bg-card rounded-2xl p-6 shadow-card border border-border/50 ${
                  event.highlight ? "ring-2 ring-accent ring-offset-2 ring-offset-muted" : ""
                }`}>
                  <div className={`flex items-center gap-3 mb-2 ${event.side === "left" ? "md:justify-end" : ""}`}>
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      event.highlight 
                        ? "bg-accent/10 text-accent" 
                        : "bg-accent/10 text-accent"
                    }`}>
                      {event.date}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-card-foreground mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}

          {/* Single scrolling timeline dot */}
          <div className="flex absolute z-20 md:hidden" style={{
            left: '20px',
            top: `${scrollProgress * 100}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'top 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div className="w-4 h-4 rounded-full bg-accent shadow-accent shadow-lg scale-125 ring-2 ring-accent/30" />
          </div>

          {/* Desktop centered scrolling dot */}
          <div className="hidden md:flex absolute z-20" style={{
            left: '50%',
            top: `${scrollProgress * 100}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'top 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div className="w-4 h-4 rounded-full bg-accent shadow-accent shadow-lg scale-125 ring-2 ring-accent/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;