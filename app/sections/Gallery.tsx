"use client";

import { useEffect, useState } from "react";
import PhotoModal from "../components/gallery/PhotoModal";
import ViewPhotoBtn from "../components/gallery/ViewPhotoBtn";
import { AnimatePresence } from "motion/react";

export default function Gallery() {
  const [mounted, setMounted] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [image, setImage] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    // document.body.style.overflow = showPhoto ? "hidden" : "";
  }, [showPhoto, mounted]);

  const openFunction = (image: number) => {
    setShowPhoto(true);
    setImage(image);
    document.body.style.overflow = "hidden";
  };

  if (!mounted) return null;

  return (
    <section
      className="relative w-full aspect-4/5 bg-[url(/photoshoot/cover.jpg)] bg-cover bg-center"
      id="gallery"
    >
      <div className="relative inset-0 w-full h-full bg-linear-to-b from-soft-bg via-soft-bg/0 to-soft-bg"></div>
      <div className="absolute top-0 w-full h-full px-20">
        <h2 className="relative text-center top-20">Special Moments</h2>
        <ViewPhotoBtn
          position="top-[calc(50%+1rem)] left-[calc(33%+1rem)] md:top-[calc(50%+2rem)] md:left-[calc(36%+1rem)]"
          setOpen={() => openFunction(0)}
        />
        <ViewPhotoBtn
          position="top-[calc(50%+1rem)] right-1/4 md:top-1/2 md:right-[calc(25%+3rem)]"
          setOpen={() => openFunction(3)}
        />
        <ViewPhotoBtn
          position="top-[calc(75%-0.5rem)] right-1/5 md:top-3/4 md:right-[calc(20%+2.5rem)]"
          setOpen={() => openFunction(6)}
        />
      </div>
      <AnimatePresence>
        {showPhoto && (
          <PhotoModal
            imageIdx={image}
            setImageIdx={setImage}
            showPhoto={showPhoto}
            setShowPhoto={() => {
              setShowPhoto(!showPhoto);
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
