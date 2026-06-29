type PaginationProps = {
  totalPages: number;
  currPage: number;
  setPage: (page: number) => void;
};

export default function Pagination({
  totalPages,
  currPage,
  setPage,
}: PaginationProps) {
  const PAGES_PER_WINDOW = 3;
  const currentWindow = Math.ceil(currPage / PAGES_PER_WINDOW);
  const windowStart = (currentWindow - 1) * PAGES_PER_WINDOW + 1;
  const windowEnd = Math.min(windowStart + PAGES_PER_WINDOW - 1, totalPages);

  const pages = Array.from(
    { length: windowEnd - windowStart + 1 },
    (_, i) => i + windowStart,
  );
  // console.log(windowStart, windowEnd, totalPages, pages);

  return (
    <div className="mt-auto flex flex-row items-center justify-between w-full h-fit lg:w-[60%]">
      <button
        className="bg-secondary"
        disabled={currPage === 1}
        onClick={() => {
          setPage(currPage - 1);
        }}
      >
        Previous
      </button>
      {/* pages */}
      <div className="flex flex-row items-center gap-3">
        {windowStart !== 1 && <span className="mx-3 text-neutral-400">...</span>}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => {
              setPage(page);
            }}
            className={`min-w-8 aspect-square max-w-full bg-transparent ${page !== currPage ? "text-neutral-400" : "text-primary"}`}
          >
            {page}
          </button>
        ))}
        {windowEnd !== totalPages && <span className="mx-3 text-neutral-400">...</span>}
      </div>
      <button
        disabled={currPage === totalPages}
        onClick={() => {
          setPage(currPage + 1);
        }}
        className="bg-secondary"
      >
        Next
      </button>
    </div>
  );
}
