export default function DressCode() {
  return (
    <section
      className="relative w-full h-screen flex flex-col items-center justify-center gap-6 overflow-y-visible"
      id="dresscode"
    >
      <h2>Dress Code</h2>
      <div className="palette flex flex-row gap-6">
        <span className="size-20 bg-sage-green rounded-full flex flex-row items-center justify-center text-xl">
          Male
        </span>
        <span className="size-20 bg-cream rounded-full flex flex-row items-center justify-center text-xl">
          Female
        </span>
      </div>
      <div>
        <p>
          <span className="font-bold">Male:</span> Pastel Green collar Shirt +
          White Pants
        </p>
        <p>
          <span className="font-bold">Female:</span> Cream Dress
        </p>
        <p>
          <span className="font-bold">Guests:</span> Pastel Formal
        </p>
      </div>
      <p>(No Pink & No Red)</p>
      <img
        src={"/assets/inv/flowers-side-left-sm.png"}
        alt="Flowers"
        aria-hidden="true"
        className="decor top-10 lg:top-0 -left-5 size-80 lg:size-60 z-3 drop-shadow-downwards"
        style={{
          maskImage:
            "radial-gradient(circle, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 30%, transparent 70%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      <img
        src={"/assets/inv/flowers-side-right-lg.png"}
        alt="Flowers"
        aria-hidden="true"
        className="decor -bottom-10 right-0 w-50 z-3 drop-shadow-downwards"
        style={{
          maskImage:
            "linear-gradient(-30deg, black 20%, transparent 100%), linear-gradient(-175deg, black 70%, transparent 95%)",
          WebkitMaskImage:
            "linear-gradient(-30deg, black 20%, transparent 75%), linear-gradient(-175deg, black 70%, transparent 95%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
    </section>
  );
}
