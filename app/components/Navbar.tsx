"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../models/NavLinks";

export default function Navbar() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <nav
      className={`z-5 fixed right-0 top-0 bg-primary flex flex-col items-end rounded-bl-full ${isToggled ? "pl-14 pb-14" : "w-fit pl-4 pb-4"}`}
    >
      <button
        id="nav-btn"
        className="w-fit"
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      >
        {isToggled ? (
          <FiX className="text-white size-6" />
        ) : (
          <FiMenu className="text-white size-6" />
        )}
      </button>
      <div
        className={`${!isToggled ? "hidden" : "flex flex-col p-3 rounded-2xl"}`}
      >
        {navLinks.map((nav) => (
          <a
            href={nav.link}
            key={nav.link}
            className="w-full text-white justify-end p-2"
            onClick={() => {
              setIsToggled(!isToggled);
            }}
          >
            {nav.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
