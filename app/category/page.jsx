import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import Pagination from "@/components/Control";
import { fetchData } from "@/store/utils/api";
import Link from "next/link";
import React, { Suspense } from "react";
import Control from "@/components/Control";
import Filters from "@/components/Filters";
import ProductList from "@/components/ProductList";
import { ProductListSkeleton } from "@/components/Skeletons";

const Page = async ({ params, searchParams }) => {
  //   const { slug } = params;

  // console.log("products are:", data)
  return (
    <Wrapper className="py-10">
      <Filters />
      <div className="text-left text-lg font-semibold py-8 leading-tight md:text-lg capitalize text-gray-600">
        {/* {data[0]?.attributes?.categories?.data[0]?.attributes?.name}(
        {data?.length}) For You! */}
        <h2 className="border-b pb-2 text-gray-500 font-normal text-xl">
          {searchParams.category || <span className="">All products</span>} For
          You!
        </h2>
      </div>
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList searchParams={searchParams} />
      </Suspense>
    </Wrapper>
  );
};

export default Page;
