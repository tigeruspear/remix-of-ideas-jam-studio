import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const VIDEO_ID = "E_BGJBZYnHg";

declare global {
  interface Window {
    YT?: typeof YT;
    onYouTubeIframeAPIReady?: () => void;
    __ytApiPromise?: Promise<void>;
  }
}

const loadYouTubeApi = () => {
  if (window.YT && window.YT.Player) {
    return Promise.resolve();
  }

  if (window.__ytApiPromise) {
    return window.__ytApiPromise;
  }

  window.__ytApiPromise = new Promise((resolve, reject) => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.async = true;
    tag.onerror = () => reject(new Error("Failed to load YouTube IFrame API"));

    const previousReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (previousReady) {
        previousReady();
      }
      resolve();
    };

    document.head.appendChild(tag);
  });

  return window.__ytApiPromise;
};

export default function Video() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const playerContainerRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<YT.Player | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasUserStarted, setHasUserStarted] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;
    const section = sectionRef.current;

    if (!wrapper || !section) {
      return;
    }

    const tween = gsap.fromTo(
      wrapper,
      { scale: 0.7 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "top 15%",
          scrub: true,
        },
      }
    );

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  useEffect(() => {
    let isCancelled = false;

    loadYouTubeApi()
      .then(() => {
        if (isCancelled) {
          return;
        }

        if (playerRef.current || !playerContainerRef.current || !window.YT) {
          return;
        }

        playerRef.current = new window.YT.Player(playerContainerRef.current, {
          videoId: VIDEO_ID,
          playerVars: {
            controls: 0,
            modestbranding: 1,
            rel: 0,
            playsinline: 1,
          },
          events: {
            onReady: (event) => {
              event.target.mute();
              event.target.playVideo();
            },
            onStateChange: (event) => {
              const state = event.data;
              if (state === window.YT?.PlayerState.PLAYING) {
                setIsPlaying(true);
              } else if (
                state === window.YT?.PlayerState.PAUSED ||
                state === window.YT?.PlayerState.ENDED
              ) {
                setIsPlaying(false);
              }
            },
          },
        });
      })
      .catch(() => {
        setIsPlaying(false);
      });

    return () => {
      isCancelled = true;
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  const togglePlayback = () => {
    const player = playerRef.current;
    if (!player) {
      return;
    }

    const state = player.getPlayerState();
    if (!hasUserStarted) {
      setHasUserStarted(true);
      player.unMute();
      player.seekTo(0, true);
      player.playVideo();
      return;
    }

    if (state === window.YT?.PlayerState.PLAYING) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="hero-video-section bg-foreground py-0 md:py-0"
    >
      <div className="w-full">
        <div
          ref={wrapperRef}
          className="video-grow-wrapper mx-auto overflow-hidden border border-white/10 bg-black shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
        >
          <div className="relative aspect-[21/9] w-full overflow-hidden">
            <div ref={playerContainerRef} id="yt-player" className="h-full w-full" />
            {!hasUserStarted && (
              <button
                type="button"
                className="video-play-toggle absolute inset-0 m-auto flex flex-col items-center justify-center gap-4 px-8 py-6 text-center text-4xl font-semibold uppercase tracking-[0.35em] text-white transition mix-blend-difference drop-shadow-[0_10px_30px_rgba(0,0,0,0.85)] md:text-5xl"
                onClick={togglePlayback}
                aria-label="Play video with sound"
              >
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20"
                >
                  <path
                    d="M9.5 21H14.5M10 17H14M8 14.5C6.2 13.1 5 10.9 5 8.5C5 4.9 8 2 12 2C16 2 19 4.9 19 8.5C19 10.9 17.8 13.1 16 14.5V16C16 16.6 15.6 17 15 17H9C8.4 17 8 16.6 8 16V14.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Relive IdeasJam 2025</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
