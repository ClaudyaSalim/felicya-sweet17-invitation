import Image from "next/image";
import Hero from "./sections/Hero";
import DateLoc from "./sections/DateLoc";
import DressCode from "./sections/DressCode";
import Rvsp from "./sections/Rvsp";
import WishesSection from "./sections/Wishes";
import Navbar from "./components/Navbar";
import Music from "./components/Music";

export default function Home() {
  return (
   <div className="min-h-screen w-full lg:px-20 flex flex-col gap-20">
      <Navbar />
      <Music />
      <Hero />
      <DateLoc />
      <DressCode />
      <Rvsp />
      <WishesSection />
   </div>
  );
}
