import { CalendarDays } from "lucide-react";

const timelineEvents = [
  {
    date: "15 January 2026",
    title: "Registration OPEN!",
    description: "Sign up and begin your entrepreneurial journey",
    side: "right",
    highlight: true,
  },
  {
    date: "15 February 2026",
    title: "BootCamp",
    description: "Intensive workshops at NTU LT1A",
    side: "left",
    highlight: false,
  },
  {
    date: "8 March 2026",
    title: "Preliminary Submission",
    description: "Submit your initial business proposal",
    side: "right",
    highlight: false,
  },
  {
    date: "15 March 2026",
    title: "Finalist Announcement",
    description: "Top teams advance to finals",
    side: "left",
    highlight: false,
  },
  {
    date: "22 March 2026",
    title: "Pitch Practice",
    description: "Refine your presentation with mentors",
    side: "right",
    highlight: false,
  },
  {
    date: "5 April 2026",
    title: "Final Pitch Day",
    description: "Present to judges and win prizes",
    side: "left",
    highlight: false,
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-20 md:py-28 bg-muted relative overflow-hidden">
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
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          {timelineEvents.map((event, index) => (
            <div
              key={event.title}
              className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-8 last:mb-0 ${
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
                        ? "bg-accent/20 text-accent" 
                        : "bg-sky-light text-primary"
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

              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className={`w-4 h-4 rounded-full ${
                  event.highlight 
                    ? "bg-accent shadow-accent" 
                    : "bg-card border-2 border-primary"
                }`} />
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;