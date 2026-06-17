"use client"

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
    {name: "Home", link: "#hero"},
    {name: "Date & Location", link: "#date-time"},
    {name: "Dress Code", link: "#dresscode"},
    {name: "RVSP", link: "#rvsp"},
    {name: "Wishes", link: "#wishes"},
]

export default function Navbar(){

    const [isToggled, setIsToggled] = useState(false)

    return <nav className={`z-1 fixed right-0 top-0 bg-pink-400 flex flex-col items-end rounded-bl-full ${isToggled? "pl-14 pb-14":"w-fit pl-4 pb-4"}`}>
        <button id="nav-btn" className="w-fit" onClick={()=>{setIsToggled(!isToggled)}}>
            {isToggled? <FiX className="text-white"/> : <FiMenu className="text-white" />}
        </button>
        <div className={`${!isToggled? "hidden" : "flex flex-col p-3 rounded-2xl"}`}>
            {navLinks.map((nav)=>
             <a href={nav.link} key={nav.link} className="w-full text-white justify-end p-2">{nav.name}</a>
            )}
        </div>
    </nav>
}