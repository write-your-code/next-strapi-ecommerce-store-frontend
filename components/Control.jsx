"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

function Control({ page, pageCount, category }) {
  const router = useRouter();
  const params = useSearchParams();

  return (
    <>
      <div className="flex justify-center items-center gap-4 py-10">
        {/* {page > 1 && ( */}
        <button
          className="bg-black text-white px-4 py-2 rounded disabled:bg-black/[0.7]"
          disabled={page === 1}
          onClick={() => {
            router.push(`?${category && category}&page=${page - 1}`);
          }}
        >
          Prev
        </button>
        {/* )} */}
        <span className="font-bold text-lg"> {`${page} of ${pageCount}`}</span>
        {/* {pageCount - page >= 1 && ( */}
        <button
          className="bg-black text-white px-4 py-2 rounded disabled:bg-black/[0.7]"
          disabled={page === pageCount}
          onClick={() => {
            router.replace(
              `${category ? `?category=${category}` : "?"}&page=${page + 1}`
            );
          }}
        >
          Next
        </button>
        {/* )} */}
      </div>

      {/* second method */}
      <div className="flex justify-center items-center gap-2">
        {Array(pageCount)
          .fill(1)
          .map((a, i) => (
            // console.log("run")
            <button
              key={i}
              className={`p-3 py-2 rounded bg-red-400 text-white ${
                page === i + 1 ? "border-[2px] border-black/[0.7]" : ""
              }`}
              onClick={() => router.push(`?page=${i + 1}`)}
            >
              {i + 1}
            </button>
          ))}
      </div>
    </>
  );
}

export default Control;
