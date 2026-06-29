import { RefObject, useEffect, useRef, useState } from "react";
import { FiPause, FiPlay } from "react-icons/fi";

type MusicProps = {
  playerRef: RefObject<any>;
  shouldPlayRef: RefObject<any>;
  isPlaying: boolean;
  onReady: (ready: boolean) => void;
  toggleMusic: () => void;
};

export default function Music({
  playerRef,
  shouldPlayRef,
  isPlaying,
  onReady,
  toggleMusic,
}: MusicProps) {
  const videoId = process.env.NEXT_PUBLIC_BGM_ID_YTUBE;
  
  useEffect(() => {
    if (document.getElementById("yt-script")) {
      return;
    }

    console.log("initializing player");
    const ytubeScript = document.createElement("script");
    ytubeScript.src = "https://www.youtube.com/iframe_api";
    // ytubeScript.id = "yt-script"
    document.body.appendChild(ytubeScript);

    const initPlayer = () => {
      console.log("initPlayer called");
      playerRef.current = new (window as any).YT.Player("yt-player", {
        videoId,
        playerVars: { autoplay: 0, controls: 0, loop: 1, playlist: videoId },
        events: {
          onReady: () => {
            onReady(true);
            console.log("player ready");
            if (shouldPlayRef.current) {
              playerRef.current?.playVideo();
            }
          },
        },
      });
    };

    if ((window as any).YT?.Player) {
      initPlayer();
    } else {
      (window as any).onYouTubeIframeAPIReady = initPlayer;
    }
  }, []);

  return (
    <div className={`z-12 w-fit fixed right-0 bottom-4`}>
      <div
        id="yt-player"
        className="w-1 h-1 opacity-0 pointer-events-none"
      ></div>
      <button
        onClick={toggleMusic}
        className="bg-primary rounded-l-full rounded-r-none"
      >
        {isPlaying ? (
          <FiPause className="size-5" />
        ) : (
          <FiPlay className="size-5" />
        )}
      </button>
    </div>
  );
}
