"use client";

import { useEffect, useRef, useState } from "react";
import Music from "../components/Music";
import EnvelopeCover from "./EnvelopeCover";

export default function Cover() {
  const playerRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const hasOpened = sessionStorage.getItem("coverOpened");
    if (!hasOpened) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      }, 0);
    }
  }, []);

  const toggleMusic = () => {
    console.log("toggleMusic called");
    console.log("ready:", ready);
    console.log("playerRef.current:", playerRef.current);
    console.log("isPlaying:", isPlaying);
    if (!ready) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="h-screen w-full flex flex-col gap-20">
      <EnvelopeCover toggleMusic={toggleMusic} />
      <Music
        playerRef={playerRef}
        isPlaying={isPlaying}
        onReady={(ready) => {
          setReady(ready);
        }}
        toggleMusic={toggleMusic}
      />
    </div>
  );
}
