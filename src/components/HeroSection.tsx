import { ArrowRight, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden pt-20">
      {/* Topographic lines background */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left side contour lines */}
        <path
          className="topo-line topo-line-1"
          style={{ '--line-opacity': 0.4 } as React.CSSProperties}
          d="M-50 200 Q50 180 80 300 Q100 450 60 600 Q30 750 -30 850"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          fill="none"
        />
        <path
          className="topo-line topo-line-2"
          style={{ '--line-opacity': 0.35 } as React.CSSProperties}
          d="M-20 150 Q100 130 140 280 Q170 450 120 620 Q80 780 20 900"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          fill="none"
        />
        <path
          className="topo-line topo-line-3"
          style={{ '--line-opacity': 0.3 } as React.CSSProperties}
          d="M30 100 Q160 80 200 250 Q240 440 180 630 Q130 800 80 950"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Top right contour lines */}
        <path
          className="topo-line topo-line-4"
          style={{ '--line-opacity': 0.35 } as React.CSSProperties}
          d="M900 -50 Q950 50 1100 80 Q1250 100 1400 60 Q1500 30 1550 -20"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          fill="none"
        />
        <path
          className="topo-line topo-line-5"
          style={{ '--line-opacity': 0.3 } as React.CSSProperties}
          d="M850 -20 Q920 100 1080 140 Q1240 170 1420 120 Q1520 80 1600 40"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          fill="none"
        />
        <path
          className="topo-line topo-line-6"
          style={{ '--line-opacity': 0.25 } as React.CSSProperties}
          d="M800 30 Q880 160 1050 200 Q1220 240 1440 180 Q1550 140 1650 100"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Right side flowing lines */}
        <path
          className="topo-line topo-line-7"
          style={{ '--line-opacity': 0.4 } as React.CSSProperties}
          d="M1500 300 Q1400 320 1350 400 Q1300 500 1350 620 Q1400 740 1500 850"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          fill="none"
        />
        <path
          className="topo-line topo-line-8"
          style={{ '--line-opacity': 0.35 } as React.CSSProperties}
          d="M1550 250 Q1420 280 1380 380 Q1330 500 1390 640 Q1450 780 1550 900"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Bottom decorative lines */}
        <path
          className="topo-line topo-line-9"
          style={{ '--line-opacity': 0.25 } as React.CSSProperties}
          d="M200 850 Q400 820 600 860 Q800 900 1000 870 Q1200 840 1400 880"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          fill="none"
        />
        <path
          className="topo-line topo-line-10"
          style={{ '--line-opacity': 0.2 } as React.CSSProperties}
          d="M100 900 Q350 860 600 910 Q850 960 1100 920 Q1350 880 1500 930"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          fill="none"
        />

        {/* Additional organic curves */}
        <path
          className="topo-line topo-line-11"
          style={{ '--line-opacity': 0.25 } as React.CSSProperties}
          d="M-30 400 Q100 380 150 450 Q200 550 150 650 Q80 720 -20 750"
          stroke="hsl(var(--accent))"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          className="topo-line topo-line-12"
          style={{ '--line-opacity': 0.3 } as React.CSSProperties}
          d="M1300 150 Q1380 200 1420 300 Q1450 400 1400 480"
          stroke="hsl(var(--accent))"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-scale-in border border-accent/30">
              <span className="text-sm font-medium text-accent uppercase tracking-wider">IdeasJam 2026</span>
            </div>

            {/* Main heading */}
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 animate-slide-up leading-tight">
              Turn Your Ideas Into{" "}
              <span className="text-gradient bg-gradient-to-r from-coral via-accent to-coral bg-clip-text text-transparent">
                Tomorrow's Reality
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-foreground/70 max-w-xl mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
              IdeasJam is a start-up competition that nurtures aspiring entrepreneurs in business ideation and start-up development. Join us and bring your ideas to life!
            </p>

            {/* Eligibility Highlight */}
            <div className="bg-gradient-to-r from-accent/20 to-coral/20 backdrop-blur-sm border border-accent/30 rounded-2xl p-6 mb-8 animate-slide-up cursor-pointer group transition-all duration-300 hover:bg-accent/30 hover:border-accent/50 h-20 flex items-center" style={{ animationDelay: "0.15s" }}>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse group-hover:animate-bounce flex-shrink-0"></div>
                <span className="text-sm font-semibold text-accent uppercase tracking-wider group-hover:hidden transition-opacity duration-300">Open to All</span>
                <span className="text-sm font-medium text-foreground hidden group-hover:block transition-opacity duration-300 leading-relaxed overflow-hidden text-ellipsis whitespace-nowrap">
                  We are open to all undergraduate students from universities in Singapore.
                </span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
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
            <div className="flex items-center gap-4 mb-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
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
            <p className="text-sm text-foreground/60 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              🎉 Participation is free!
            </p>
          </div>

          {/* Right content - Hero image */}
          <div className="relative animate-slide-up" style={{ animationDelay: "0.3s" }}>
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
