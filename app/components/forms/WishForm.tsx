import { useActionState, useEffect, useRef, useState } from "react";
import InputField from "../InputField";
import InputGroup from "../InputGroup";
import TextArea from "../TextArea";

type WishFormProps = {
  onWishCreated: () => void;
};

export default function WishForm({ onWishCreated }: WishFormProps) {
  const [state, formAction, isPending] = useActionState(handleSubmit, null);
  const formRef = useRef<HTMLFormElement>(null);
  const [disable, setDisable] = useState(true);
  const [submitErr, setSubmitErr] = useState<string | null>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
      onWishCreated();
      setSubmitErr(null);
    }
  }, [state, onWishCreated]);

  async function handleSubmit(_: unknown, formData: FormData) {
    const name = formData.get("name");
    const message = formData.get("wish");

    try {
      const response = await fetch("/api/wishes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name === "" ? "Anonymous" : name,
          message: message,
          createdAt: new Date(),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setDisable(true);
        return { success: "Successfully subscribed!" };
      } else {
        setSubmitErr("Uh oh! Something went wrong");
        return { error: result.message };
      }
    } catch (error) {
      setSubmitErr("Failed to send wishes");
      return { error: error };
    }
  }

  return (
    <form
      action={formAction}
      ref={formRef}
      className="relative w-full md:w-[60%] flex flex-col gap-10 bg-lg-element p-6 rounded-lg overflow-visible"
    >
      <InputGroup labelName="Name" labelFor="sender-name">
        <InputField
          type="text"
          id="sender-name"
          name="name"
          placeholder="Enter your name"
        />
        <p className="text-gray-500 text-sm">
          If empty, your wish will be posted as anonymous ˙ᵕ˙
        </p>
      </InputGroup>
      <InputGroup labelName="Message" labelFor="sender-wish">
        <TextArea
          id="sender-wish"
          name="wish"
          placeholder="Enter your wishes here ..."
          rows={5}
          onChange={(e) => {
            e.target.value === "" ? setDisable(true) : setDisable(false);
          }}
          required
        />
        <p className="text-sm text-error">{submitErr ? submitErr : ""}</p>
      </InputGroup>
      <button type="submit" disabled={isPending || disable} className="h-15 flex flex-row items-center justify-center gap-2">
        {isPending && (
          <svg className="stroke-white h-full w-auto mr-2 my-auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3" strokeLinecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" calcMode="spline" values="0 150;42 150;42 150;42 150" keyTimes="0;0.475;0.95;1" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" repeatCount="indefinite"/><animate attributeName="stroke-dashoffset" dur="1.5s" calcMode="spline" values="0;-16;-59;-59" keyTimes="0;0.475;0.95;1" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" repeatCount="indefinite"/></circle><animateTransform attributeName="transform" type="rotate" dur="2s" values="0 12 12;360 12 12" repeatCount="indefinite"/></g></svg>
        )}
        Send Wish
      </button>

      <img
        src={"/assets/sakura-left.png"}
        alt="Flowers"
        aria-hidden="true"
        className="decor bottom-0 lg:top-1/4 -right-20 md:-right-60 lg:-right-80 w-50 lg:w-90 z-3 transform -scale-x-100"
        style={{
          maskImage: "linear-gradient(40deg, black 20%, transparent 90%)",
          WebkitMaskImage: "linear-gradient(40deg, black 20%, transparent 90%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <img
        src={"/assets/lily-bottom-center.png"}
        alt="Flowers"
        aria-hidden="true"
        className="decor -bottom-60 lg:-bottom-80 -left-50 md:-left-80 w-80 lg:w-100"
        style={{
          maskImage:
            "radial-gradient(circle at top, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at top, black 30%, transparent 75%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
    </form>
  );
}
