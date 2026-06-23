type ViewPhotoBtnProps = {
//   topSm: string;
//   leftSm: string;
//   topMd: string;
//   leftMd: string;
    position: string;
};

export default function ViewPhotoBtn(props: ViewPhotoBtnProps) {
  return (
    <button
      className={`absolute bg-white text-black text-xs w-fit px-2 ${props.position} transform -translate-x-1/2 -translate-y-1/2 outline-6 outline-pink-200/60`}
    >
      View
    </button>
  );
}
