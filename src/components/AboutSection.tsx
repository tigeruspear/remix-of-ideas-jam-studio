import { Target, BookOpen, Network, Award } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Business Ideation",
    description: "Develop innovative solutions aligned with real-world problem statements",
    bgColor: "bg-sky-light",
    iconColor: "text-primary",
  },
  {
    icon: BookOpen,
    title: "Curated Workshops",
    description: "Learn from specially designed sessions on lean startup and pitching",
    bgColor: "bg-coral/20",
    iconColor: "text-coral",
  },
  {
    icon: Network,
    title: "Mentor Network",
    description: "Connect with a robust network of experienced industry mentors",
    bgColor: "bg-teal-light",
    iconColor: "text-teal",
  },
  {
    icon: Award,
    title: "Win Prizes",
    description: "Compete for cash prizes from a pool of $7,000",
    bgColor: "bg-yellow/20",
    iconColor: "text-yellow",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-coral/10 text-coral text-sm font-semibold rounded-full mb-4">
            Why IdeasJam?
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Unlock Your Potential with a{" "}
            <span className="text-gradient">Leading Start-up Competition</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our team of experienced professionals is dedicated to helping businesses achieve higher visibility and increased traffic, growth!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-border/50 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>
              <h3 className="font-display font-semibold text-lg text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;