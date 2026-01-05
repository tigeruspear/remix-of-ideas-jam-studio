import { School, Heart, PiggyBank , HousePlug, Palette } from "lucide-react";

const themes = [
  {
    icon: School,
    title: "Education",
    description: "Develop inclusive and accessible education solutions to empower individuals and bridge opportunity gaps.",
    bgColor: "bg-coral-light/10",
    iconColor: "text-coral",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Innovate tailored and preventative healthcare approaches to improve quality of life and health outcomes for all.",
    bgColor: "bg-coral-light/10",
    iconColor: "text-coral",
  },
  {
    icon: PiggyBank,
    title: "Finance",
    description: "Revolutionize financial services to promote inclusivity, literacy, and long-term economic stability.",
    bgColor: "bg-coral-light/10",
    iconColor: "text-coral",
  },

    {
    icon: HousePlug,
    title: "Energy",
    description: "Create sustainable and scalable energy solutions to reduce environmental harm and drive decarbonization",
    bgColor: "bg-coral-light/10",
    iconColor: "text-coral",
  },
];

const ThemesSection = () => {
  return (
    <section id="themes" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-coral/10 text-coral text-sm font-semibold rounded-full mb-4">
              <Palette className="w-4 h-4" />
              Competition Themes
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
            Invent the Future:
          </h2>
          <p className="font-display font-base text-3xl md:text-4xltext-muted-foreground">
            Shaping a Better World
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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