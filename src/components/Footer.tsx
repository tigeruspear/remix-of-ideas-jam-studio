import { Instagram, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-8 border-t border-cream/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h3 className="font-display font-bold text-xl text-cream mb-2">
            Ideas<span className="text-accent">Jam</span> 2026
          </h3>
          <p className="text-sm text-cream/60 mb-4">
            Nurturing the next generation of entrepreneurs
          </p>

          <div className="flex items-center gap-4 mb-6">
            <a
              href="https://www.instagram.com/ideasjam_ntu/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center text-cream/80 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/ideasjam2025"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center text-cream/80 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Send className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-cream/40">
            © 2026 IdeasJam NTU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;