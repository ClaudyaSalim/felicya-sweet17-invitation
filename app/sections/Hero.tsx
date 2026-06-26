import SlideShow from "../components/Slideshow";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen flex flex-col justify-between items-center lg:flex-row gap-6 p-6 pt-26 lg:pl-20 overflow-y-visible overflow-x-hidden"
      id="home"
    >
      <SlideShow />
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <span className="text-zinc-600">YOU ARE CORDIALLY INVITED TO</span>
        <h1
          className="-bg-linear-60 from-[#F3C073] from-35% via-cream via-50% to-[#F3C073] to-65% bg-size-[200%] bg-clip-text text-7xl/relaxed"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            WebkitTextStroke: "0.2px oklch(27.4% 0.006 286.033)",
            animation: "shimmer 3s linear infinite",
          }}
        >
          Felicya Salim
        </h1>
        <h2>
          Sweet 17<sup>th</sup> Birthday Party
        </h2>
      </div>
      <div className="z-4 absolute top-0 left-0 right-0 h-40 bg-linear-to-t from-soft-bg-100/0 from-30% to-soft-bg"/>
      <img
        src={"/assets/inv/flowers-top-left.png"}
        alt="Flowers"
        aria-hidden="true"
        className="decor top-0 left-0 w-70 lg:w-60 z-3 drop-shadow-downwards"
        style={{
          maskImage: "linear-gradient(150deg, black 30%, transparent 47%)",
          WebkitMaskImage: "linear-gradient(150deg, black 30%, transparent 47%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in"
        }}
      />
      <img
        src={"/assets/inv/flowers-top-right.png"}
        alt="Flowers"
        aria-hidden="true"
        className="decor top-0 right-0 w-60 z-3 drop-shadow-downwards"
        style={{
          maskImage: "linear-gradient(-150deg, black 30%, transparent 60%)",
          WebkitMaskImage: "linear-gradient(-150deg, black 30%, transparent 60%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in"
        }}
      />
    </section>
  );
}
