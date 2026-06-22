"use client";

import { useCallback, useEffect, useState } from "react";
import { WishModel } from "../models/Wish";
import Wish from "../components/WishCard";
import WishForm from "../components/Forms/WishForm";
import Pagination from "../components/Pagination";

export default function WishesSection() {
  const [wishes, setWishes] = useState<WishModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("newest");
  const [totalPages, setTotalPages] = useState(0);

  const getWishes = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/wishes?page=${page}&sort=${sort}`, {
        method: "GET",
      });

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const res = await response.json();
      setWishes(res.wishes);
      setTotalPages(res.total_pages);
    } catch (error) {
      console.error("Error fetching wishes: ", error);
    } finally {
      setLoading(false);
    }
  }, [page, sort]);

  useEffect(() => {
    getWishes();
  }, [getWishes]);

  return (
    <div className="w-full h-fit py-6 flex flex-col items-center" id="wishes">
      <h2>Send Your Wishes</h2>
      <WishForm onWishCreated={getWishes} />
      <div className="p-6 w-full flex flex-col items-center gap-3">
        {loading
          ? "Loading wishes ..."
          : wishes.length == 0
            ? "Be the first to add your wish"
            : wishes.map((wish) => (
                <Wish key={wish._id.toString()} wish={wish} />
              ))}
        {/* remove pagination if there's only 1 page */}
        {totalPages !== 1 && (
          <Pagination
            totalPages={totalPages}
            currPage={page}
            setPage={(newPage) => {
              setPage(newPage);
            }}
          />
        )}
      </div>
    </div>
  );
}
