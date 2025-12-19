import { Building2, Heart, Shield, Globe } from "lucide-react";

const themes = [
  {
    icon: Building2,
    title: "Smart Infrastructure",
    description: "Innovative solutions for sustainable urban development and intelligent systems",
    gradient: "from-primary to-sky",
    bgColor: "bg-primary/10",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Transforming medical care through technology and innovative approaches",
    gradient: "from-pink to-coral",
    bgColor: "bg-pink/10",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Next-generation solutions for cybersecurity and safety",
    gradient: "from-teal to-secondary",
    bgColor: "bg-teal/10",
  },
  {
    icon: Globe,
    title: "Digital Economy",
    description: "Driving economic transformation through digital innovation",
    gradient: "from-accent to-yellow",
    bgColor: "bg-accent/10",
  },
];

const ThemesSection = () => {
  return (
    <section id="themes" className="py-20 md:py-32 bg-muted relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 blob animate-float" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 blob-alt animate-float-delayed" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
            Competition Themes
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
            Innovate for Tomorrow
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            Building a Resilient Future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {themes.map((theme, index) => (
            <div
              key={theme.title}
              className="group relative bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 border border-border/50 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className={`relative w-16 h-16 rounded-2xl ${theme.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <theme.icon className={`w-8 h-8 bg-gradient-to-br ${theme.gradient} bg-clip-text`} style={{ color: 'currentColor' }} />
              </div>
              
              <h3 className="relative font-display font-bold text-xl text-card-foreground mb-3">
                {theme.title}
              </h3>
              
              <p className="relative text-muted-foreground text-sm leading-relaxed">
                {theme.description}
              </p>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${theme.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
