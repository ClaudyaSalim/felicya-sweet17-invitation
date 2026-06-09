import Image from "next/image";
import Hero from "./sections/Hero";
import DateLoc from "./sections/DateLoc";
import DressCode from "./sections/DressCode";
import Rvsp from "./sections/Rvsp";

export default function Home() {
  return (
   <div className="min-h-screen w-full lg:px-20">
      <Hero />
      <DateLoc />
      <DressCode />
      <Rvsp />
   </div>
  );
}
