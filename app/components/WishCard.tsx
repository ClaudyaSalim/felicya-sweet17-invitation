import { useEffect, useState } from "react";
import { WishModel } from "../models/Wish";

type WishProps = {
  wish: WishModel;
};

function formatTime(postDate: Date) {
  const now = new Date();
  console.log(postDate); // 2026-06-10T12:06:00.000Z (automatically stored as UTC in MongoDB)
  const postDateObj = new Date(postDate);
  console.log(postDateObj); // return Wed Jun 10 2026 19:06:00 GMT+0700 (Western Indonesia Time)

  const diffInSeconds = Math.floor(
    (now.getTime() - postDateObj.getTime()) / 1000,
  );
  console.log(diffInSeconds);

  if (diffInSeconds < 60) {
    return "Just now";
  }

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return rtf.format(-diffInMinutes, "minute");
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return rtf.format(-diffInHours, "hour");
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (postDateObj.toDateString() === yesterday.toDateString()) {
    return rtf.format(-1, "day");
  }

  return postDateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Wish({ wish }: WishProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), [mounted]);

  const postDate = formatTime(wish.date);

  return (
    <div className="bg-lg-element-100 p-4 rounded-lg w-full flex flex-col items-start">
      <span className="font-subheading text-2xl">{wish.name}</span>
      <span className="text-primary">{postDate}</span>
      <p className="text-neutral-600">{wish.message}</p>
    </div>
  );
}
