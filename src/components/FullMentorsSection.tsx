import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Users, X, Search } from "lucide-react";

const getThemeStyle = (theme: string): CSSProperties => {
  const normalizedTheme = theme.toLowerCase();

  if (normalizedTheme === "energy") {
    return {
      color: "#e67e22",
      backgroundColor: "#fdf0e5",
      borderColor: "#f5cba7",
    };
  }

  if (normalizedTheme === "education") {
    return {
      color: "#2980b9",
      backgroundColor: "#eaf2f8",
      borderColor: "#aed6f1",
    };
  }

  if (normalizedTheme === "finance" || normalizedTheme === "finaince") {
    return {
      color: "#8e44ad",
      backgroundColor: "#f4ecf7",
      borderColor: "#d2b4de",
    };
  }

  if (normalizedTheme === "healthcare") {
    return {
      color: "#27ae60",
      backgroundColor: "#e9f7ef",
      borderColor: "#a9dfbf",
    };
  }

  return {
    color: "#475569",
    backgroundColor: "#f8fafc",
    borderColor: "#cbd5e1",
  };
};

const getTitleParts = (title: string) => {
  const separatorIndex = title.indexOf(",");

  if (separatorIndex === -1) {
    return { role: title, company: "" };
  }

  return {
    role: title.slice(0, separatorIndex).trim(),
    company: title.slice(separatorIndex + 1).trim(),
  };
};

const getCompanyName = (title: string) => getTitleParts(title).company || "Independent";

export const mentors = [
  {
    name: "Yeo Sock Koon",
    title: "ex-CFO",
    description: "A finance professional with more than 30 years of experience in SGX-listed companies across diverse industries, with a track record in strategic leadership and hands-on achievements including setting up a shared service centre in Shanghai and leading a post integration project which unlocked more than $3.6 million for the company.",
    initials: "YS",
    bgColor: "bg-coral/20",
    image: "/images/Mentors/MsYeo.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Finance", "Energy"],
  },
  {
    name: "Jason Lee Ho Fan",
    title: "Founder & CEO, Scent by SIX",
    description: "Hello. I'm Jason, founder of Scent by SIX, entrepreneur, and now a law student. My journey began with a passion for creating fragrances that evoke emotion, which led to unforgettable collaborations with brands like Singapore Airlines and Eu Yan Sang. In 2022, I was honoured to receive the Entrepreneur of the Year Award.",
    initials: "JL",
    bgColor: "bg-yellow/20",
    image: "/images/Mentors/MrJason.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Education", "Healthcare", "Energy"],
  },
  {
    name: "Nicola Scarpelli",
    title: "Key Account Manager, Schneider Electric",
    description: "I'm a nuclear engineer by background, a sustainability activist by passion, and a business catalyst by profession. I work hard everyday to make an impact - on businesses, industries, and the communities I live in. I aspire to be someone who truly helps create a more sustainable economy.",
    initials: "NS",
    bgColor: "bg-teal-light",
    image: "/images/Mentors/MrNicola.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Energy"],
  },
  {
    name: "Yim Cheng Siew",
    title: "SVP Digital, Yara Africa & Asia",
    description: "Yim Cheng Siew is a seasoned technology leader with deep expertise in driving digital transformation, and creating business value across diverse industries and regions. Currently the SVP Digital at Yara Africa Asia, she previously served as Chief Digital Officer at ComfortDelGro Group and JTC Corporation.",
    initials: "YS",
    bgColor: "bg-sky-light",
    image: "/images/Mentors/MdmSiew.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Healthcare", "Education"],
  },
  {
    name: "Ee Ling Lim",
    title: "CEO, Wavesparks",
    description: "Ee Ling is the CEO of Wavesparks, an entrepreneurship platform that designs hands-on accelerator programs, innovation training, and mentorship for youth founders across Asia. She works closely with Gen Z and youth leaders to build not just startups, but clarity, confidence, and real-world skills for an uncertain future.",
    initials: "EL",
    bgColor: "bg-purple/20",
    image: "/images/Mentors/MsEeLingLim.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Education", "Healthcare", "Finance"],
  },
  {
    name: "Richard Khew",
    title: "Chief Operating Officer, Parkway Laboratories",
    description: "As Chief Operating Officer of Parkway Laboratories, I lead our operations with a focus on people, performance, and purpose. With a strong background in clinical laboratory management, I'm passionate about building efficient, technology-driven systems that enhance collaboration, accuracy, and service excellence.",
    initials: "RK",
    bgColor: "bg-pink/20",
    image: "/images/Mentors/MrRichard.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Healthcare", "Education"],
  },
  {
    name: "Elizabeth Han",
    title: "Group Head Innovation and Transformation, IHH Healthcare Singapore",
    description: "Elizabeth Han is the Group Head of Innovation and Transformation at IHH Healthcare. She sets the company's innovation agenda and leads the Group's corporate venture capital arm, strategic partnerships, and internal innovation programmes. She is also driving IHH's multiyear journey to strengthen and accelerate its growth trajectory.",
    initials: "EH",
    bgColor: "bg-coral/20",
    image: "/images/Mentors/MsElizabeth.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Healthcare"],
  },
  {
    name: "Jerrick Tee",
    title: "Manager, NTU",
    description: "With my previous experiences in founding nonprofit and renewable energy startup, I'm glad to speak with you from anything across ideation, product-market fit, go-to-market to business model innovations. I sincerely believe that there's no ideas too tiny and no amount of funds too huge to ask for.",
    initials: "JT",
    bgColor: "bg-yellow/20",
    image: "/images/Mentors/MrJerrick.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Energy", "Education"],
  },
  {
    name: "Roy Wee",
    title: "AVP Digital Products and Services, IHH Healthcare Singapore",
    description: "Roy is a digital pioneer and has since become a seasoned expert in digital transformation across diverse industries including education, hospitality, eCommerce and healthcare. His proficiency in implementing robust digital platforms has garnered industry recognition.",
    initials: "RW",
    bgColor: "bg-teal-light",
    image: "/images/Mentors/MrRoy.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Healthcare"],
  },
  {
    name: "Aditya Kumar",
    title: "Director, Schneider Electric",
    description: "Aditya Kumar brings nearly three decades of regional leadership experience across the energy, infrastructure, and digital power sectors, having delivered complex electrical, automation, and construction program portfolios.",
    initials: "AK",
    bgColor: "bg-sky-light",
    image: "/images/Mentors/MrAditya.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Energy"],
  },
  {
    name: "Vineet Agarwal",
    title: "CEO, Validus Capital",
    description: "Vineet Agarwal serves as the CEO of Validus Capital, overseeing the strategic expansion of the SME Lending portfolio in Singapore. With a focus on fostering sustainable growth, he collaborates closely with local businesses to tailor financing solutions.",
    initials: "VA",
    bgColor: "bg-purple/20",
    image: "/images/Mentors/MrVineet.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Finance"],
  },
  {
    name: "Pranav Krishna",
    title: "Founder, ShareRight",
    description: "Pranav is a Singapore-based entrepreneur and sustainability advocate who builds ventures at the intersection of social impact and innovation. As founder of ShareRight, he's creating an \"Airbnb for businesses\" that helps SMEs and social enterprises turn idle spaces into shared value.",
    initials: "PK",
    bgColor: "bg-pink/20",
    image: "/images/Mentors/MrPranav.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Energy"],
  },
  {
    name: "Lionel Chok",
    title: "Managing Consultant, iMMERSiVELY",
    description: "A specialist in Extended Reality and Spatial Computing, Lionel got invited to mentor and advise founders when his own Immersive Tech startup was acquired during Covid-19 to embark on the Web3 journey.",
    initials: "LC",
    bgColor: "bg-coral/20",
    image: "/images/Mentors/MrLionel.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Education"],
  },
  {
    name: "Roland Liew",
    title: "Head of Digital Transformation, IHH Healthcare Singapore",
    description: "Meet a digital transformation leader who bridges the gap between complex tech and real-world impact. With over 15 years of experience—spanning B2C and Healthcare—he specializes in turning tech related strategies into tangible results.",
    initials: "RL",
    bgColor: "bg-yellow/20",
    image: "/images/Mentors/MrRoland.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Healthcare"],
  },
  {
    name: "Kwok Quek Sin",
    title: "Group Chief Business Technology Officer, IHH Healthcare Singapore",
    description: "Quek Sin (QS) is the Group Chief Business Technology Officer at IHH Healthcare, one of the world's largest healthcare providers. He leads IHH's enterprise-wide AI and data initiatives, driving the adoption of scalable platforms.",
    initials: "KQ",
    bgColor: "bg-teal-light",
    image: "/images/Mentors/MrKwok.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Healthcare"],
  },
  {
    name: "Vivian Tay",
    title: "COO, Braindge Singapore Pte Ltd",
    description: "Always interesting to be involved in the digital transformation journey after 40 years. Life is meaningful when you can contribute or suggest new ways of solving challenges. Vivian Tay, recognized in the SG100 Women in Tech 2023, is a prominent Executive Advisor.",
    initials: "VT",
    bgColor: "bg-sky-light",
    image: "/images/Mentors/MsVivian.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Education", "Finance", "Healthcare"],
  },
  {
    name: "Clara Kwan",
    title: "Chief Sustainability Officer, Singapore Manufacturing Federation",
    description: "Clara Kwan is the Chief Sustainability Officer at the Singapore Manufacturing Federation where she leads sustainability strategy and industry capability-building initiatives for the manufacturing sector.",
    initials: "CK",
    bgColor: "bg-purple/20",
    image: "/images/Mentors/MsClara.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Energy"],
  },
  {
    name: "Ong Xuan Feng",
    title: "Senior Investment Manager, Two Trees Capital",
    description: "Leading the investment at Two Trees Capital (single family office for family behind Genting). Focusing on direct investment in growth/late stage VC and lower/mid market PE deals.",
    initials: "OX",
    bgColor: "bg-pink/20",
    image: "/images/Mentors/MrOngXuanFeng.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Education", "Healthcare", "Finance"],
  },
  {
    name: "Simon Wong",
    title: "MD, Sonexa Capital",
    description: "I'm a seasoned Fractional CFO and startup advisor with over 30 years of global experience across investment banking, financial services, venture capital, and strategic business development. My background spans Wall Street, Silicon Valley, and the APAC region.",
    initials: "SW",
    bgColor: "bg-coral/20",
    image: "/images/Mentors/MrSimon.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Finance"],
  },
  {
    name: "Mark Mullinix",
    title: "Principal, Growth Vectors",
    description: "I enable organisations to access senior leadership talent more flexibly, cost-effectively and sustainably. I partner with founders, CEOs and boards to solve problems at the intersection of strategy, leadership and execution.",
    initials: "MM",
    bgColor: "bg-yellow/20",
    image: "/images/Mentors/MrMark.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Education", "Finance"],
  },
  {
    name: "Karen Ng",
    title: "Head of Cooling Infrastructure, ENGIE South East Asia",
    description: "Hi, I'm Karen. I started my career in startups (including being employee #1), and today I work at a global energy company, leading strategy and transformation across Southeast Asia.",
    initials: "KN",
    bgColor: "bg-teal-light",
    image: "/images/Mentors/MsKaren.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Energy"],
  },
  {
    name: "Guneet Singh",
    title: "Founder & CEO, Sparkonomy",
    description: "A visionary leader with 20+ years of experience at technology companies like Google, Microsoft, and Samsung, Guneet is recognized for his expertise in driving product adoption and global growth.",
    initials: "GS",
    bgColor: "bg-sky-light",
    image: "/images/Mentors/MrGuneet.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Education", "Finance", "Healthcare"],
  },
  {
    name: "Glenville Lee",
    title: "Investment Director, Shift4Good",
    description: "Venture capital and growth equity impact investor. CFA Charterholder. Engineer by training.",
    initials: "GL",
    bgColor: "bg-purple/20",
    image: "/images/Mentors/MrGlenville.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Energy"],
  },
  {
    name: "Yang Guirong",
    title: "Director Of Operations, Gleneagles Hospital, IHH Healthcare",
    description: "I started off my journey as a clinician. I spent the first 7 years of my career in clinical medicine. For the last 5 years, I've been blessed with the opportunity of overseeing the operations of some of the brand names in our private hospital system.",
    initials: "YG",
    bgColor: "bg-pink/20",
    image: "/images/Mentors/DrYang.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Healthcare"],
  },
  {
    name: "Eddy Chan",
    title: "Co-founder, NewCampus",
    description: "I've been a business owner for the past 10 years, spending my time across Education, Finance, and F&B. I'm obsessed with finding undervalued opportunities, and replacing/automating myself in projects that I take on.",
    initials: "EC",
    bgColor: "bg-coral/20",
    image: "/images/Mentors/MrEddy.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Education", "Finance"],
  },
  {
    name: "Paul Singh Gill",
    title: "Co-Founder, Iota Omega Ventures Pte Ltd",
    description: "Paul has more than 25 years of professional working experience analyzing human behaviour and how this influences process flows and quality in manufacturing and service organizations.",
    initials: "PS",
    bgColor: "bg-yellow/20",
    image: "/images/Mentors/MrPaul.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Finance"],
  },
  {
    name: "Yvonne Teng",
    title: "Chief of Staff, NewCampus",
    description: "Builder and scaler across growth and digital innovation projects. Passionate about strategy and execution and leveraging technology for societal impact. Worked across Europe, Asia and North American markets across GovTech, HealthTech and Education.",
    initials: "YT",
    bgColor: "bg-teal-light",
    image: "/images/Mentors/MsYvonne.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Healthcare", "Education"],
  },
  {
    name: "Megan Miao",
    title: "Head of Services, NewCampus",
    description: "At NewCampus, we build programmes to scale people, teams, and organisations. I look after our team of technologists, educators, designers, researchers, and creatives to enable them to do their best work.",
    initials: "MM",
    bgColor: "bg-sky-light",
    image: "/images/Mentors/MsMegan.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Education", "Finance"],
  },
];

const FullMentorsSection = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const gridRef = useRef<HTMLDivElement | null>(null);

  // Extract all unique themes
  const allThemes = Array.from(new Set(mentors.flatMap(m => m.themes))).sort();

  // Filter mentors based on search and selected themes
  const filteredMentors = mentors
    .filter(mentor => {
      const matchesSearch = 
        mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTheme = selectedThemes.length === 0 || 
        selectedThemes.some(theme => mentor.themes.includes(theme));
      
      return matchesSearch && matchesTheme;
    })
    .sort((a, b) => {
      const companyA = getCompanyName(a.title);
      const companyB = getCompanyName(b.title);

      const isIhhA = companyA.toLowerCase() === "ihh healthcare singapore";
      const isIhhB = companyB.toLowerCase() === "ihh healthcare singapore";

      if (isIhhA && !isIhhB) {
        return -1;
      }

      if (!isIhhA && isIhhB) {
        return 1;
      }

      const companyCompare = companyA.localeCompare(companyB);
      if (companyCompare !== 0) {
        return companyCompare;
      }

      return a.name.localeCompare(b.name);
    });

  const toggleTheme = (theme: string) => {
    setSelectedThemes(prev => 
      prev.includes(theme) 
        ? prev.filter(t => t !== theme)
        : [...prev, theme]
    );

  };

  const handleOpenPopup = (mentor) => {
    setSelectedMentor(mentor);
  };

  const handleClosePopup = () => {
    setSelectedMentor(null);
  };

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-teal-light text-teal text-sm font-semibold rounded-full mb-4">
            <Users className="inline w-4 h-4 mr-2" />
            Expert Guidance
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
            Meet All Our <span className="text-gradient">Mentors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn from industry leaders and experienced entrepreneurs who are dedicated to your success
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search mentors by name, title, or expertise..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground placeholder:text-muted-foreground"
            />
          </div>
 
        </div>

        {/* Theme Filter Tags */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {allThemes.map(theme => (
              <button
                key={theme}
                onClick={() => toggleTheme(theme)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  selectedThemes.includes(theme)
                    ? 'bg-accent text-accent-foreground border-accent shadow-md'
                    : 'bg-card border-border/50 text-foreground hover:border-accent/50 hover:bg-card/80'
                }`}
              >
                {theme}
              </button>
            ))}
          </div>
          {selectedThemes.length > 0 && (
            <div className="text-center mt-4">
              <button
                onClick={() => setSelectedThemes([])}
                className="text-sm text-accent hover:text-accent/80 transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground text-sm">
            Showing {filteredMentors.length} of {mentors.length} mentors
          </p>
        </div>

        {/* Mentors Grid - 7 rows x 4 columns */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredMentors.map((mentor, index) => (
            <div
              key={mentor.name}
              onClick={() => handleOpenPopup(mentor)}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-border/50 cursor-pointer flex flex-col items-center justify-center min-h-[240px] opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="w-full h-full object-cover"
                  style={{ 
                    objectPosition: mentor.imagePosition,
                    transform: `scale(${mentor.imageZoom || 1})`
                  }}
                />
              </div>
              
              <h3 className="font-display font-bold text-base text-card-foreground text-center mb-0">
                {mentor.name}
              </h3>

              <div className="min-h-[3.25rem] flex items-center justify-center mt-0 mb-3">
                <div className="text-center leading-tight">
                  <p className="text-xs text-accent font-semibold">
                    {getTitleParts(mentor.title).role}
                  </p>
                  {getTitleParts(mentor.title).company && (
                    <p className="text-[11px] text-muted-foreground mt-1">
                      {getTitleParts(mentor.title).company}
                    </p>
                  )}
                </div>
              </div>

              {/* Theme Tags */}
              <div className="flex flex-wrap gap-1 justify-center">
                {mentor.themes.map(theme => (
                  <span
                    key={theme}
                    className="inline-block px-2 py-0.5 text-[10px] font-semibold rounded-full border"
                    style={getThemeStyle(theme)}
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No mentors found matching your search or filter criteria.
            </p>
          </div>
        )}
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
                <div className={`h-40 ${selectedMentor.bgColor} w-full flex items-end justify-center pb-6`}>
                     <div className="w-32 h-32 rounded-full bg-white shadow-lg overflow-hidden transform translate-y-12">
                        <img
                          src={selectedMentor.image}
                          alt={selectedMentor.name}
                          loading="eager"
                          decoding="async"
                          fetchPriority="high"
                          className="w-full h-full object-cover"
                          style={{ 
                            objectPosition: selectedMentor.imagePosition,
                            transform: `scale(${selectedMentor.imageZoom || 1})`
                          }}
                        />
                     </div>
                </div>

                <div className="pt-16 pb-8 px-8 text-center">
                    <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                        {selectedMentor.name}
                    </h3>
                    <div className="mb-6">
                      <p className="text-accent font-semibold">
                        {getTitleParts(selectedMentor.title).role}
                      </p>
                      {getTitleParts(selectedMentor.title).company && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {getTitleParts(selectedMentor.title).company}
                        </p>
                      )}
                    </div>

                    {/* Theme Tags in Modal */}
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                      {selectedMentor.themes.map(theme => (
                        <span
                          key={theme}
                          className="inline-block px-3 py-1 text-xs font-semibold rounded-full border"
                          style={getThemeStyle(theme)}
                        >
                          {theme}
                        </span>
                      ))}
                    </div>
                    
                    <div className="text-muted-foreground leading-relaxed text-sm md:text-base text-left">
                        {selectedMentor.description}
                    </div>


                </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FullMentorsSection;

