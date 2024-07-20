import { getDiscountedPricePercentage } from "@/store/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProductCard = ({ data: { attributes: p, id } }) => {
  // const { id, attributes: p } = data;  // same
  // console.log("category is", p.categories.data[0].attributes.name);
  return (
    <div className="relative mb-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg bg-white shadow-lg">
      {/* card */}
      <Link
        href={`/product/${p.slug}`}
        className="transform overflow-hidden bg-white  duration-200 hover:scale-105 cursor-pointer px-2"
      >
        <Image
          width={300}
          height={100}
          src={p.thumbnail.data.attributes.url}
          // src={"/images/slide-1.png"}
          alt={p.name}
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {p.orignal_price &&
            -getDiscountedPricePercentage(p.orignal_price, p.price)}
          {"%"}
        </span>

        <div className="mt-4 px-2 sm:px-5 pb-2">
          <span className="text-sm sm:text-sm font-bold text-slate-500 mb-1 capitalize">
            {p.categories.data[0].attributes.name}
          </span>
          <h5 className="text-sm sm:text-lg tracking-tight text-gray-500 font-semibold">
            {p.name}
          </h5>
          <div className="mt-0 mb-2 flex items-center justify-between">
            <p>
              <span className="text-lg sm:text-xl font-bold text-slate-500">
                {p.price}
              </span>
              {p.orignal_price && (
                <>
                  <span className="text-xs sm:text-sm text-slate-500 line-through">
                    ${p.orignal_price}
                  </span>
                  <p className="ml-auto text-base font-medium text-green-500">
                    {getDiscountedPricePercentage(p.orignal_price, p.price)}%
                    off
                  </p>
                </>
              )}
              <p className="text-xs">{p.updatedAt}</p>
            </p>
          </div>
        </div>
      </Link>
      <div className="mt-1 px-5 pb-5">
        <Link
          href="#"
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-xs sm:text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Add to cart
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
