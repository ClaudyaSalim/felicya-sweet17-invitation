"use client"

import { useRef, useState } from "react";
import Music from "../components/Music";
import EnvelopeCover from "./EnvelopeCover";

export default function Cover() {

  const playerRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [ready, setReady] = useState(false);


  const toggleMusic = () => {
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
      <EnvelopeCover toggleMusic={toggleMusic}/>
      <Music playerRef={playerRef} isPlaying={isPlaying} onReady={(ready)=>{setReady(ready)}} toggleMusic={toggleMusic} />
    </div>
  );
}
