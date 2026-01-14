import { ArrowRight, Instagram, Send } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import ideasjamPattern from "@/assets/IdeasjamPattern.svg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }
    const rect = section.getBoundingClientRect();
    section.style.setProperty("--mouse-x", `${rect.width * 0.5}px`);
    section.style.setProperty("--mouse-y", `${rect.height * 0.35}px`);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    event.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    event.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mouse-x", `${rect.width * 0.5}px`);
    event.currentTarget.style.setProperty("--mouse-y", `${rect.height * 0.35}px`);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-hero-gradient overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 pointer-events-none hero-pattern-reveal"
        style={{
          backgroundImage: `url(${ideasjamPattern})`,
          backgroundRepeat: "repeat",
          backgroundSize: "1920px auto",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none hero-pattern-hotspot"
        style={{
          backgroundImage: `url(${ideasjamPattern})`,
          backgroundRepeat: "repeat",
          backgroundSize: "1920px auto",
          filter: "sepia(1) saturate(4) hue-rotate(350deg) brightness(1.15)",
          maskImage:
            "radial-gradient(220px circle at var(--mouse-x) var(--mouse-y), black 0, black 120px, transparent 220px)",
          WebkitMaskImage:
            "radial-gradient(220px circle at var(--mouse-x) var(--mouse-y), black 0, black 120px, transparent 220px)",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-left">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-scale-in border border-accent/30"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="text-sm font-medium text-accent uppercase tracking-wider">IdeasJam 2026</span>
            </div>

            {/* Main heading */}
            <h1
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 animate-slide-up leading-tight"
              style={{ animationDelay: "0.65s" }}
            >
              Turn Your Ideas Into{" "}
              <span className="text-gradient bg-gradient-to-r from-coral via-accent to-coral bg-clip-text text-transparent">
                Tomorrow's Reality
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-foreground/70 max-w-xl mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.75s" }}>
              IdeasJam is a start-up competition that nurtures aspiring entrepreneurs in business ideation and start-up development.
            </p>

            {/* Eligibility Highlight */}
            <div className="bg-gradient-to-r from-accent/20 to-coral/20 backdrop-blur-sm border border-accent/30 rounded-2xl p-2 mb-8 animate-slide-up cursor-pointer group transition-all duration-300 hover:bg-accent/30 hover:border-accent/50 h-20 flex items-center" style={{ animationDelay: "0.8s" }}>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse group-hover:animate-bounce flex-shrink-0"></div>
                <span className="text-base font-semibold text-accent uppercase tracking-wider group-hover:hidden transition-opacity duration-300">Join us and bring your ideas to life!</span>
                <span className="text-base font-medium text-black hidden group-hover:block transition-opacity duration-300 leading-relaxed overflow-hidden text-ellipsis whitespace-nowrap">
                  We are open to all undergraduate students from universities in Singapore.
                </span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-up" style={{ animationDelay: "0.85s" }}>
              <Button variant="hero" size="xl" asChild>
                <a href="https://tinyurl.com/IdeasJam2025SignUp" target="_blank" rel="noopener noreferrer">
                  Register Now <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <a 
                href="#" 
                className="text-accent font-medium hover:underline flex items-center gap-2 px-4 py-3"
              >
                Participant Deck →
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mb-8 animate-slide-up" style={{ animationDelay: "0.95s" }}>
              <a
                href="https://www.instagram.com/ideasjam_ntu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/70 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/ideasjam2025"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/70 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>

            {/* Free participation */}
            <p className="text-sm text-foreground/60 animate-slide-up" style={{ animationDelay: "1.05s" }}>
              🎉 Participation is free!
            </p>
          </div>

          {/* Right content - Hero image */}
          <div className="relative animate-slide-up" style={{ animationDelay: "0.95s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Students brainstorming startup ideas in an innovation hub" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider into About section */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg
          className="w-full h-10 md:h-24"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 40 C 240 120 480 0 720 60 C 960 120 1200 20 1440 80 V 120 H 0 Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
