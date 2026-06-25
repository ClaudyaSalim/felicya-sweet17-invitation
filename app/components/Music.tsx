import { RefObject, useEffect, useRef, useState } from "react";
import { FiPause, FiPlay } from "react-icons/fi";

type MusicProps = {
  playerRef: RefObject<any>
  isPlaying: boolean
  onReady: (ready:boolean)=>void
  toggleMusic: () => void
}

export default function Music({playerRef, isPlaying, onReady, toggleMusic}:MusicProps) {
  // const playerRef = useRef<any>(null);
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [ready, setReady] = useState(false);
  const videoId = process.env.NEXT_PUBLIC_BGM_ID;

  useEffect(() => {
    const ytubeScript = document.createElement("script");
    ytubeScript.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(ytubeScript);
    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player("yt-player", {
        videoId,
        playerVars: { autoplay: 0, controls: 0, loop: 1, playlist: videoId },
        events: {
          onReady: () => onReady(true),
        },
      });
    };
  }, []);

  // const toggle = () => {
  //   if (!ready) return;
  //   if (isPlaying) {
  //     playerRef.current.pauseVideo();
  //   } else {
  //     playerRef.current.playVideo();
  //   }
  //   setIsPlaying(!isPlaying);
  // };

  return (
    <div
      className={`z-12 w-fit fixed right-0 bottom-4`}
    >
      <div
        id="yt-player"
        className="w-1 h-1 opacity-0 pointer-events-none"
      ></div>
      <button onClick={toggleMusic} className="bg-pink-400 rounded-l-full rounded-r-none">{isPlaying ? <FiPause className="size-5"/> : <FiPlay className="size-5"/>}</button>
    </div>
  );
}
