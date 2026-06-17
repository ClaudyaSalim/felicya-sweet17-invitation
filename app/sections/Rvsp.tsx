import Image from "next/image";
import RsvpForm from "../components/Forms/RvspForm";
import { FiExternalLink } from "react-icons/fi";

export default function Rsvp(){
    return <div className="w-full h-fit flex flex-col items-center" id="rvsp">
        <h2>RSVP</h2>
        <p>Click the button below to RSVP</p>
        <button><a href="https://forms.gle/bpMFEMCAVqwgisWW6" target="_blank" rel="noopener noreferrer">RSVP Now <FiExternalLink /></a></button>
        <p className="flex flex-row gap-4">Or fill in the Google Form below - Don't forget to submit!</p>
        <RsvpForm />
    </div>
}