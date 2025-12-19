import { BookOpen, Lightbulb, Presentation, MapPin, Calendar } from "lucide-react";

const workshops = [
  {
    title: "Lean Start-up Concept Workshop",
    description: "Learn the fundamentals of building a successful start-up with minimal resources",
    icon: Lightbulb,
    color: "from-primary to-sky",
  },
  {
    title: "Lean Canvas Workshop",
    description: "Master the art of creating effective business model canvases",
    icon: BookOpen,
    color: "from-accent to-coral",
  },
  {
    title: "Pitching Workshop",
    description: "Develop compelling presentations that win over investors and judges",
    icon: Presentation,
    color: "from-teal to-secondary",
  },
];

const WorkshopsSection = () => {
  return (
    <section id="workshops" className="py-20 md:py-32 bg-muted relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            <BookOpen className="inline w-4 h-4 mr-2" />
            Learning Opportunities
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
            Bootcamp Workshops
          </h2>
          
          {/* Event details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-card-foreground">15 February 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-card-foreground">NTU LT1A</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {workshops.map((workshop, index) => (
            <div
              key={workshop.title}
              className="group relative bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 border border-border/50 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${workshop.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${workshop.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <workshop.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="relative font-display font-bold text-xl text-card-foreground mb-4">
                {workshop.title}
              </h3>
              
              <p className="relative text-muted-foreground leading-relaxed">
                {workshop.description}
              </p>

              {/* Bottom accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${workshop.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
