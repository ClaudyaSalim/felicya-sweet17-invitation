"use client";

import { ObjectId } from "mongodb";
import { useEffect, useState } from "react";

interface WishModel {
  _id: ObjectId;
  name: string;
  date: Date;
  message: string;
}

type WishProps = {
  wish: WishModel;
};

export function Wish({ wish }: WishProps) {
  const postDate = formatTime(wish.date);
  return (
    <div className="bg-pink-100 p-4 rounded-md w-full flex flex-col gap-2 items-start">
      <span className="font-subheading text-2xl">{wish.name}</span>
      <span className="text-pink-400">{postDate}</span>
      <p className="text-gray-700">{wish.message}</p>
    </div>
  );
}

export function formatTime(postDate: Date) {
  const now = new Date();
  console.log(postDate) // 2026-06-10T12:06:00.000Z (automatically stored as UTC in MongoDB)
  const postDateObj = new Date(postDate)
  console.log(postDateObj) // return Wed Jun 10 2026 19:06:00 GMT+0700 (Western Indonesia Time)

  const diffInSeconds = Math.floor((now.getTime() - postDateObj.getTime() / 1000));
  console.log(diffInSeconds)

  if (diffInSeconds < 60) {
    return "Just now";
  }

  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return rtf.format(-diffInMinutes, 'minute');
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return rtf.format(-diffInHours, 'hour');
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  
  if (postDateObj.toDateString() === yesterday.toDateString()) {
    return rtf.format(-1, 'day');
  }

  return postDateObj.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function WishesSection() {
  const [wishes, setWishes] = useState<WishModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getWishes() {
      try {
        const response = await fetch("/api/wishes", { method: "GET" });

        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          console.error(message);
          return;
        }
        const wishes = await response.json();
        setWishes(wishes);
      } catch (error) {
        console.error("Error fetching wishes: ", error);
      } finally {
        setLoading(false);
      }
    }

    getWishes();
  }, []);

  return (
    <div className="w-full h-screen py-6 flex flex-col items-center">
      <h2>Send Your Wishes</h2>
      <form></form>
      <div className="p-6 w-full">
        {loading && "Loading wishes ..."}
        {!loading && wishes.length!=0 &&
        wishes.map((wish) => (
          <Wish key={wish._id.toString()} wish={wish} />
        ))}
      </div>
    </div>
  );
}
