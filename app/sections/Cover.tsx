"use client";

import { useEffect, useRef, useState } from "react";
import Music from "../components/Music";
import EnvelopeCover from "./EnvelopeCover";

export default function Cover() {
  const playerRef = useRef<any>(null);
  const shouldPlayRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const hasOpened = sessionStorage.getItem("coverOpened");
    if (!hasOpened) {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      }, 0);
    }
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && isPlaying) {
        playerRef.current?.playVideo();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [isPlaying]);

  const toggleMusic = () => {
    console.log("toggleMusic called");
    console.log("ready:", ready);
    console.log("playerRef.current:", playerRef.current);
    console.log("isPlaying:", isPlaying);
    if (!ready) {
      shouldPlayRef.current = true;
      return;
    }
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col gap-20">
        <EnvelopeCover toggleMusic={toggleMusic} />
        <Music
          playerRef={playerRef}
          shouldPlayRef={shouldPlayRef}
          isPlaying={isPlaying}
          onReady={(ready) => {
            setReady(ready);
          }}
          toggleMusic={toggleMusic}
        />
      </div>
    </>
  );
}
