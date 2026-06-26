import SlideShow from "../components/Slideshow";

export default function Hero() {
  return (
    <section
      className="w-full h-screen flex flex-col justify-between items-center lg:flex-row gap-6 p-6 lg:pl-20"
      id="hero"
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
            animation: "shimmer 3s linear infinite"
          }}
        >
          Felicya Salim
        </h1>
        <h2>
          Sweet 17<sup>th</sup> Birthday Party
        </h2>
      </div>
    </section>
  );
}
