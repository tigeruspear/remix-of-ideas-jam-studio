import { useState } from "react";
import { Users, X, Linkedin, Mail } from "lucide-react";

const mentors = [
  {
    name: "Mr. Aditya Kumar",
    title: "Director, Schneider Electric",
    description: "Aditya has 25+ years of experience delivering complex electrical and automation projects across industries like datacenters, power systems, and commercial buildings. A certified coach with nearly a decade of mentoring experience, he is passionate about sustainability, green initiatives, and people development. He currently serves as East Asia Transportation Segment Director and Sales Excellence Lead for the Power Systems Division at Schneider Electric.",
    initials: "AK",
    bgColor: "bg-coral/20",
    email: "aditya.kumar@se.com",
  },
  {
    name: "Ms. Clara Kwan",
    title: "Chief Sustainability Officer",
    description: "Clara Kwan, Chief Sustainability Officer at the Singapore Manufacturing Federation, leads innovative strategies to guide companies toward sustainable practices. She integrates ESG principles across operations and advises on sustainability, investments, and social impact, driving strategic decision-making and portfolio management.",
    initials: "CK",
    bgColor: "bg-yellow/20",
    email: "ckyl@mail.com",
  },
  {
    name: "Mr. Jason Lee Ho Fan",
    title: "Founder & CEO, Scent by SIX",
    description: "Meet Mr. Jason, the founder and CEO of Scent by SIX, a visionary entrepreneur and now a dedicated law student. Mr. Jason has a passion for creating fragrances that evoke emotion. He has collaborated with iconic brands like Singapore Airlines and Eu Yan Sang. His achievements include being honored with the prestigious Entrepreneur of the Year Award in 2022.",
    initials: "JL",
    bgColor: "bg-teal-light",
    email: "jason.lee@scentbysix.com",
  },
  {
    name: "Mr. Lionel Chok",
    title: "XR & Spatial Computing Specialist",
    description: "A specialist in Extended Reality and Spatial Computing, Mr. Lionel got invited to mentor and advise entrepreneurs when his own XR start-up iMMERSiVELY was acquired during COVID-19 to embark on the Web3 journey. Today, aside from presenting at conferences and adjunct lecturing at SMU, he consults clients on immersive content strategy and innovation.",
    initials: "LC",
    bgColor: "bg-sky-light",
    email: "lionel@immersively.co",
  },
  {
    name: "Ms. Maggie Yeo Sock Koon",
    title: "Experienced CFO",
    description: "Ms. Yeo Sock Koon is an experienced CFO with 30+ years in SGX-listed companies across shipping, manufacturing, oil & gas, real estate, resources, and hospitality. Led $500M+ revenue and teams of 70+, driving financial system implementation, shared service setup, and post-merger integration. A strategic leader and negotiator delivering impactful business results.",
    initials: "MY",
    bgColor: "bg-purple/20",
    email: "maggie.yeo@gmail.com",
  },
  {
    name: "Mr. Nicola Scarpelli",
    title: "Nuclear Engineer & Coach",
    description: "With a background in nuclear engineering and a passion for sustainability, he has spent over a decade in the corporate and energy sectors, excelling in sales performance, software innovation, business transformation, and change management. He advocates for nuclear energy and the circular economy, ventures into startups, and actively mentors, coaches, speaks publicly, and engages in pro-bono activities.",
    initials: "NS",
    bgColor: "bg-pink/20",
    email: "scarpelli.na@gmail.com",
  },
  {
    name: "Mr. Pranav Krishna",
    title: "Entrepreneur & Innovator",
    description: "An entrepreneur and innovator, he describes himself as a lazy person, which drives his pursuit of efficiency without compromising on quality in his work. He is deeply passionate about the planet, its people, and finding ways to restore balance to the global challenges humanity faces. Open to challenges and new perspectives, he welcomes meaningful discussions on a wide range of topics.",
    initials: "PK",
    bgColor: "bg-coral/20",
    email: "pranav05@live.com",
  },
  {
    name: "Mr. Vineet Agarwal",
    title: "CEO of Validus Capital",
    description: "Vineet Agarwal is the CEO of Validus Capital, leading SME lending expansion in Singapore with tailored financing solutions. Previously, he drove Data & AI initiatives at DBS Bank's Consumer Banking division and spent a decade at American Express, holding various positions in the payments sector. Vineet focuses on fostering sustainable growth and supporting local businesses.",
    initials: "VA",
    bgColor: "bg-sky-light",
    email: "vineet101@gmail.com",
  },
];

const MentorsSection = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [showContact, setShowContact] = useState(false);

  const handleOpenPopup = (mentor) => {
    setSelectedMentor(mentor);
    setShowContact(false); // Reset contact view when opening new mentor
  };

  const handleClosePopup = () => {
    setSelectedMentor(null);
    setShowContact(false);
  };

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
              onClick={() => handleOpenPopup(mentor)}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-border/50 cursor-pointer flex flex-col items-center justify-center min-h-[200px]"
            >
              {/* Avatar */}
              <div className={`w-16 h-16 rounded-full ${mentor.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="font-display font-bold text-lg text-foreground">
                  {mentor.initials}
                </span>
              </div>
              
              <h3 className="font-display font-bold text-base text-card-foreground text-center mb-1">
                {mentor.name}
              </h3>
              
              <p className="text-xs text-accent font-medium text-center">
                {mentor.title}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground">
            Click on a mentor to view their full profile
          </p>
        </div>
      </div>

      {/* POPUP MODAL */}
      {selectedMentor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={handleClosePopup}
          />
          
          {/* Modal Content */}
          <div className="relative bg-card w-full max-w-xl rounded-2xl shadow-2xl p-1 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button 
              onClick={handleClosePopup}
              className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full text-foreground transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="bg-background rounded-xl overflow-hidden">
                {/* Header Background */}
                <div className={`h-32 ${selectedMentor.bgColor} w-full flex items-end justify-center pb-6`}>
                     <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center transform translate-y-12">
                        <span className="font-display font-bold text-3xl text-foreground">
                            {selectedMentor.initials}
                        </span>
                     </div>
                </div>

                <div className="pt-16 pb-8 px-8 text-center">
                    <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                        {selectedMentor.name}
                    </h3>
                    <p className="text-accent font-semibold mb-6">
                        {selectedMentor.title}
                    </p>
                    
                    <div className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base text-left">
                        {selectedMentor.description}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex justify-center gap-4">
                            <button 
                                onClick={() => setShowContact(!showContact)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all text-sm ${showContact ? 'bg-foreground text-background shadow-lg ring-2 ring-offset-2 ring-foreground' : 'bg-foreground text-background hover:opacity-90'}`}
                            >
                                <Mail className="w-4 h-4" />
                                {showContact ? 'Hide Email' : 'Show Email'}
                            </button>
                            <button className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-full font-medium hover:bg-accent/5 transition-colors text-sm">
                                <Linkedin className="w-4 h-4" />
                                Profile
                            </button>
                        </div>

                        {/* Collapsible Contact Section */}
                        {showContact && (
                            <div className="w-full mt-4 p-4 bg-accent/5 rounded-xl border border-border/50 animate-in slide-in-from-top-2 fade-in duration-200">
                                <h4 className="text-sm font-semibold text-foreground mb-3 text-left">Contact Details</h4>
                                <div className="space-y-3">
                                    {selectedMentor.email && (
                                        <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                                            <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center border border-border">
                                                <Mail className="w-4 h-4 text-accent" />
                                            </div>
                                            <a href={`mailto:${selectedMentor.email}`} className="hover:underline">
                                                {selectedMentor.email}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MentorsSection;