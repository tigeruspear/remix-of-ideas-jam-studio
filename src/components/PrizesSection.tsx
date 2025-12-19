import { Trophy, Medal, Award, Star } from "lucide-react";

const prizes = [
  {
    position: "1st Place",
    amount: "$3,000",
    icon: Trophy,
    gradient: "from-yellow to-amber-400",
    bgGradient: "bg-gradient-to-br from-yellow/20 to-amber-400/20",
    borderColor: "border-yellow/30",
  },
  {
    position: "2nd Place",
    amount: "$2,000",
    icon: Medal,
    gradient: "from-slate-300 to-slate-400",
    bgGradient: "bg-gradient-to-br from-slate-200/30 to-slate-300/30",
    borderColor: "border-slate-300/30",
  },
  {
    position: "3rd Place",
    amount: "$1,000",
    icon: Award,
    gradient: "from-amber-600 to-amber-700",
    bgGradient: "bg-gradient-to-br from-amber-600/20 to-amber-700/20",
    borderColor: "border-amber-600/30",
  },
  {
    position: "Special Awards",
    amount: "$1,000",
    icon: Star,
    gradient: "from-primary to-purple",
    bgGradient: "bg-gradient-to-br from-primary/20 to-purple/20",
    borderColor: "border-primary/30",
  },
];

const PrizesSection = () => {
  return (
    <section id="prizes" className="py-20 md:py-32 bg-hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-yellow/10 blob animate-float" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-accent/10 blob-alt animate-float-delayed" />
      
      {/* Stars decoration */}
      <div className="absolute top-1/4 left-1/4 text-yellow/30">
        <Star className="w-6 h-6 animate-pulse-soft" fill="currentColor" />
      </div>
      <div className="absolute top-1/3 right-1/3 text-yellow/20">
        <Star className="w-4 h-4 animate-pulse-soft" style={{ animationDelay: "1s" }} fill="currentColor" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 text-yellow/25">
        <Star className="w-5 h-5 animate-pulse-soft" style={{ animationDelay: "2s" }} fill="currentColor" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-yellow/20 text-yellow text-sm font-semibold rounded-full mb-4">
            <Trophy className="inline w-4 h-4 mr-2" />
            Win Big
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-primary-foreground mb-4">
            Cash Prizes Worth
          </h2>
          <p className="text-5xl md:text-7xl font-display font-bold text-gradient bg-gradient-to-r from-yellow via-accent to-coral bg-clip-text text-transparent">
            $7,000
          </p>
          <p className="text-lg text-primary-foreground/70 mt-4">
            Sponsored by our GOLD sponsor, Red Alpha
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {prizes.map((prize, index) => (
            <div
              key={prize.position}
              className={`group relative ${prize.bgGradient} backdrop-blur-sm rounded-3xl p-8 border ${prize.borderColor} hover:scale-105 transition-all duration-300`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${prize.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <prize.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="font-display font-bold text-xl text-primary-foreground text-center mb-2">
                {prize.position}
              </h3>
              
              <p className={`text-3xl font-display font-bold text-center bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent`}>
                {prize.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
