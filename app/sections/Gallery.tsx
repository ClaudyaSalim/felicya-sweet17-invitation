import Image from "next/image";
import ViewPhotoBtn from "../components/gallery/ViewPhotoBtn";

export default function Gallery() {
  return (
    <div className="relative w-full aspect-4/5 bg-[url(/photoshoot/cover.jpg)] bg-cover bg-center">
      <div className="relative inset-0 w-full h-full bg-linear-to-b from-white via-white/0 to-white"></div>
      <div className="absolute top-0 w-full h-full px-20">
        <h2 className="relative text-center top-20">Special Moments</h2>
        <ViewPhotoBtn position="top-[calc(50%+1rem)] left-[calc(33%+1rem)] md:top-[calc(50%+2rem)] md:left-[calc(36%+1rem)]"/>
        <ViewPhotoBtn position="top-[calc(50%+1rem)] right-1/4 md:top-1/2 md:right-[calc(25%+3rem)]"/>
        <ViewPhotoBtn position="top-3/4 right-1/5"/>
      </div>
    </div>
  );
}
