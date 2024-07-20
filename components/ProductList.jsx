import React from "react";
import ProductCard from "./ProductCard";
import { fetchData } from "@/store/utils/api";
import Control from "./Control";
import Pagination from "./Pagination";

const ProductList = async ({ searchParams }) => {
  const { page, maxResults, category, query, min, max, sort } = searchParams;
  // const promise = new Promise((resolve, reject) =>
  //   setTimeout(() => {
  //     resolve();
  //   }, 100000)
  // );

  // const delay = async (ms) => {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // };
  // await delay(20000);
  const { data, meta } = await getData(
    sort ?? "",
    category ?? null,
    query ?? null,
    min ?? null,
    max ?? null,
    page ?? 1,
    maxResults ?? 5
  );
  return (
    <>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {data.map((product) => (
          <ProductCard data={product} key={product.id} />
        ))}
      </div>
      {meta?.pagination?.pageCount > 1 && (
        <Pagination
          currentPage={meta.pagination.page}
          pageCount={meta.pagination.pageCount}
        />
      )}
    </>
  );
};

export default ProductList;

async function getData(sort, category, query, min, max, page, maxResult) {
  //  await new Promise((resolve) => setTimeout(resolve, 100000));


  const catQuery = `filters[$and][0][categories][slug][${
    category ? "$eq" : "$neq"
  }]=${category}`;

  const productNameQuery = `filters[$and][1][name][${
    query ? "$containsi" : "$neq"
  }]=${query}`;

  const priceQuery = `filters[$and][1][price][${min ? "$gte" : "$neq"}]=${min}
        &filters[$and][1][price][${max ? "$lte" : "$neq"}]=${max}`;

  let sortQuery = `sort[0]=updatedAt:asc`;

  if (sort.toLowerCase() === "newest") {
    sortQuery = `sort[0]=updatedAt:desc`;
  }
  if (sort.toLowerCase() === "price asc") {
    // const sortOrder = sort.split(" ");
    const [value, type] = sort.split(" ");
    // console.log("sort order is with space:", sort);
    sortQuery = `sort[0]=${value}:${type}`;
    // sortQuery = `sort[0]=price:asc`;
  }
  if (sort.toLowerCase() === "price+desc") {
    const sortOrder = sort.split("+");
    console.log("sort order is with space:", sortOrder[0]);
    sortQuery = `sort[0]=${sortOrder[0]}:${sortOrder[1]}`;
    // sortQuery = `sort[0]=price:desc`;
  }
  if (!sort) {
    sortQuery = `sort[0]=updatedAt:asc`;
  }
  try {
    const res = await fetchData(
      `/api/products?populate=*&${catQuery}&${productNameQuery}&filters[$and][1][price][${
        min ? "$gte" : "$notNull"
      }]=${min}
        &filters[$and][1][price][${
          max ? "$lte" : "$notNull"
        }]=${max}&${sortQuery}&pagination[page]=${page}&pagination[pageSize]=${maxResult}`,
      "no-cache"
    );
    return res;
    // &filters[$and][0][$or][0][title][$containsi]=important
  } catch (error) {
    console.log("error is: ", error);
  }
}

// imp link for query
// https://forum.strapi.io/t/advanced-api-filter-combining-and-and-or/24375/6
