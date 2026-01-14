import { Trophy, Medal, Award, Star, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const prizes = [
  {
    position: "1st",
    amount: 2500,
    icon: Trophy,
    bgColor: "bg-yellow/20",
    borderColor: "border-yellow/40",
  },
  {
    position: "2nd",
    amount: 2000,
    icon: Medal,
    bgColor: "bg-slate-200/50",
    borderColor: "border-slate-300/40",
  },
  {
    position: "3rd",
    amount: 1000,
    icon: Award,
    bgColor: "bg-amber-600/20",
    borderColor: "border-amber-600/40",
  },
  {
    position: "Special Awards",
    amount: 1500,
    icon: Star,
    bgColor: "bg-sky-light",
    borderColor: "border-primary/40",
  },
];

const AnimatedCounter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return <span ref={ref}>${count.toLocaleString()}</span>;
};

const PrizesSection = () => {
  return (
    <section id="prizes" className="py-20 md:py-28 bg-hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-yellow/20 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-coral/20 rounded-full animate-float-delayed" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow/10 text-coral text-sm font-semibold rounded-full mb-4 border border-yellow/30">
            <Sparkles className="w-4 h-4" />
            Grab these prizes!
          </span>
          <div className="relative inline-block">
            <p className="text-6xl md:text-8xl font-display font-bold text-gradient bg-gradient-to-r from-yellow via-accent to-coral bg-clip-text text-transparent">
              $7,000
            </p>
          </div>
        </div>

        {/* Prize cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {prizes.map((prize, index) => (
            <div
              key={prize.position}
              className={`group ${prize.bgColor} backdrop-blur-sm rounded-2xl p-6 border ${prize.borderColor} 
                hover:scale-105 transition-all duration-300 text-center`}
            >
              <div className="w-12 h-12 mx-auto mb-3">
                <prize.icon className="w-full h-full text-foreground/70" />
              </div>
              
              <p className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">
                <AnimatedCounter target={prize.amount} duration={1500 + index * 200} />
              </p>
              
              <p className="text-sm text-foreground/60 font-medium">
                {prize.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
