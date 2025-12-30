import { MapPin, Calendar } from "lucide-react";

const workshops = [
  {
    number: "01",
    title: "Lean Start-up Concept Workshop",
    description: "Learn the fundamentals of building a successful start-up with minimal resources",
  },
  {
    number: "02",
    title: "Lean Canvas Workshop",
    description: "Master the art of creating effective business model canvases",
  },
  {
    number: "03",
    title: "Pitching Workshop",
    description: "Develop compelling presentations that win over investors and judges",
  },
];

const WorkshopsSection = () => {
  return (
    <section id="workshops" className="py-20 md:py-28 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Bootcamp Workshops
          </h2>
          
          {/* Event details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm border border-border/50">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-card-foreground">15 Feb 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm border border-border/50">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-card-foreground">NTU</span>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {workshops.map((workshop) => (
            <div
              key={workshop.number}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 border border-border/50 flex gap-6 items-start"
            >
              {/* Number */}
              <div className="text-4xl md:text-5xl font-display font-bold text-accent/30">
                {workshop.number}
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="font-display font-bold text-lg text-card-foreground mb-2">
                  {workshop.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {workshop.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;