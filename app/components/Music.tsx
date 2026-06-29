import { RefObject, useEffect, useRef, useState } from "react";
import { FiPause, FiPlay } from "react-icons/fi";

type MusicProps = {
  playerRef: RefObject<any>;
  isPlaying: boolean;
  toggleMusic: () => void;
};

export default function Music({
  playerRef,
  isPlaying,
  toggleMusic,
}: MusicProps) {
  const videoSrc = process.env.NEXT_PUBLIC_BGM_ID;

  return (
    <div className={`z-12 w-fit fixed right-0 bottom-4`}>
      <audio ref={playerRef} src={videoSrc} loop />
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
