import Image from "next/image";
import RsvpForm from "../components/forms/RvspForm";
import { FiExternalLink } from "react-icons/fi";

export default function Rsvp() {
  return (
    <div className="w-full h-fit flex flex-col items-center gap-6" id="rvsp">
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
      <p className="mt-2 lg:mt-6">
        Or fill in below - <b className="font-semibold">Don't forget to submit!</b>
      </p>
      <p className="text-gray-500 font-semibold text-center px-6 flex flex-wrap justify-center gap-1">Already submitted through the new tab? <span>Don't submit it again on this page.</span></p>
      <RsvpForm />
    </div>
  );
}
