type ViewPhotoBtnProps = {
  position: string;
  setOpen: () => void
};

export default function ViewPhotoBtn(props: ViewPhotoBtnProps) {

  return (
    <button
      className={`absolute bg-lg-element-100 text-black text-xs w-fit px-2 ${props.position} transform -translate-x-1/2 -translate-y-1/2 outline-3 md:outline-6 outline-white/60`}
      onClick={() => {
        props.setOpen()
      }}
    >
      View
    </button>
  );
}
