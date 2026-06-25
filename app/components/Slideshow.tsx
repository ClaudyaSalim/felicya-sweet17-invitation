"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
// import Photo1 from "/slideshows/photo-1.jpeg"

export default function SlideShow() {
  const [currPhoto, setCurrPhoto] = useState(0);

  const MotionImage = motion.create(Image);
  const photos = [
    "/slideshows/posergirl-1.jpeg",
    "/slideshows/posergirl-2.jpeg",
    "/slideshows/posergirl-3.jpeg",
    "/slideshows/posergirl-4.jpeg",
    "/slideshows/posergirl-5-new.jpeg",
    "/slideshows/posergirl-misc.jpeg",
    "/slideshows/pavillion-1.jpeg",
    "/slideshows/pavillion-2.jpeg",
    "/slideshows/kl-tower.jpeg",
    "/slideshows/selfie-1.jpeg",
    "/slideshows/selfie-2.jpeg",
    "/slideshows/selfie-3.jpeg",
    "/slideshows/selfie-4.jpeg",
    "/slideshows/selfie-5.jpeg",
  ];

  useEffect(() => {
    const timing = setInterval(() => {
      setCurrPhoto((prev) => (prev + 1) % photos.length);
    }, 3000);

    return () => clearInterval(timing);
  }, []);

  return (
    <AnimatePresence>
      <div
        className="relative w-full lg:w-[60%] h-full rounded-full overflow-hidden p-12"
        style={{
          maskImage: "radial-gradient(ellipse, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse, black 30%, transparent 100%)",
          maskSize: "auto",
          maskRepeat: "no-repeat",
          maskPosition: "center",
        }}
      >
        <MotionImage
          className={`w-full h-full object-cover`}
          src={photos[currPhoto]}
          alt={`Photo ${currPhoto + 1}`}
          width={600}
          height={800}
          loading="eager"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.4 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{
            WebkitMaskImage:
              "radial-gradient(circle, black 65%, transparent 100%)",
            maskImage: "radial-gradient(circle, black 65%, transparent 100%)",
          }}
        />
      </div>
    </AnimatePresence>
  );
}
