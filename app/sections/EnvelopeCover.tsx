"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EnvelopeCover() {
  const params = useSearchParams();
  const to = params.get("to");

  const [open, setOpen] = useState(false);
  const [envShow, setEnvShow] = useState(true);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // delay 1 s
    setTimeout(() => {
      // set env show to false
      setEnvShow(false);
    }, 5000);
    // delay 1s

    return () => {
      document.body.style.overflow = '';
    };
  }, [envShow]);

  return (
    <div className="z-10 w-full h-screen bg-pink-50 relative overflow-hidden">
      <div
        className={`${!envShow && "hidden"} relative w-100 h-80 top-1/2 left-1/2 transform -translate-1/2 z-12`}
      >
        {/* front face */}
        <div className="absolute envelope w-full h-60 bg-amber-50 flex flex-col justify-between items-center p-10 bottom-0 left-0">
          <p className="w-full font-heading text-3xl">{`Dear ${to === null || to === "" ? "Guest" : to},`}</p>
          <button
            onClick={() => {
              setOpen(true);
            }}
            className={`${open && "hidden"} bg-transparent text-gray-400 text-xs`}
          >
            Click to Open
          </button>
          <p className="w-full font-heading text-3xl text-right">
            With love, Felicya
          </p>
        </div>
        <div
          className={`opening clip-triangle w-100 h-20 bg-amber-100 absolute top-0 left-0 transform ${!open ? "hidden" : "rotate-0 translate-y-0"}`}
        ></div>
      </div>
      {/* paper */}
      <div
        className={`${!open && "hidden"} bg-pink-100 relative w-fit h-full top-0 left-1/2 transform -translate-x-1/2 z-11 `}
      >
        <Image
          src={"/Felicya-Inv-Final.jpeg"}
          alt="Felicya's Invitation"
          width={1331}
          height={1600}
        />
      </div>
    </div>
  );
}
