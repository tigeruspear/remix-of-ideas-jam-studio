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
        {/* Large sweeping curve from top-left flowing across */}
        <path
          className="topo-line topo-line-1"
          style={{ '--line-opacity': 0.45 } as React.CSSProperties}
          d="M-100 50 Q200 30 400 150 Q600 280 500 450 Q380 600 200 700 Q50 780 -50 900"
          stroke="hsl(var(--accent))"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          className="topo-line topo-line-2"
          style={{ '--line-opacity': 0.35 } as React.CSSProperties}
          d="M-80 -20 Q250 0 480 130 Q700 260 580 450 Q440 620 280 730 Q100 830 -30 950"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          fill="none"
        />
        <path
          className="topo-line topo-line-3"
          style={{ '--line-opacity': 0.25 } as React.CSSProperties}
          d="M-40 -80 Q300 -40 550 100 Q780 240 650 440 Q500 640 350 760 Q150 880 20 1000"
          stroke="hsl(var(--accent))"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Top-right diagonal sweep */}
        <path
          className="topo-line topo-line-4"
          style={{ '--line-opacity': 0.4 } as React.CSSProperties}
          d="M800 -100 Q950 20 1100 100 Q1300 200 1400 350 Q1480 480 1550 650"
          stroke="hsl(var(--accent))"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          className="topo-line topo-line-5"
          style={{ '--line-opacity': 0.3 } as React.CSSProperties}
          d="M900 -80 Q1020 30 1150 120 Q1320 230 1420 380 Q1500 520 1580 700"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          fill="none"
        />
        <path
          className="topo-line topo-line-6"
          style={{ '--line-opacity': 0.2 } as React.CSSProperties}
          d="M1000 -60 Q1100 50 1200 150 Q1350 270 1450 420 Q1530 570 1600 760"
          stroke="hsl(var(--accent))"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Center-right organic blob-like contours */}
        <path
          className="topo-line topo-line-7"
          style={{ '--line-opacity': 0.35 } as React.CSSProperties}
          d="M1200 200 Q1100 280 1080 400 Q1060 550 1150 650 Q1280 750 1450 720 Q1550 700 1600 650"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          fill="none"
        />
        <path
          className="topo-line topo-line-8"
          style={{ '--line-opacity': 0.25 } as React.CSSProperties}
          d="M1250 150 Q1120 240 1100 380 Q1080 530 1180 640 Q1320 760 1500 730 Q1600 710 1650 660"
          stroke="hsl(var(--accent))"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Bottom flowing waves */}
        <path
          className="topo-line topo-line-9"
          style={{ '--line-opacity': 0.3 } as React.CSSProperties}
          d="M-50 700 Q150 650 350 700 Q550 760 750 700 Q950 640 1150 700 Q1350 770 1500 720"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          fill="none"
        />
        <path
          className="topo-line topo-line-10"
          style={{ '--line-opacity': 0.2 } as React.CSSProperties}
          d="M-80 780 Q120 720 320 780 Q520 850 720 780 Q920 700 1120 780 Q1320 860 1480 800"
          stroke="hsl(var(--accent))"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Small accent curves */}
        <path
          className="topo-line topo-line-11"
          style={{ '--line-opacity': 0.4 } as React.CSSProperties}
          d="M600 50 Q700 100 720 200 Q730 300 680 380"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          fill="none"
        />
        <path
          className="topo-line topo-line-12"
          style={{ '--line-opacity': 0.35 } as React.CSSProperties}
          d="M50 500 Q150 450 250 480 Q350 520 380 620"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Subtle inner details */}
        <path
          className="topo-line topo-line-1"
          style={{ '--line-opacity': 0.15 } as React.CSSProperties}
          d="M300 300 Q400 350 420 450 Q430 550 380 620"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
          fill="none"
        />
        <path
          className="topo-line topo-line-3"
          style={{ '--line-opacity': 0.15 } as React.CSSProperties}
          d="M1000 500 Q1050 550 1040 650 Q1020 720 950 760"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-scale-in border border-accent/30">
              <span className="text-sm font-medium text-accent uppercase tracking-wider">IdeasJam</span>
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
    </section>
  );
};

export default HeroSection;