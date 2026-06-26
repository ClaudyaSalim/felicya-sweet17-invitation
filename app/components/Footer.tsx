export default function Footer() {
  return (
    <div className="relative w-full px-6 flex flex-col justify-center overflow-y-visible">
      <hr className="border border-secondary/40" />
      <span className="z-4 text-center py-6 text-gray-500 drop-shadow-2xl drop-shadow-white">Made by Claudya Salim (Felicya's Sister)</span>
      
      <img
        src={"/assets/inv/flowers-bottom-left.png"}
        alt="Flowers"
        aria-hidden="true"
        className="decor bottom-0 left-0 size-50 lg:size-75 z-3 drop-shadow-[20px_-25px_25px_#fff4f1]"
        style={{
          maskImage: "linear-gradient(40deg, black 30%, transparent 70%), linear-gradient(150deg, black 70%, transparent 95%)",
          WebkitMaskImage: "linear-gradient(40deg, black 30%, transparent 70%), linear-gradient(150deg, black 70%, transparent 95%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in"
        }}
      />
      <img
        src={"/assets/inv/flowers-bottom-right.png"}
        alt="Flowers"
        aria-hidden="true"
        className="decor bottom-0 right-0 w-50 lg:w-70 z-3 drop-shadow-downwards"
        style={{
          maskImage: "linear-gradient(-30deg, black 20%, transparent 75%), linear-gradient(-175deg, black 70%, transparent 95%)",
          WebkitMaskImage: "linear-gradient(-30deg, black 20%, transparent 75%), linear-gradient(-175deg, black 70%, transparent 95%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in"
        }} />
    </div>
  );
}
