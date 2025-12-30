import { Users } from "lucide-react";

const mentors = [
  {
    name: "Ms. Cherilyn Tan",
    title: "Serial Entrepreneur",
    description: "Founder of AsiaLawNetwork.com and Tessaract.io, raised $6M from VCs",
    initials: "CT",
    bgColor: "bg-coral/20",
  },
  {
    name: "Mr. Vineet Agarwal",
    title: "CEO of Validus Capital",
    description: "Leading SME lending expansion with a decade at American Express",
    initials: "VA",
    bgColor: "bg-sky-light",
  },
  {
    name: "Dr. Vaisagh Viswanathan",
    title: "CEO of impress.ai",
    description: "PhD in AI, transforming global recruitment with AI solutions",
    initials: "VV",
    bgColor: "bg-teal-light",
  },
  {
    name: "Ms. Clara Kwan",
    title: "Chief Sustainability Officer",
    description: "Leading sustainability strategies at Singapore Manufacturing Federation",
    initials: "CK",
    bgColor: "bg-yellow/20",
  },
  {
    name: "Mr. Dex Lee",
    title: "AI & Data Science Innovator",
    description: "Algorithmic trader and fintech co-founder with 20 years experience",
    initials: "DL",
    bgColor: "bg-pink/20",
  },
  {
    name: "Mr. Joshua Lim",
    title: "Investor at January Capital",
    description: "Specializing in early-stage B2B equity and growth-stage debt",
    initials: "JL",
    bgColor: "bg-purple/20",
  },
  {
    name: "Dr. Niu Wendou",
    title: "Co-Founder of Biofourmis",
    description: "Digital health leader with 8+ years in product design and fundraising",
    initials: "NW",
    bgColor: "bg-coral/20",
  },
  {
    name: "Mr. Lionel Chok",
    title: "XR & Spatial Computing Expert",
    description: "Former startup founder, now consulting on immersive content strategy",
    initials: "LC",
    bgColor: "bg-sky-light",
  },
];

const MentorsSection = () => {
  return (
    <section id="mentors" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-teal-light text-teal text-sm font-semibold rounded-full mb-4">
            <Users className="inline w-4 h-4 mr-2" />
            Expert Guidance
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
            Meet Our <span className="text-gradient">Mentors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn from industry leaders and experienced entrepreneurs who are dedicated to your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              {/* Avatar */}
              <div className={`w-16 h-16 rounded-full ${mentor.bgColor} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <span className="font-display font-bold text-lg text-foreground">
                  {mentor.initials}
                </span>
              </div>
              
              <h3 className="font-display font-bold text-base text-card-foreground text-center mb-1">
                {mentor.name}
              </h3>
              
              <p className="text-xs text-accent font-medium text-center mb-3">
                {mentor.title}
              </p>
              
              <p className="text-xs text-muted-foreground text-center leading-relaxed">
                {mentor.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground">
            And 12+ more industry experts ready to guide you
          </p>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;