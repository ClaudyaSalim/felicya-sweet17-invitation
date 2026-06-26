import Image from "next/image";
import RsvpForm from "../components/forms/RvspForm";
import { FiExternalLink } from "react-icons/fi";

export default function Rsvp() {
  return (
    <div
      className="relative w-full h-fit flex flex-col items-center gap-6 pb-6 pt-16 overflow-y-visible"
      id="rvsp"
    >
      <h2>RSVP</h2>
      <div className="flex flex-col gap-4 items-center">
        Open the form in new tab
        <button>
          <a
            href="https://forms.gle/bpMFEMCAVqwgisWW6"
            target="_blank"
            rel="noopener noreferrer"
          >
            RVSP Form <FiExternalLink />
          </a>
        </button>
      </div>
      <p className="mt-2 lg:mt-6 px-6 flex-row flex-wrap text-center">
        Or fill in below -{" "}
        <b className="font-semibold">Don't forget to submit!</b>{" "}
        <span className="text-gray-500 text-nowrap">
          Latest by 13th July 2026 23:59 WIB
        </span>
      </p>
      <p className="text-gray-500 font-semibold text-center px-6 flex flex-wrap justify-center gap-1">
        Already submitted through the new tab?{" "}
        <span>You don't have to submit it again on this page.</span>
      </p>
      <RsvpForm />
      <img
        src={"/assets/inv/flowers-top-left-sm.png"}
        alt="Flowers"
        aria-hidden="true"
        className="decor -top-10 lg:top-0 left-0 w-50 lg:w-60 z-3 drop-shadow-2xl drop-shadow-snow-white"
        style={{
          maskImage: "linear-gradient(130deg, black 20%, transparent 70%)",
          WebkitMaskImage:
            "linear-gradient(130deg, black 20%, transparent 70%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      <img
        src={"/assets/inv/flowers-side-left-sm.png"}
        alt="Flowers"
        aria-hidden="true"
        className="decor -top-48 left-0 size-50 lg:size-60 z-3 drop-shadow-upwards"
        style={{
          maskImage: "radial-gradient(circle at bottom, black 30%, transparent 88%), linear-gradient(150deg, black 70%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(circle at bottom, black 30%, transparent 88%), linear-gradient(150deg, black 70%, transparent 95%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in"
        }}
      />
    </div>
  );
}
