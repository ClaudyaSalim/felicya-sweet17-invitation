import Image from "next/image";
import Hero from "./sections/Hero";
import DateLoc from "./sections/DateLoc";
import DressCode from "./sections/DressCode";
import Rvsp from "./sections/Rvsp";
import WishesSection from "./sections/Wishes";
import Navbar from "./components/Navbar";
import Music from "./components/Music";
import Footer from "./components/Footer";
import Gallery from "./sections/Gallery";
import EndSection from "./sections/EndSection";
import EnvelopeCover from "./sections/EnvelopeCover";
import Cover from "./sections/Cover";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-20">
      <Cover />
      {/* <EnvelopeCover /> */}
      <Navbar />
      {/* <Music /> */}
      <Hero />
      <DateLoc />
      <DressCode />
      <Rvsp />
      <WishesSection />
      <Gallery />
      <EndSection />
      <Footer />
    </div>
  );
}
