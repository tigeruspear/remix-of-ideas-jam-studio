import { Instagram, Send, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 border-t border-cream/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-xl text-cream mb-2">
              IdeasJam <span className="text-accent">2025</span>
            </h3>
            <p className="text-sm text-cream/60">
              Nurturing the next generation of entrepreneurs
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/ideasjam_ntu/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-cream/80 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/ideasjam2025"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-cream/80 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-cream/10 text-center">
          <p className="text-sm text-cream/50">
            © 2025 IdeasJam NTU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
