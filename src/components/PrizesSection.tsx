import { Trophy, Medal, Award, Star, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const prizes = [
  {
    position: "1st Place",
    amount: 3000,
    icon: Trophy,
    gradient: "from-yellow to-amber-400",
    bgGradient: "bg-gradient-to-br from-yellow/20 to-amber-400/20",
    borderColor: "border-yellow/40",
    glowColor: "shadow-yellow/30",
    featured: true,
  },
  {
    position: "2nd Place",
    amount: 2000,
    icon: Medal,
    gradient: "from-slate-300 to-slate-400",
    bgGradient: "bg-gradient-to-br from-slate-200/30 to-slate-300/30",
    borderColor: "border-slate-300/40",
    glowColor: "shadow-slate-300/20",
    featured: false,
  },
  {
    position: "3rd Place",
    amount: 1000,
    icon: Award,
    gradient: "from-amber-600 to-amber-700",
    bgGradient: "bg-gradient-to-br from-amber-600/20 to-amber-700/20",
    borderColor: "border-amber-600/40",
    glowColor: "shadow-amber-600/20",
    featured: false,
  },
  {
    position: "Special Awards",
    amount: 1000,
    icon: Star,
    gradient: "from-primary to-purple",
    bgGradient: "bg-gradient-to-br from-primary/20 to-purple/20",
    borderColor: "border-primary/40",
    glowColor: "shadow-primary/20",
    featured: false,
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
    <section id="prizes" className="py-20 md:py-32 bg-hero-gradient relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 right-20 w-60 h-60 bg-yellow/10 blob animate-float blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/10 blob-alt animate-float-delayed blur-2xl" />
      
      {/* Floating stars */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute text-yellow/30"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
        >
          <Star 
            className="animate-pulse-soft" 
            style={{ 
              animationDelay: `${i * 0.5}s`,
              width: `${12 + Math.random() * 16}px`,
              height: `${12 + Math.random() * 16}px`,
            }} 
            fill="currentColor" 
          />
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with sparkle effect */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow/20 text-yellow text-sm font-semibold rounded-full mb-6 border border-yellow/30">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Win Big
            <Sparkles className="w-4 h-4 animate-pulse" />
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-primary-foreground mb-6">
            Cash Prizes Worth
          </h2>
          <div className="relative inline-block">
            <p className="text-6xl md:text-8xl font-display font-bold text-gradient bg-gradient-to-r from-yellow via-accent to-coral bg-clip-text text-transparent animate-pulse-soft">
              $7,000
            </p>
            {/* Glow effect behind the number */}
            <div className="absolute inset-0 text-6xl md:text-8xl font-display font-bold text-yellow/20 blur-2xl -z-10">
              $7,000
            </div>
          </div>
          <p className="text-lg text-primary-foreground/70 mt-6 max-w-md mx-auto">
            Sponsored by our <span className="text-yellow font-semibold">GOLD</span> sponsor, Red Alpha
          </p>
        </div>

        {/* Prize cards with staggered animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {prizes.map((prize, index) => (
            <div
              key={prize.position}
              className={`group relative ${prize.bgGradient} backdrop-blur-sm rounded-3xl p-8 border-2 ${prize.borderColor} 
                hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out
                animate-fade-in shadow-xl hover:shadow-2xl ${prize.featured ? 'lg:scale-105 lg:-translate-y-2' : ''}`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                boxShadow: prize.featured ? '0 0 60px rgba(234, 179, 8, 0.3)' : undefined
              }}
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>

              {/* Featured badge */}
              {prize.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-yellow to-amber-400 text-foreground text-xs font-bold rounded-full shadow-lg">
                  GRAND PRIZE
                </div>
              )}
              
              {/* Icon with glow */}
              <div className="relative">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${prize.gradient} flex items-center justify-center mb-6 mx-auto 
                  group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <prize.icon className="w-10 h-10 text-primary-foreground drop-shadow-lg" />
                </div>
                {/* Icon glow */}
                <div className={`absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${prize.gradient} blur-xl opacity-50 group-hover:opacity-80 transition-opacity -z-10`} />
              </div>
              
              <h3 className="font-display font-bold text-xl text-primary-foreground text-center mb-3">
                {prize.position}
              </h3>
              
              <p className={`text-4xl font-display font-bold text-center bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent`}>
                <AnimatedCounter target={prize.amount} duration={1500 + index * 200} />
              </p>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-12 gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-yellow/40 animate-pulse"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
