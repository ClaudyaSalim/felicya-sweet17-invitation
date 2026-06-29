"use client";

import { useEffect, useRef, useState } from "react";
import Music from "../components/Music";
import EnvelopeCover from "./EnvelopeCover";

export default function Cover() {
  const playerRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  // useEffect(() => {
  //   const handleVisibilityChange = () => {
  //     if (document.visibilityState === "visible" && isPlaying) {
  //       playerRef.current?.play();
  //     }
  //   };

  //   document.addEventListener("visibilitychange", handleVisibilityChange);
  //   return () =>
  //     document.removeEventListener("visibilitychange", handleVisibilityChange);
  // }, [isPlaying]);

  const toggleMusic = () => {
    if (isPlaying) {
      playerRef.current.pause();
    } else {
      playerRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col gap-20">
        <EnvelopeCover toggleMusic={toggleMusic} />
        <Music
          playerRef={playerRef}
          isPlaying={isPlaying}
          toggleMusic={toggleMusic}
        />
      </div>
    </>
  );
}
