import FlowerLoading from "./FlowerLoading";

type LoadScreenProps = {
    description: string
}

export default function LoadingScreen({description}:LoadScreenProps) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6 text-lg">
      <FlowerLoading />
      {description}
    </div>
  );
}
