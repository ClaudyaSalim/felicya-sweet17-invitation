import { motion } from "framer-motion";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Doll from "../components/gift-icons/Doll";
import Toy from "../components/gift-icons/Toy";
import BlindBox from "../components/gift-icons/BlindBox";

type EnvelopeCoverProps = {
  toggleMusic: () => void;
};

const MotionImage = motion.create(Image);

export default function EnvelopeCoverNoAnimation({
  toggleMusic,
}: EnvelopeCoverProps) {
  const params = useSearchParams();
  const to = params.get("to");

  const [open, setOpen] = useState(true);
  const [envShow, setEnvShow] = useState(true);

  // const icons = [
  //   {label: "doll", src: <Doll />},
  //   {label: "toy", src: <Toy />},
  //   {label: "blindbox", src: <BlindBox/>}
  // ]

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
        // setEnvShow(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <div
      className={`z-10 w-full h-screen bg-[url(/envelope-cover-bg.jpeg)] bg-cover bg-center lg:bg-position-[center_top_88rem] relative`}
    >
      <div className="z-11 absolute inset-0 w-full h-full bg-linear-to-b from-soft-bg/0 to-soft-bg backdrop-blur-[1px]"></div>
      <motion.div
        className={`${!envShow && "hidden"} z-13 relative w-100 h-80 top-1/2 left-1/2 transform -translate-1/2`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.5 }}
      >
        {/* front face */}
        <div
          className="absolute envelope w-full h-60 bg-amber-50 flex flex-col justify-between items-center p-10 bottom-0 left-0 cursor-pointer rounded-lg"
          // onClick={() => {
          //   setOpen(true);
          //   toggleMusic();
          // }}
        >
          <p className="w-full font-heading text-3xl">{`Dear ${to === null || to === "" ? "Guest" : to},`}</p>
          {/* <span className="text-gray-400 text-xs">Click to Open</span> */}
          <p className="w-full font-heading text-3xl text-right">
            Love, Felicya Salim
          </p>
        </div>
      </motion.div>
      <span className="text-xl lg:text-sm absolute bottom-0 z-11 left-1/2 transform -translate-1/2">
        Scroll down for more
      </span>
    </div>
  );
}
