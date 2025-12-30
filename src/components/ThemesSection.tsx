import { Building2, Heart, Shield } from "lucide-react";

const themes = [
  {
    icon: Building2,
    title: "Smart Infrastructure",
    description: "Innovative solutions for sustainable urban development and intelligent systems",
    bgColor: "bg-sky-light",
    iconColor: "text-primary",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Transforming medical care through technology and innovative approaches",
    bgColor: "bg-pink/20",
    iconColor: "text-pink",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Next-generation solutions for cybersecurity and safety",
    bgColor: "bg-teal-light",
    iconColor: "text-teal",
  },
];

const ThemesSection = () => {
  return (
    <section id="themes" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
            Innovate for Tomorrow
          </h2>
          <p className="text-muted-foreground">
            Building a Resilient Future
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {themes.map((theme) => (
            <div
              key={theme.title}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-border/50 text-center"
            >
              <div className={`w-20 h-20 rounded-2xl ${theme.bgColor} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <theme.icon className={`w-10 h-10 ${theme.iconColor}`} />
              </div>
              
              <h3 className="font-display font-bold text-xl text-card-foreground mb-3">
                {theme.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {theme.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;