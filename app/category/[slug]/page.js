import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import Pagination from "@/components/Control";
import { fetchData } from "@/store/utils/api";
import Link from "next/link";
import React from "react";
import Control from "@/components/Control";
import Filters from "@/components/Filters";

const Page = async ({ params, searchParams }) => {
  const { slug } = params;
  const { page, maxResults, category } = searchParams;
  
  const { data, meta } = await getData(
    slug ,
    page ?? 1,
    maxResults ?? 4
  );
  // console.log("products are:", data)
  return (
    <Wrapper className="py-10">
      <div className="text-center text-[28px] font-semibold pb-16 leading-tight md:text-[34px] capitalize">
        {data[0]?.attributes?.categories?.data[0]?.attributes?.name}
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {data.map((product) => (
          <ProductCard data={product} key={product.id} />
        ))}
      </div>
      <div></div>
      {meta?.pagination?.pageCount > 1 && (
        <Control
          page={meta.pagination.page}
          pageCount={meta.pagination.pageCount}
        />
      )}
    </Wrapper>
  );
};

export default Page;

async function getData(slug, page, maxResult) {
  try {
    const res = await fetchData(
      `/api/products?populate=*&filters[$and][0][categories][slug][$eq]=${slug}&filters[$or][1][name][$neq]=${null}&filters[$or][2][price][$neq]=${null}&pagination[page]=${page}&pagination[pageSize]=${maxResult}`,
      "no-cache"
      // &filters[$and][0][$or][0][title][$containsi]=important
    );
    return res;
  } catch (error) {
    console.log("error is: ", error);
  }
}

// imp link for query
// https://forum.strapi.io/t/advanced-api-filter-combining-and-and-or/24375/6
