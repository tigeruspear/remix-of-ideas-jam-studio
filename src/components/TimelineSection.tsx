import { CalendarDays, CheckCircle2 } from "lucide-react";

const timelineEvents = [
  {
    date: "15 January 2025",
    title: "Registration OPEN!",
    description: "Sign up and begin your entrepreneurial journey",
    status: "active",
  },
  {
    date: "15 February 2025",
    title: "BootCamp",
    description: "Intensive workshops at NTU LT1A",
    status: "upcoming",
  },
  {
    date: "8 March 2025",
    title: "Preliminary Submission",
    description: "Submit your initial business proposal",
    status: "upcoming",
  },
  {
    date: "15 March 2025",
    title: "Finalist Announcement",
    description: "Top teams advance to finals",
    status: "upcoming",
  },
  {
    date: "22 March 2025",
    title: "Pitch Practice",
    description: "Refine your presentation with mentors",
    status: "upcoming",
  },
  {
    date: "5 April 2025",
    title: "Final Pitch Day",
    description: "Present to judges and win prizes",
    status: "upcoming",
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            <CalendarDays className="inline w-4 h-4 mr-2" />
            Important Dates
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
            Competition Timeline
          </h2>
          <p className="text-lg text-muted-foreground">
            Mark your calendars for these key milestones
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-teal" />

            {timelineEvents.map((event, index) => (
              <div
                key={event.title}
                className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content card */}
                <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className={`bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 border border-border/50 ${
                    event.status === "active" ? "ring-2 ring-accent ring-offset-2" : ""
                  }`}>
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
                      event.status === "active" 
                        ? "bg-accent/20 text-accent" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {event.date}
                    </span>
                    <h3 className="font-display font-bold text-lg text-card-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    event.status === "active" 
                      ? "bg-accent shadow-accent" 
                      : "bg-card border-2 border-primary"
                  }`}>
                    {event.status === "active" ? (
                      <CheckCircle2 className="w-5 h-5 text-accent-foreground" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
