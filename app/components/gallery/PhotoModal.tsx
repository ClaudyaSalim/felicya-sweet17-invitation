import { AnimatePresence, motion, wrap } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import { FiArrowLeft, FiArrowRight, FiX } from "react-icons/fi";

type PhotoModal = {
  imageIdx: number;
  setImageIdx: (image:number) => void;
  showPhoto: boolean;
  setShowPhoto: () => void;
};

const MotionImage = motion.create(Image);

export default function PhotoModal({
  imageIdx,
  setImageIdx,
  setShowPhoto,
}: PhotoModal) {
  const [direction, setDirection] = useState<1 | -1>(1);

  const images = [
    "/photoshoot/posergirl-1.jpeg",
    "/photoshoot/posergirl-2.jpeg",
    "/photoshoot/posergirl-3.jpeg",
  ];

  const setSelectedImg = (direction: 1 | -1) => {
    const newImage = wrap(0, images.length, imageIdx + direction);
    setImageIdx(newImage);
    setDirection(direction);
  };

  return createPortal(
    <div
      className={`z-20 fixed w-full h-screen bg-linear-to-b from-black/70 via-black/30 via-40% to-black/70`}
    >
      <button
        className="absolute top-10 right-5 bg-transparent flex flex-row gap-2 items-center text-lg"
        onClick={() => {
          setShowPhoto();
          document.body.style.overflow = "";
        }}
      >
        Close
        <FiX className="size-10" />
      </button>
      <div className="absolute w-[70%] h-full top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <AnimatePresence custom={direction} mode="popLayout" initial={false}>
          <MotionImage
            key={imageIdx}
            className="relative"
            src={images[imageIdx]}
            alt=""
            fill
            sizes=""
            objectFit="contain"
            loading="eager"
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{
              delay: 0.2,
              type: "spring",
              visualDuration: 0.3,
              bounce: 0.4,
            }}
          />
        </AnimatePresence>
      </div>
      <div className="absolute w-[75%] lg:w-[90%] text-white flex flex-row justify-between items-center left-1/2 bottom-10 transform -translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2">
        <button
          disabled={imageIdx === 0}
          onClick={() => {
            setSelectedImg(-1);
          }}
        >
          <FiArrowLeft className="size-8" />
        </button>
        <span className="lg:fixed lg:-top-20 lg:left-5">{`Photo ${imageIdx + 1} of ${images.length}`}</span>
        <button
          disabled={imageIdx === images.length - 1}
          onClick={() => {
            setSelectedImg(1);
          }}
        >
          <FiArrowRight className="size-8" />
        </button>
      </div>
    </div>,
    document.body,
  );
}
