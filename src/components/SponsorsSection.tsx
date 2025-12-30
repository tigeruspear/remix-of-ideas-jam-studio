import { Star } from "lucide-react";

const SponsorsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative">
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
              <span className="px-4 py-1 bg-yellow/10 text-yellow font-semibold text-sm rounded-full">
                GOLD
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-yellow/30" />
            </div>
            <div className="flex justify-center">
              <div className="bg-card rounded-xl p-6 shadow-card border border-yellow/20 hover:shadow-glow transition-all duration-300">
                <div className="text-xl font-display font-bold text-card-foreground">
                  Red Alpha
                </div>
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
              <div className="bg-card rounded-xl p-4 shadow-sm border border-border/50 hover:shadow-card transition-all duration-300">
                <div className="text-base font-display font-semibold text-card-foreground">
                  Garage@EEE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;