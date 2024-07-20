"use client";
import { fetchData } from "@/store/utils/api";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

const RelatedProductsCarousel = async ({ data }) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
    },
  };

  // const { data } = await getData(slug);
  // console.log("data is:", data);
  return (
    <div className="mt-[100px] mb-[100px]">
      <div className="text-2xl font-bold mb-[1px]">Similar products</div>
      <Carousel
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        containerclassName="-mx-[10px]"
        itemclassName="px-[10px]"
      >
        {/* <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div> */}
        {data?.map((p) => (
          <ProductCard key={p.id} data={p} />
        ))}
      </Carousel>
    </div>
  );
};

export default RelatedProductsCarousel;

// async function getData(slug) {
//   try {
//     const res = await fetchData(
//       `/api/products?populate=*&filters[slug][$ne]=${slug}`,
//       "no-cache"
//     );
//     console.log(res);
//     return res;
//   } catch (error) {
//     console.log("error is:", error);
//   }
// }
