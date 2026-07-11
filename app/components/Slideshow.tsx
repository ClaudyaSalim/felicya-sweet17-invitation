"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiInstagram } from "react-icons/fi";
// import Photo1 from "/slideshows/photo-1.jpeg"

export default function SlideShow() {
  const [currPhoto, setCurrPhoto] = useState(0);

  const MotionImage = motion.create(Image);
  const photos = [
    "/slideshows/fullbloomcopy.jpg",
    "/slideshows/20JUNIEVERBLOOM11064.png",
    "/slideshows/20JUNIEVERBLOOM11085.png",
    "/slideshows/20JUNIEVERBLOOM11107.png",
    "/slideshows/20JUNIEVERBLOOM11110-rotated.png",
    "/slideshows/posergirl-misc.jpeg",
    "/slideshows/pavillion-1.jpeg",
    "/slideshows/pavillion-2.jpeg",
    "/slideshows/kl-tower.jpeg",
    "/slideshows/tasik.jpeg",
    "/slideshows/selfie-1.jpeg",
    "/slideshows/selfie-2.jpeg",
    "/slideshows/selfie-3.jpeg",
    "/slideshows/selfie-4.jpeg",
    "/slideshows/selfie-5.jpeg",
    "/slideshows/selfie-6.jpeg",
    "/slideshows/selfie-7.jpeg",
  ];

  useEffect(() => {
    const timing = setInterval(() => {
      setCurrPhoto((prev) => (prev + 1) % photos.length);
    }, 3000);

    return () => clearInterval(timing);
  }, []);

  return (
    <div className="relative w-full lg:w-[60%] h-full rounded-full overflow-hidden">
      <div className="z-1 inset-0 absolute top-0 left-0 bg-radial from-soft-bg/0 to-soft-bg" />
      <MotionImage
        className={`w-full h-full object-cover ${currPhoto === 2 && "object-left"} ${currPhoto === 4 && "object-top-left"} ${currPhoto <= 1 && "object-top"} ${currPhoto === 13 && "object-bottom"}`}
        src={photos[currPhoto]}
        alt={`Photo ${currPhoto + 1}`}
        width={600}
        height={800}
        loading="eager"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        style={{
          WebkitMaskImage:
            "radial-gradient(circle, black 65%, transparent 100%)",
          maskImage: "radial-gradient(circle, black 65%, transparent 100%)",
        }}
      />
    </div>
  );
}
