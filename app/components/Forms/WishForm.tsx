import { useActionState, useEffect, useRef, useState } from "react";
import InputField from "../InputField";
import InputGroup from "../InputGroup";
import TextArea from "../TextArea";

type WishFormProps = {
    onWishCreated: ()=>void;
}

export default function WishForm({onWishCreated}: WishFormProps) {
  const [state, formAction, isPending] = useActionState(handleSubmit, null);
  const formRef = useRef<HTMLFormElement>(null);
  const [disable, setDisable] = useState(true);

  useEffect(()=>{
    if(state?.success){
        formRef.current?.reset()
        onWishCreated()
    }
  }, [state, onWishCreated])

  async function handleSubmit(_:unknown, formData: FormData) {
    const name = formData.get("name");
    const message = formData.get("wish");

    try {
      const response = await fetch("/api/wishes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name===""?"Anonymous" : name,
          message: message,
          createdAt: new Date(),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        
        return { success: "Successfully subscribed!" }
      } else {
        return {error: result.message}
      }
    } catch (error) {
        return {error: error}
    }
  }

  return (
    <form
      action={formAction}
      ref={formRef}
      className="w-[90%] lg:w-[60%] flex flex-col gap-10 bg-pink-50 p-6 rounded-lg"
    >
      <InputGroup labelName="Name" labelFor="sender-name">
        <InputField
          type="text"
          id="sender-name"
          name="name"
          placeholder="Enter your name"
        />
        <p className="text-gray-400 text-sm">If empty, your wish will be posted as anonymous</p>
      </InputGroup>
      <InputGroup labelName="Message" labelFor="sender-wish">
        <TextArea
          id="sender-wish"
          name="wish"
          placeholder="Enter your wishes here ..."
          onChange={(e)=>{e.target.value===""? setDisable(true) : setDisable(false)}}
        />
      </InputGroup>
      <button type="submit" disabled={isPending||disable}>Send Wish</button>
    </form>
  );
}
