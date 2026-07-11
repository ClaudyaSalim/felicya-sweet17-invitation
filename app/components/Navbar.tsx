"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../models/NavLinks";
import { AnimatePresence, motion } from "motion/react";

const MotionNav = motion.create("nav");

export default function Navbar() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <MotionNav
      className={`z-5 fixed right-0 top-0 bg-primary flex flex-col items-end rounded-bl-full`}
      animate={{
        paddingLeft: isToggled ? "3.5rem" : "1rem",
        paddingBottom: isToggled ? "3.5rem" : "1rem",
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <button
        id="nav-btn"
        className="w-fit"
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      >
        <AnimatePresence mode="wait">
          {isToggled ? (
            <motion.div
              key={"close"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <FiX className="text-white size-6" />
            </motion.div>
          ) : (
            <motion.div
              key={"menu"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <FiMenu className="text-white size-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            className="flex flex-col p-3 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {navLinks.map((nav) => (
              <a
                href={nav.link}
                key={nav.link}
                className="w-full text-white justify-end p-2"
                onClick={(e) => {
                  e.preventDefault()
                  const id = nav.link.replace('#', '')
                  window.history.pushState(null, "", nav.link);
                  setTimeout(() => {
                    const element = document.getElementById(id);
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop,
                        behavior: "smooth",
                      });
                    }
                  }, 10);
                  setIsToggled(!isToggled);
                }}
              >
                {nav.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </MotionNav>
  );
}
