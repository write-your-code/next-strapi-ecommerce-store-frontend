"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ currentPage, pageCount }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  // Logic to calculate the number of pages based on the current page and page count

  const createPageUrl = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-6 flex justify-center gap-4 items-center w-full">
      <button
        className="rounded-2xl bg-slate-900 hover:bg-slate-700 text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-300"
        disabled={currentPage === 1}
        onClick={() => createPageUrl(currentPage - 1)}
      >
        Previous
      </button>
      <div className="text-xs sm:text-lg text-slate-900 font-medium">
        Page {currentPage} of {pageCount}
      </div>
      <button
        className="rounded-2xl bg-slate-900 hover:bg-slate-700 text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-300"
        disabled={currentPage === pageCount}
        onClick={() => createPageUrl(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
