import { FiCalendar, FiCornerUpRight } from "react-icons/fi";

export default function DateLoc(){
    return <section className="w-full h-screen flex flex-col justify-between lg:flex-row lg:items-center" id="date-time">
        <div className="date-time-section flex flex-col items-center">
            <h2>Date</h2>
            <div className="date-time w-full flex flex-row gap-6 lg:w-fit">
                <div className="day flex flex-col items-center justify-center gap-2 w-full">
                    <hr className="w-full"/>
                    <span className="uppercase">Saturday</span>
                    <hr className="w-full"/>
                </div>
                <div className="day flex flex-col items-center gap-2">
                    <span className="uppercase">July</span>
                    <span className="">18</span>
                    <span>2026</span>
                </div>
                <div className="time flex flex-col items-center justify-center gap-2 w-full">
                    <hr className="w-full"/>
                    <span className="uppercase">17.00 PM</span>
                    <hr className="w-full"/>
                </div>
            </div>
            {/* to be added countdown component */}
        </div>

        <div className="h-full location-section flex flex-col items-center">
            <h2>Location</h2>
            <span className="font-bold">Mercure Hotel Grogol</span>
            <span className="font-semibold">Kemuning 2, 2<sup>nd</sup> Floor</span>
            <p className="text-center">Daan Mogot Rd No.50 B, Wijaya Kusuma, Grogol Petamburan, Jakarta, 11460</p>
            <button type="button"><a href="https://www.google.com/maps/place/Mercure+Jakarta+Grogol/@-6.1615963,106.7691211,17z/data=!4m21!1m11!3m10!1s0x2e69f74c84ecca09:0x385044706a8903d0!2sMercure+Jakarta+Grogol!5m2!4m1!1i2!8m2!3d-6.1616016!4d106.771696!10e7!16s%2Fg%2F11yshv3831!3m8!1s0x2e69f74c84ecca09:0x385044706a8903d0!5m2!4m1!1i2!8m2!3d-6.1616016!4d106.771696!16s%2Fg%2F11yshv3831?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Take me there! <FiCornerUpRight /></a></button>
            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.769656829792!2d106.76912107355353!3d-6.1615962603851155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f74c84ecca09%3A0x385044706a8903d0!2sMercure%20Jakarta%20Grogol!5e0!3m2!1sen!2sid!4v1781007845947!5m2!1sen!2sid" style={{ border:"0"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
}