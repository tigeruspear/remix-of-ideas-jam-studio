import { ArrowRight, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-40 h-40 bg-accent/20 blob animate-float" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-cream/10 blob-alt animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-cream mb-6">
            Ready to Turn Your Ideas Into Reality?
          </h2>
          <p className="text-lg text-cream/80 mb-10 leading-relaxed">
            Join IdeasJam 2025 and take the first step towards building your entrepreneurial future. Register now and be part of Singapore's most exciting start-up competition!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" asChild>
              <a href="https://tinyurl.com/IdeasJam2025SignUp" target="_blank" rel="noopener noreferrer">
                Register Now <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="http://tinyurl.com/IdeasJam2025ParticipantDeck" target="_blank" rel="noopener noreferrer">
                Participant Deck
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.instagram.com/ideasjam_ntu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream/80 hover:text-accent transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-medium">@ideasjam_ntu</span>
            </a>
            <a
              href="https://t.me/ideasjam2025"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream/80 hover:text-accent transition-colors"
            >
              <Send className="w-5 h-5" />
              <span className="font-medium">Telegram Group</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
