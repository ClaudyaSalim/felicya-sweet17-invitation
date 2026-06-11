"use client";

import { useEffect, useState } from "react";
import { WishModel } from "../models/Wish";
import Wish from "../components/WishCard";

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
    <div className="w-full h-fit py-6 flex flex-col items-center">
      <h2>Send Your Wishes</h2>
      <form></form>
      <div className="p-6 w-full h-screen flex flex-col items-center">
        <h2>All Wishes</h2>
        {loading
          ? "Loading wishes ..."
          : wishes.length == 0
            ? "Be the first to add your wish"
            : wishes.map((wish) => (
                <Wish key={wish._id.toString()} wish={wish} />
              ))}
      </div>
    </div>
  );
}
