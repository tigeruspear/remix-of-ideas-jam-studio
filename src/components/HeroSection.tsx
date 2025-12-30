import { ArrowRight, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-32 left-10 w-16 h-16 bg-sky-light rounded-full animate-float opacity-60" />
        <div className="absolute top-48 right-20 w-24 h-24 bg-coral/20 rounded-full animate-float-delayed" />
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-yellow/20 rounded-full animate-float-slow" />
        <div className="absolute bottom-20 right-1/3 w-12 h-12 bg-pink/20 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-teal-light rounded-full animate-float-delayed" />
      </div>

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
            {/* Decorative elements around image */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-coral rounded-full animate-pulse-soft" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-sky-light rounded-full animate-pulse-soft" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 -right-6 w-6 h-6 bg-yellow rounded-full animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;