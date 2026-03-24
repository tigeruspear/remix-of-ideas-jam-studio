import { Instagram } from "lucide-react";

const INSTAGRAM_HANDLE = "ideasjam_ntu";
const INSTAGRAM_PROFILE_URL = `https://www.instagram.com/ideasjam_ntu/`;
const INSTAGRAM_EMBED_URL = `https://www.instagram.com/ideasjam_ntu/embed`;

const InstagramSection = () => {
  return (
    <section className="bg-foreground py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center mb-8 md:mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cream/80">
            <Instagram className="h-4 w-4" />
            Instagram
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-cream md:text-4xl">
            Follow Our Journey
          </h2>
          <p className="mt-3 text-sm text-cream/70 md:text-base">
            Catch the latest updates and moments from IdeasJam.
          </p>
        </div>

        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-black/30 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
          <iframe
            title="IdeasJam Instagram Feed"
            src={INSTAGRAM_EMBED_URL}
            className="h-[620px] w-full"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowTransparency
          />
        </div>

        <div className="mt-6 text-center">
          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-5 py-2 text-sm font-medium text-cream transition hover:border-accent hover:bg-accent hover:text-accent-foreground"
          >
            <Instagram className="h-4 w-4" />
            View More Posts on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
