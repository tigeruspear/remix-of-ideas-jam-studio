import React, { useEffect, useMemo, useState } from "react";
import { ArrowRight, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Big, hero-style countdown (like your reference image)
 * - Large digits
 * - Subtle glow
 * - Animated separators
 * - “Urgent” styling when close to deadline
 */
const CountdownToDeadlineHero = ({ deadline }) => {
  const target = useMemo(() => new Date(deadline).getTime(), [deadline]);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, target - now);
  const totalSeconds = Math.floor(diff / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hrs = Math.floor((totalSeconds % 86400) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  const pad2 = (n) => String(n).padStart(2, "0");

  // Urgent if < 48 hours left
  const isEnded = diff === 0;
  const isUrgent = diff > 0 && diff <= 48 * 60 * 60 * 1000;

  return (
    <div className="mb-12">
      <p className="text-cream/80 text-base md:text-lg mb-5 tracking-wide">
        {isEnded ? "Registration has closed" : "Registration closes in"}
      </p>

      <div className="flex items-end justify-center gap-4 md:gap-6">
        {/* DAYS */}
        <div className="text-center">
          <div
            className={[
              "text-5xl sm:text-6xl md:text-7xl font-bold tabular-nums",
              "drop-shadow-[0_0_18px_rgba(255,255,255,0.12)]",
              isUrgent ? "text-coral" : "text-cream",
            ].join(" ")}
          >
            {pad2(days)}
          </div>
          <div className="mt-2 text-[11px] md:text-xs uppercase tracking-[0.22em] text-cream/60">
            days
          </div>
        </div>

        {/* separator */}
        <div className="pb-7 md:pb-8 text-4xl md:text-5xl font-semibold text-cream/30 animate-pulse select-none">
          :
        </div>

        {/* HOURS */}
        <div className="text-center">
          <div
            className={[
              "text-5xl sm:text-6xl md:text-7xl font-bold tabular-nums",
              "drop-shadow-[0_0_18px_rgba(255,255,255,0.12)]",
              isUrgent ? "text-coral" : "text-cream",
            ].join(" ")}
          >
            {pad2(hrs)}
          </div>
          <div className="mt-2 text-[11px] md:text-xs uppercase tracking-[0.22em] text-cream/60">
            hrs
          </div>
        </div>

        {/* separator */}
        <div className="pb-7 md:pb-8 text-4xl md:text-5xl font-semibold text-cream/30 animate-pulse select-none">
          :
        </div>

        {/* MINUTES */}
        <div className="text-center">
          <div
            className={[
              "text-5xl sm:text-6xl md:text-7xl font-bold tabular-nums",
              "drop-shadow-[0_0_18px_rgba(255,255,255,0.12)]",
              isUrgent ? "text-coral" : "text-cream",
            ].join(" ")}
          >
            {pad2(mins)}
          </div>
          <div className="mt-2 text-[11px] md:text-xs uppercase tracking-[0.22em] text-cream/60">
            min
          </div>
        </div>

        {/* separator */}
        <div className="pb-7 md:pb-8 text-4xl md:text-5xl font-semibold text-cream/30 animate-pulse select-none">
          :
        </div>

        {/* SECONDS */}
        <div className="text-center">
          <div
            className={[
              "text-5xl sm:text-6xl md:text-7xl font-bold tabular-nums",
              "drop-shadow-[0_0_18px_rgba(255,255,255,0.12)]",
              isUrgent ? "text-coral" : "text-cream",
            ].join(" ")}
          >
            {pad2(secs)}
          </div>
          <div className="mt-2 text-[11px] md:text-xs uppercase tracking-[0.22em] text-cream/60">
            sec
          </div>
        </div>
      </div>

      {/* Optional tiny hint text */}
      <p className="mt-5 text-cream/50 text-sm md:text-base">
        {isEnded ? "See you next run 👀" : "Don’t miss the deadline."}
      </p>
    </div>
  );
};

const CTASection = () => {
  /**
   * Set your registration deadline here.
   * Use explicit timezone (+08:00) for Singapore time to avoid confusion.
   */
  const REG_DEADLINE = "2026-03-04T23:59:59+08:00";

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
            Join IdeasJam 2025 and take the first step towards building your
            entrepreneurial future. Register now and be part of Singapore&apos;s
            most exciting start-up competition!
          </p>

          {/* BIG Countdown (above buttons) */}
          <CountdownToDeadlineHero deadline={REG_DEADLINE} />

          {/* Buttons BELOW countdown: Register Now (left) + Participant Deck (right) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://tinyurl.com/IdeasJam2025SignUp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>

            <Button variant="heroOutline" size="xl" asChild>
              <a
                href="http://tinyurl.com/IdeasJam2025ParticipantDeck"
                target="_blank"
                rel="noopener noreferrer"
              >
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
