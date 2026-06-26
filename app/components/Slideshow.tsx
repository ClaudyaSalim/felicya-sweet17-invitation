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
    "/slideshows/posergirl-1.jpeg",
    "/slideshows/posergirl-2.jpeg",
    "/slideshows/posergirl-3.jpeg",
    "/slideshows/posergirl-4.jpeg",
    "/slideshows/posergirl-5.jpeg",
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
    <AnimatePresence mode="wait">
      <div className="relative w-full lg:w-[60%] h-full rounded-full overflow-hidden">
        <div className="z-1 inset-0 absolute top-0 left-0 bg-radial from-soft-bg/0 to-soft-bg" />
        <MotionImage
          className={`w-full h-full object-cover ${currPhoto === 4 && "object-left lg:object-center"} ${currPhoto <= 3 && "object-top"} ${currPhoto===13 && "object-bottom"}`}
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
        <a
          href="https://www.instagram.com/felii.s_09/"
          target="_blank"
          rel="noopener noreferrer"
          className="z-1 absolute bottom-0 left-0 rounded-full bg-secondary"
        >
          <FiInstagram className="size-16" />
        </a>
      </div>
    </AnimatePresence>
  );
}
