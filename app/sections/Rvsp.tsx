import Image from "next/image";
import RsvpForm from "../components/Forms/RvspForm";

export default function Rsvp(){
    return <div className="w-full h-fit flex flex-col items-center">
        <h2>RSVP</h2>
        <p>Click the button below to RSVP</p>
        <button><a href="https://forms.gle/bpMFEMCAVqwgisWW6" target="_blank" rel="noopener noreferrer">RSVP</a></button>
        <p className="flex flex-row gap-4">Or fill the Google Form below</p>
        <RsvpForm />
    </div>
}