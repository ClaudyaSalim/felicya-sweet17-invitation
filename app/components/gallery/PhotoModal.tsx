import { AnimatePresence, motion, wrap } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import { FiArrowLeft, FiArrowRight, FiX } from "react-icons/fi";

type PhotoModal = {
  imageIdx: number;
  setImageIdx: (image: number) => void;
  showPhoto: boolean;
  setShowPhoto: () => void;
};

const MotionImage = motion.create(Image);

const animationVariants = {
  initial: (d: number) => ({ opacity: 0, x: d * 50 }),
  animate: { opacity: 1, x: 0 },
  exit: (d: number) => ({ opacity: 0, x: d * -50 }),
};

export default function PhotoModal({
  imageIdx,
  setImageIdx,
  setShowPhoto,
}: PhotoModal) {
  const [direction, setDirection] = useState<1 | -1>(1);

  const images = [
    "/photoshoot/fullbloomcopy.jpg",
    "/photoshoot/20JUNIEVERBLOOM11085.png",
    "/photoshoot/20JUNIEVERBLOOM11064.png",
    "/photoshoot/posergirl-2.jpeg",
    "/photoshoot/20JUNIEVERBLOOM11107.png",
    "/photoshoot/20JUNIEVERBLOOM11110.png",
    "/photoshoot/posergirl-3.jpeg",
  ];

  const setSelectedImg = (newDirection: 1 | -1) => {
    const newImage = wrap(0, images.length, imageIdx + newDirection);
    setImageIdx(newImage);
    setDirection(newDirection);
  };

  return createPortal(
    <motion.div
      className={`z-20 fixed w-full h-screen bg-linear-to-b from-black/70 via-black/30 via-40% to-black/70`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{opacity: 0}}
      transition={{ duration: 0.3, ease: "easeIn" }}
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
        <AnimatePresence custom={direction} mode="wait" initial={false}>
          <MotionImage
            key={imageIdx}
            className="relative w-full"
            src={images[imageIdx]}
            alt=""
            fill
            sizes=""
            objectFit="contain"
            loading="eager"
            custom={direction}
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              delay: 0.2,
              type: "spring",
              visualDuration: 0.3,
              bounce: 0.4,
            }}
          />
        </AnimatePresence>
      </div>
      <div className="absolute w-[75%] lg:w-[90%] text-white flex flex-row justify-between items-center left-1/2 bottom-25 transform -translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2">
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
    </motion.div>,
    document.body,
  );
}
