"use client";
import { motion } from "framer-motion";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EnvelopeCover() {
  const params = useSearchParams();
  const to = params.get("to");

  const [open, setOpen] = useState(false);
  const [envShow, setEnvShow] = useState(true);

  const icons = [
    { label: "doll", src: "/gift-icons/teddy-bear.svg" },
    { label: "toy", src: "/gift-icons/train.svg" },
    { label: "blindbox", src: "/gift-icons/box.svg" },
  ];

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "hidden";
    } else {
      // delay 1 s
      setTimeout(() => {
        // set env show to false
        setEnvShow(false);
      }, 500);
      document.body.style.overflow = "";
    }
    // delay 1s

    return () => {
      document.body.style.overflow = "";
    };
  }, [envShow, open]);

  const MotionImage = motion.create(Image);

  return (
    <div className="z-10 w-full h-screen bg-[url(/envelope-cover-bg.jpeg)] bg-cover bg-center lg:bg-position-[center_top_88rem] relative overflow-hidden">
      <div className="z-11 absolute inset-0 w-full h-full bg-linear-to-b from-white/0 to-rose-50 backdrop-blur-[1px]"></div>
      <div
        className={`${!envShow && "hidden"} z-13 relative w-100 h-80 top-1/2 left-1/2 transform -translate-1/2`}
      >
        {/* front face */}
        <div
          className="absolute envelope w-full h-60 bg-amber-50 flex flex-col justify-between items-center p-10 bottom-0 left-0 cursor-pointer"
          onClick={() => {
            setOpen(true);
          }}
        >
          <p className="w-full font-heading text-3xl">{`Dear ${to === null || to === "" ? "Guest" : to},`}</p>
          <span className="text-gray-400 text-xs">Click to Open</span>
          <p className="w-full font-heading text-3xl text-right">
            Love, Felicya Salim
          </p>
        </div>
        <div
          className={`opening clip-triangle w-100 h-20 bg-amber-100 absolute top-0 left-0 transform ${!open ? "hidden" : "rotate-0 translate-y-0"}`}
        ></div>
      </div>
      {/* paper */}
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            className={`z-11 absolute w-full md:w-[80%] lg:w-fit h-full top-0 left-1/2 transform -translate-x-1/2  flex flex-col justify-center items-center`}
            initial={{
              scale: 0.5, // or how to set different scale for lg:
              originY: "0%", 
              // width: "calc(var(--spacing) * 100)",
              overflow: "hidden",
              backgroundColor: "#FCF7F3",
            }}
            animate={{
              scale: 1, 
              // width: "fit-content",
              overflow: "visible",
              backgroundColor: "none",
            }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          >
            <MotionImage
              src={"/Felicya-Invitation.jpeg"}
              alt="Felicya's Invitation"
              width={1331}
              height={1600}
              className="w-full h-auto lg:h-[80%] lg:w-auto"
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{ duration: 1, delay: 0.5, ease: "linear" }}
            />
            <div className="w-full h-full flex flex-col items-center justify-center gap-6 lg:gap-3">
              <div className="flex flex-row w-full gap-6 justify-center lg:justify-between px-6">
                {icons.map((icon) => (
                  <div
                    key={icon.label}
                    className={`bg-pink-300 size-30 lg:size-12`}
                    style={{
                      maskImage: `url(${icon.src})`,
                      WebkitMaskImage: `url(${icon.src})`,
                      maskSize: "contain",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                    }}
                    title={icon.label}
                  />
                ))}
              </div>
              <span className="text-2xl lg:text-sm">Scroll down for more</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
