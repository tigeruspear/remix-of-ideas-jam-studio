import { Users, ExternalLink } from "lucide-react";

const mentors = [
  {
    name: "Ms. Cherilyn Tan",
    title: "Serial Entrepreneur",
    description: "Founder of AsiaLawNetwork.com and Tessaract.io, raised $6M from VCs",
  },
  {
    name: "Mr. Vineet Agarwal",
    title: "CEO of Validus Capital",
    description: "Leading SME lending expansion with a decade at American Express",
  },
  {
    name: "Dr. Vaisagh Viswanathan",
    title: "CEO of impress.ai",
    description: "PhD in AI, transforming global recruitment with AI solutions",
  },
  {
    name: "Ms. Clara Kwan",
    title: "Chief Sustainability Officer",
    description: "Leading sustainability strategies at Singapore Manufacturing Federation",
  },
  {
    name: "Mr. Dex Lee",
    title: "AI & Data Science Innovator",
    description: "Algorithmic trader and fintech co-founder with 20 years experience",
  },
  {
    name: "Mr. Joshua Lim",
    title: "Investor at January Capital",
    description: "Specializing in early-stage B2B equity and growth-stage debt",
  },
  {
    name: "Dr. Niu Wendou",
    title: "Co-Founder of Biofourmis",
    description: "Digital health leader with 8+ years in product design and fundraising",
  },
  {
    name: "Mr. Lionel Chok",
    title: "XR & Spatial Computing Expert",
    description: "Former startup founder, now consulting on immersive content strategy",
  },
];

const MentorsSection = () => {
  return (
    <section id="mentors" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-teal/10 text-teal text-sm font-semibold rounded-full mb-4">
            <Users className="inline w-4 h-4 mr-2" />
            Expert Guidance
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
            Meet Our{" "}
            <span className="text-gradient">Mentors</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from industry leaders and experienced entrepreneurs who are dedicated to your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {mentors.map((mentor, index) => (
            <div
              key={mentor.name}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <span className="font-display font-bold text-2xl text-primary">
                  {mentor.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <h3 className="font-display font-bold text-lg text-card-foreground text-center mb-1">
                {mentor.name}
              </h3>
              
              <p className="text-sm text-accent font-medium text-center mb-3">
                {mentor.title}
              </p>
              
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                {mentor.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            And 12+ more industry experts ready to guide you
          </p>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
