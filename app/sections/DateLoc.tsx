"use client"

import { FiCornerUpRight } from "react-icons/fi";
import CountdownTimer from "../components/CountdownTimer";
import AnimateSection from "../components/AnimateSection";

export default function DateLoc() {
  return (
    <AnimateSection
      className="relative w-full h-screen flex flex-col gap-16 p-6 pt-26 lg:justify-between lg:flex-row lg:items-center overflow-y-visible overflow-x-clip"
      id="date-time"
    >
      <div className="date-time-section flex flex-col items-center gap-6 lg:pl-16">
        <h2>Date</h2>
        <div className="date-time w-fit flex flex-row gap-6">
          <div className="day flex flex-col items-center justify-center gap-2 w-full">
            <hr className="w-full" />
            <span className="uppercase">Saturday</span>
            <hr className="w-full" />
          </div>
          <div className="day flex flex-col items-center gap-2">
            <span className="uppercase">July</span>
            <span className="">18</span>
            <span>2026</span>
          </div>
          <div className="time flex flex-col items-center justify-center gap-2 w-full">
            <hr className="w-full" />
            <span className="uppercase px-2.5">17.30 PM</span>
            <hr className="w-full" />
          </div>
        </div>
        <CountdownTimer />
      </div>

      <div className="h-full location-section flex flex-col items-center">
        <h2>Location</h2>
        <span className="font-bold mt-6">Mercure Hotel Grogol</span>
        <span className="font-semibold">
          Kemuning 2, 2<sup>nd</sup> Floor
        </span>
        <p className="text-center mb-6">
          Daan Mogot Rd No.50 B, Wijaya Kusuma, Grogol Petamburan, Jakarta,
          11460
        </p>
        <button type="button">
          <a
            href="https://www.google.com/maps/place/Mercure+Jakarta+Grogol/@-6.1615963,106.7691211,17z/data=!4m21!1m11!3m10!1s0x2e69f74c84ecca09:0x385044706a8903d0!2sMercure+Jakarta+Grogol!5m2!4m1!1i2!8m2!3d-6.1616016!4d106.771696!10e7!16s%2Fg%2F11yshv3831!3m8!1s0x2e69f74c84ecca09:0x385044706a8903d0!5m2!4m1!1i2!8m2!3d-6.1616016!4d106.771696!16s%2Fg%2F11yshv3831?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Take me there! <FiCornerUpRight />
          </a>
        </button>
        <iframe
          className="w-full h-full mt-6"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.769656829792!2d106.76912107355353!3d-6.1615962603851155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f74c84ecca09%3A0x385044706a8903d0!2sMercure%20Jakarta%20Grogol!5e0!3m2!1sen!2sid!4v1781007845947!5m2!1sen!2sid"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <img
        src={"/assets/rose-bottom.png"}
        alt="Flowers"
        aria-hidden="true"
        className="decor -top-20 lg:-top-30 -left-30 w-80 lg:w-100 transform drop-shadow-upwards"
        style={{
          maskImage:
            "radial-gradient(circle, black 20%, transparent 60%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 30%, transparent 70%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <img
        src={"/assets/lily-bottom-center.png"}
        alt="Flowers"
        aria-hidden="true"
        className="decor -top-10 lg:-top-45 -right-30 lg:-right-20 w-80 lg:w-90 transform -rotate-60 drop-shadow-upwards"
        style={{
          maskImage:
            "radial-gradient(circle at right, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 30%, transparent 70%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
    </AnimateSection>
  );
}
