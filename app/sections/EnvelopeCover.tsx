import { motion } from "framer-motion";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type EnvelopeCoverProps = {
  toggleMusic: () => void;
};

const MotionImage = motion.create(Image);

export default function EnvelopeCover({ toggleMusic }: EnvelopeCoverProps) {
  const params = useSearchParams();
  const to = params.get("to");

  const [open, setOpen] = useState(false);
  const [envShow, setEnvShow] = useState(true);

  const icons = [
    { label: "doll", src: "/gift-icons/doll.svg" },
    { label: "toy", src: "/gift-icons/toy.svg" },
    { label: "blindbox", src: "/gift-icons/blindbox.svg" },
  ];

  useEffect(() => {
    console.log("Open", open);
    document.body.style.overflow = !open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      // delay 0.5 s
      const timer = setTimeout(() => {
        // set env show to false
        setEnvShow(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <div
      className={`z-10 w-full h-screen bg-[url(/envelope-cover-bg.jpeg)] bg-cover bg-center lg:bg-position-[center_top_88rem] relative`}
    >
      <div className="z-11 absolute inset-0 w-full h-full bg-linear-to-b from-soft-bg/0 to-soft-bg backdrop-blur-[1px]"></div>
      <div
        className={`${!envShow && "hidden"} z-13 relative w-100 h-80 top-1/2 left-1/2 transform -translate-1/2`}
      >
        {/* front face */}
        <div
          className="absolute envelope w-full h-60 bg-amber-50 flex flex-col justify-between items-center p-10 bottom-0 left-0 cursor-pointer rounded-lg"
          onClick={() => {
            setOpen(true);
            toggleMusic();
          }}
        >
          <p className="w-full font-heading text-3xl">{`Dear ${to === null || to === "" ? "Guest" : to},`}</p>
          <span className="text-gray-400 text-xs">Click to Open</span>
          <p className="w-full font-heading text-3xl text-right">
            Love, Felicya Salim
          </p>
        </div>
        <div
          className={`opening clip-triangle rounded-t-lg w-100 h-20 bg-amber-100 absolute top-0 left-0 transform ${!open ? "hidden" : "rotate-0 translate-y-0"}`}
        ></div>
      </div>
      {/* paper */}
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            className={`z-11 absolute w-full md:w-[80%] lg:w-fit h-full top-0 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center [--scale-paper-x:0.5] [--scale-paper-y:0.4] lg:[--scale-paper-x:0.8] lg:[--scale-paper-y:0.8] landscape:[--start-point-paper:0%] [--start-point-paper:20%]`}
            initial={{
              scaleX: "var(--scale-paper-x)",
              scaleY: "var(--scale-paper-y)",
              originY: "var(--start-point-paper)",
              overflow: "hidden",
              backgroundColor: "#FCF7F3",
            }}
            animate={{
              scaleX: 1,
              scaleY: 1,
              overflow: "visible",
              backgroundColor: "none",
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "easeInOut",
            }}
          >
            <MotionImage
              src={"/Felicya-Invitation.jpeg"}
              alt="Felicya's Invitation"
              width={1331}
              height={1600}
              className="w-full h-auto lg:h-[80%] lg:w-auto"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 1, delay: 0.5, ease: "linear" }}
            />
            <motion.div
              className="w-full h-full flex flex-col items-center justify-center gap-6 lg:gap-3"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 1, delay: 0.5, ease: "linear" }}
            >
              <div className="flex flex-row w-full gap-6 justify-center lg:justify-between px-6">
                {icons.map((icon) => (
                  <div
                    key={icon.label}
                    className="w-24 h-fit flex flex-col items-center justify-center"
                  >
                    <Image
                      src={icon.src}
                      alt={icon.label}
                      key={icon.label}
                      className={`size-30 lg:size-12`}
                      title={icon.label}
                      width={1200}
                      height={1200}
                    />
                    <span>No {icon.label}</span>
                  </div>
                ))}
              </div>
              <span className="text-xl lg:text-sm mb-3">
                Scroll down for more
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
