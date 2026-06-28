import Hero from "./sections/Hero";
import DateLoc from "./sections/DateLoc";
import DressCode from "./sections/DressCode";
import Rvsp from "./sections/Rvsp";
import WishesSection from "./sections/Wishes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./sections/Gallery";
import EndSection from "./sections/EndSection";
import Cover from "./sections/Cover";
import { Suspense } from "react";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  return (
    <Suspense fallback={<div className="h-screen w-full bg-soft-bg z-50"><LoadingScreen description="Loading ..."/></div>}>
      <div className="min-h-screen w-full flex flex-col">
        <Cover />
        <Navbar />
        <Hero />
        <DateLoc />
        <DressCode />
        <Rvsp />
        <WishesSection />
        <Gallery />
        <EndSection />
        <Footer />
      </div>
    </Suspense>
  );
}
