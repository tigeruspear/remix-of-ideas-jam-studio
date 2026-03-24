import { useRef, useState, type CSSProperties } from "react";
import { Gavel, X } from "lucide-react";

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

const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

type Judge = {
  name: string;
  title: string;
  description: string;
  initials: string;
  bgColor: string;
  image: string;
  imagePosition: string;
  imageZoom: number;
  themes: string[];
};

const judges: Judge[] = [
  {
    name: "Frederic (Fred) Maury",
    title: "Executive Vice President ASIA, TRIGO ASIA",
    description:
      "Fred Maury is a Senior Executive at TRIGO, leading the company's Asia Division and serving as a member of the Group Executive Committee. A French-trained aerospace engineer, he holds an Engineering Diploma from France and a Master's degree in Mechanical Engineering from the University of California, San Diego. As a young executive he graduated with an MBA from Olin business school at Washington University in the US. Fred began his career in engineering and sales roles within the aerospace sector, working across Europe and Asia. He has since built deep expertise in the quality segment, specializing in testing, inspection, and certification. Originally from France, Fred has lived in Asia for 28 years – across Thailand, China, Hong Kong, and Singapore, where he has been based for the past 14 years. He became a Singapore citizen in 2024.",
    initials: "FM",
    bgColor: "bg-coral/20",
    image: "/images/Judges/MrFred.jpeg",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Energy"],
  },
  {
    name: "Parag Singhal",
    title: "CEO, FinGenesis AI",
    description:
      "Parag is a distinguished leader at the nexus of finance and artificial intelligence (AI). As an AI pioneer, passionate builder, and the Founder of FinGenesis, he is at the forefront of building AI that enables smarter access to wealth and redefines financial market participation. Drawing on a formidable 22-year career marked by transformational leadership roles at Wall Street titans like J.P. Morgan, Barclays, and HSBC, and Startups with exits, Parag combines deep industry knowledge with relentless grit and resilience to drive innovation. On stage, he has a dynamic presence and the rare ability to distill deep complexity into accessible, inspiring narratives. His conversations seamlessly flow in the evolving synthesis of AI and humanity, the pragmatic realities of building globally scalable ventures, and the profound importance of living with the intention to cultivate love and abundance. Beyond the boardroom, Parag is a global citizen with a warm and spiritual perspective. Raised by a family of doctors dedicated to philanthropic impact, and now navigating life with his multicultural American family, he is an advocate for the belief that our collective brilliance can forge extraordinary advancements for everyone. A lifelong student of growth, grit, resilience, adrenaline, and connection, his eclectic passions range from skydiving and DJ-ing to fostering friendships on the tennis court.",
    initials: "PS",
    bgColor: "bg-yellow/20",
    image: "/images/Judges/MrParag.jpeg",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Finance", "Healthcare"],
  },
  {
    name: "Nicholas Edwards",
    title: "Head of Academic Content, Confiidence & XSEED Education",
    description:
      "Nick leads academic content at Confiidence and contributes to several other areas. He previously worked as an educator and curriculum designer in the United States and in South Korea. Nick has a degree in psychology from Carleton College and an Ed.M from Harvard Graduate School of Education.",
    initials: "NE",
    bgColor: "bg-teal-light",
    image: "/images/Judges/MrNicholas.jpeg",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Education"],
  },
  {
    name: "Michael Lance Tan",
    title: "Founder, Nexus Ventures",
    description:
      "Michael Tan is a venture builder and business strategist with over 25 years of experience across Asia Pacific, specialising in market expansion and technology ventures. He began his career at HDG (now part of Cendant Corp), spending 12 years in consulting across Greater China, developing deep expertise in helping companies enter Chinese markets and guiding Chinese firms into international ones. Michael has held senior executive roles including Group Vice-President at New Express Technology Group, Joint CEO of Perfect Vision Media Group, and President of Asia Pacific at Phicomm, where he led the company's international expansion. He also served as an advisor to Hupomone Capital Partners, a China-focused private equity fund, looking after three of their portfolio companies in China. As a serial entrepreneur, his recent ventures span traveltech and urban mobility, including China Pass, SmooveX, GoFiji, and Transit Protocol. He also serves as an APAC mentor at 500 Startups.",
    initials: "MT",
    bgColor: "bg-sky-light",
    image: "/images/Judges/MrMichael.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: [],
  },
  {
    name: "Darryl Chan",
    title: "Director, Energy Market Authority",
    description:
      "I spent over 15 years of my career in the energy sector, and now oversee the Nuclear Energy Office in the Energy Market Authority. My team and I are responsible for assessing the feasibility of deploying advanced nuclear energy technologies in Singapore to meet our national energy needs.",
    initials: "DC",
    bgColor: "bg-pink/20",
    image: "/images/Judges/MrDarryl.jpeg",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Energy"],
  },
  {
    name: "Khairul Rusydi",
    title: "Co-Founder & CEO, Reactor",
    description:
      "Khairul Rusydi lives at the intersection of tech, youth development and Entrepreneurship Education (EntreEd). He was a previous Enterprise Singapore (ESG) scholar, and a graduate of the VC Unlocked programme with Stanford and 500 Global. Rusydi has previously served on the boards of various youth development organizations, including *SCAPE, Advisory and The Young SEAkers. Most notably, he served on the Youth Action Panel with the Singapore Ministry of Culture, Community and Youth (MCCY), as well as the Alliance for Action with the Ministry of Manpower (MOM). Rusydi currently leads Reactor (www.reactor.school) as the co-founder and CEO. Reactor School works with 300+ high schools and 150+ universities in the APAC region to help students turn their ideas into companies. Thereafter, Reactor Ventures helps to syndicate investments in student-led startups, with an average ticket size of SGD $100k per team.",
    initials: "KR",
    bgColor: "bg-purple/20",
    image: "/images/Judges/MrKhairul.jpg",
    imagePosition: "center bottom",
    imageZoom: 1.0,
    themes: ["Education"],
  },
  {
    name: "Janine Teo",
    title: "CEO, Solve Education!",
    description:
      "Janine Teo is the CEO of Solve Education!, an AI-powered learning platform transforming funding into measurable, scalable impact across underserved communities. Her work focuses on delivering high-engagement education through technology designed for low-resource environments – ensuring every dollar translates into real learning outcomes. Under her leadership, Solve Education! has reached learners across multiple countries, leveraging data, gamification, and AI to drive sustained engagement and improvement. Janine is a Fellow of the University of Pennsylvania's Global Social Impact House and the first Asian recipient of the Mensa International Intellectual Benefits to Society Award. She is building systems that don't just deliver education – but create lasting, measurable change at scale.",
    initials: "JT",
    bgColor: "bg-coral/20",
    image: "/images/Judges/MsJanine.png",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Education"],
  },
  {
    name: "Addison Ho Yu Ann",
    title: "Project Manager - Industrial Automation, Schneider Electric",
    description:
      "Project manager, Leader and Specialist in R&D for hardware and technology! Always happy to share my experience and looking forward to exchanging insights and positivity with the younger generation, creating business value together!",
    initials: "AH",
    bgColor: "bg-yellow/20",
    image: "/images/Judges/MrAddison.jpeg",
    imagePosition: "center top",
    imageZoom: 1.0,
    themes: ["Energy"],
  },
];

const JudgesSection = () => {
  const [selectedJudge, setSelectedJudge] = useState<Judge | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  // Display judges in CSV order (no sorting)
  const filteredJudges = judges;

  const handleOpenPopup = (judge: Judge) => {
    setSelectedJudge(judge);
  };

  const handleClosePopup = () => {
    setSelectedJudge(null);
  };

  return (
    <section id="judges" className="bg-background relative overflow-hidden">
      <div
        className="relative w-full min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] overflow-hidden bg-scroll md:bg-fixed"
        style={{
          backgroundImage: "url('/images/Judges/judgehero1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#111c52]/85 via-[#2a3db9]/70 to-[#4058e0]/40" />

        <div className="relative h-full min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] container mx-auto px-4 md:px-8 lg:px-10 pt-10 md:pt-12 pb-10 md:pb-14 flex items-end">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center px-4 py-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-4 border border-white/25">
              <Gavel className="w-4 h-4 mr-2" />
              Expert Evaluation
            </span>
            <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-4">
              Meet Our Judges
            </h2>
            <p className="text-base md:text-xl text-white/90 max-w-2xl">
              A panel of experienced leaders will evaluate your ideas, provide feedback, and select the winning teams.
            </p>

            <div className="mt-5 ml-auto w-fit text-right text-white/90 bg-black/25 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20 lg:hidden">
              <p className="text-xs sm:text-sm font-medium">Felipe Daguila - CEO, Terrascope Pte Ltd</p>
              <p className="text-[11px] sm:text-xs text-white/80">IdeasJam2025 Finale</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-6 right-6 md:bottom-8 md:right-8 text-right text-white/90 bg-black/25 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
          <p className="text-xs md:text-sm font-medium">Felipe Daguila - CEO, Terrascope Pte Ltd</p>
          <p className="text-[11px] md:text-xs text-white/80">IdeasJam2025 Finale</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">

        {/* Judges Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {filteredJudges.map((judge, index) => (
            <div
              key={judge.name}
              onClick={() => handleOpenPopup(judge)}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-border/50 cursor-pointer flex flex-col items-center justify-center min-h-[240px] opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={judge.image}
                  alt={judge.name}
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: judge.imagePosition,
                    transform: `scale(${judge.imageZoom || 1})`,
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              <h3 className="font-display font-bold text-base text-card-foreground text-center mb-0">
                {judge.name}
              </h3>

              <div className="min-h-[3.25rem] flex items-center justify-center mt-0 mb-3">
                <div className="text-center leading-tight">
                  <p className="text-xs text-accent font-semibold">
                    {getTitleParts(judge.title).role}
                  </p>
                  {getTitleParts(judge.title).company && (
                    <p className="text-[11px] text-muted-foreground mt-1">
                      {getTitleParts(judge.title).company}
                    </p>
                  )}
                </div>
              </div>


            </div>
          ))}
        </div>

        {filteredJudges.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No judges found matching your search or filter criteria.
            </p>
          </div>
        )}
      </div>

      {/* POPUP MODAL */}
      {selectedJudge && (
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
              <div
                className={`h-40 ${selectedJudge.bgColor} w-full flex items-end justify-center pb-6`}
              >
                <div className="w-32 h-32 rounded-full bg-white shadow-lg overflow-hidden transform translate-y-12">
                  <img
                    src={selectedJudge.image}
                    alt={selectedJudge.name}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: selectedJudge.imagePosition,
                      transform: `scale(${selectedJudge.imageZoom || 1})`,
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              </div>

              <div className="pt-16 pb-8 px-8 text-center">
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                  {selectedJudge.name}
                </h3>
                <div className="mb-6">
                  <p className="text-accent font-semibold">
                    {getTitleParts(selectedJudge.title).role}
                  </p>
                  {getTitleParts(selectedJudge.title).company && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {getTitleParts(selectedJudge.title).company}
                    </p>
                  )}
                </div>



                <div className="text-muted-foreground leading-relaxed text-sm md:text-base text-left">
                  {selectedJudge.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default JudgesSection;
