declare namespace YT {
  enum PlayerState {
    UNSTARTED = -1,
    ENDED = 0,
    PLAYING = 1,
    PAUSED = 2,
    BUFFERING = 3,
    CUED = 5,
  }

  interface PlayerVars {
    controls?: 0 | 1;
    modestbranding?: 0 | 1;
    rel?: 0 | 1;
    playsinline?: 0 | 1;
  }

  interface PlayerOptions {

    videoId: string;
    playerVars?: PlayerVars;
    events?: {
      onReady?: (event: { target: Player }) => void;
      onStateChange?: (event: { data: PlayerState }) => void;
    };
  }

  class Player {
    constructor(elementId: string | HTMLElement, options: PlayerOptions);
    destroy(): void;
    playVideo(): void;
    pauseVideo(): void;
    mute(): void;
    unMute(): void;
    seekTo(seconds: number, allowSeekAhead?: boolean): void;
    getPlayerState(): PlayerState;
  }
}
