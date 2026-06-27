"use client";

import { useCallback, useEffect, useState } from "react";
import { WishModel } from "../models/Wish";
import Wish from "../components/WishCard";
import Pagination from "../components/Pagination";
import WishForm from "../components/forms/WishForm";

export default function WishesSection() {
  const [wishes, setWishes] = useState<WishModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("newest");
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const getWishes = useCallback(async () => {
    // try {
    //   setLoading(true);
    //   const response = await fetch(`/api/wishes?page=${page}&sort=${sort}`, {
    //     method: "GET",
    //   });

    //   if (!response.ok) {
    //     const message = `An error occurred: ${response.statusText}`;
    //     setError("Error fetching wishes");
    //     console.error(message);
    //     return;
    //   }
    //   const res = await response.json();
    //   setWishes(res.wishes);
    //   setTotalPages(res.total_pages);
    //   setError(null);
    // } catch (error) {
    //   console.error("Error fetching wishes: ", error);
    //   setError("Error fetching wishes");
    // } finally {
    //   setLoading(false);
    // }
  }, [page, sort]);

  useEffect(() => {
    getWishes();
  }, [getWishes]);

  return (
    <div
      className="relative w-full h-fit p-6 flex flex-col items-center gap-6 pt-26 overflow-y-visible  overflow-x-clip"
      id="wishes"
    >
      <h2>Send Your Wishes</h2>
      <WishForm onWishCreated={getWishes} />
      <div className="py-6 w-full md:w-[60%] min-h-100 flex flex-col items-center gap-3 z-1">
        {loading
          ? <div className="w-full h-100 flex flex-col justify-center items-center">
            Loading wishes ...
          </div>
          : error
            ? <p className="text-error my-auto">{error}</p>
            : wishes.length == 0
              ? "Be the first to add your wish"
              : wishes.map((wish) => (
                  <Wish key={wish._id.toString()} wish={wish} />
                ))}
        {/* remove pagination if there's only 1 page */}
        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currPage={page}
            setPage={(newPage) => {
              setPage(newPage);
            }}
          />
        )}
      </div>
      <img
        src={"/assets/sakura-falling-top-left.png"}
        alt="Flowers"
        aria-hidden="true"
        className="decor -top-5 left-0 w-70 lg:w-90 z-3"
        style={{
          maskImage:
            "linear-gradient(to top, black 30%, transparent 90%), linear-gradient(to bottom, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, black 30%, transparent 90%), linear-gradient(to bottom, black 70%, transparent 100%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
    </div>
  );
}
