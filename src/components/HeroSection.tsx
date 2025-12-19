import { ArrowRight, Lightbulb, Rocket, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-32 left-10 w-20 h-20 bg-accent/20 blob animate-float" />
        <div className="absolute top-48 right-20 w-32 h-32 bg-sky/20 blob-alt animate-float-delayed" />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-yellow/20 blob animate-float-slow" />
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-pink/20 blob animate-float" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Year badge */}
          <div className="inline-flex items-center gap-2 bg-teal/30 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-scale-in border border-teal-light/20">
            <Lightbulb className="w-5 h-5 text-yellow" />
            <span className="text-sm font-medium text-primary-foreground">Start-up Competition 2025</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 animate-slide-up">
            Turn Your Ideas Into
            <span className="block mt-2 text-gradient bg-gradient-to-r from-yellow via-accent to-pink bg-clip-text text-transparent">
              Tomorrow's Reality
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            IdeasJam is a start-up competition that nurtures aspiring entrepreneurs in business ideation and start-up development. Join us and bring your ideas to life!
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="https://tinyurl.com/IdeasJam2025SignUp" target="_blank" rel="noopener noreferrer">
                Register Now <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#about">
                Learn More
              </a>
            </Button>
          </div>

          {/* Open to badge */}
          <div className="bg-teal/20 backdrop-blur-sm border border-teal-light/30 rounded-2xl p-6 max-w-xl mx-auto animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-lg md:text-xl font-medium text-primary-foreground">
              Open to all undergraduate students from <span className="text-accent font-semibold">universities in Singapore</span>
            </p>
          </div>

          {/* Hero image */}
          <div className="mt-16 relative max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-teal-light/20">
              <img 
                src={heroImage} 
                alt="Students brainstorming startup ideas in an innovation hub" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/40 to-transparent" />
            </div>
            {/* Decorative elements around image */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent rounded-full animate-pulse-soft" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-yellow/30 rounded-full animate-pulse-soft" style={{ animationDelay: "1s" }} />
          </div>
        </div>

        {/* Floating cards */}
        <div className="hidden lg:block absolute top-1/3 left-8 animate-float">
          <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold text-card-foreground">Start-ups Launched</p>
                <p className="text-lg font-bold text-accent">50+</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute top-1/2 right-12 animate-float-delayed">
          <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-card-foreground">Expert Mentors</p>
                <p className="text-lg font-bold text-primary">20+</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-32 left-1/4 animate-float-slow">
          <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-yellow" />
              </div>
              <div>
                <p className="text-sm font-semibold text-card-foreground">Cash Prizes</p>
                <p className="text-lg font-bold text-yellow">$7,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
