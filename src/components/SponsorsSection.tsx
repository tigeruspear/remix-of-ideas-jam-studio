import { Star } from "lucide-react";

const SponsorsSection = () => {
  return (
    <section className="py-6 md:py-6 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-yellow/10 text-yellow text-sm font-semibold rounded-full mb-4">
            <Star className="inline w-4 h-4 mr-2" fill="currentColor" />
            Our Partners
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            Thank You to Our Sponsors
          </h2>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Gold Sponsors */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-yellow/30" />
              <span className="px-8 py-1 bg-yellow/10 text-yellow font-bold text-m rounded-full">
                GOLD
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-yellow/30" />
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-card rounded-xl p-6 shadow-card border border-yellow/20 hover:shadow-glow transition-all duration-300">
                <img
                  src="/sponsor/IHH_logo.png"
                  alt="IHH Healthcare"
                  className="h-24 w-auto"
                />
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card border border-yellow/20 hover:shadow-glow transition-all duration-300">
                <img
                  src="/sponsor/Entrepreneurship_Academy_logo.png"
                  alt="NTU Entrepreneurship Academy"
                  className="h-24 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Bronze Sponsors */}
          <div>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-600/30" />
              <span className="px-4 py-1 bg-amber-600/10 text-amber-600 font-semibold text-sm rounded-full">
                BRONZE
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-600/30" />
            </div>
            <div className="flex justify-center">
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-card transition-all duration-300">
                <img
                  src="/sponsor/Innovators_Hub_Logo.png"
                  alt="Innovators Hub"
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
