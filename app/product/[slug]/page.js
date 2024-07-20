import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import React from "react";
import Wrapper from "@/components/Wrapper";
import { fetchData } from "@/store/utils/api";
import { getDiscountedPricePercentage } from "@/store/utils/helpers";
import ProductDetail from "@/components/ProductDetail";
import RelatedProductsCarousel from "@/components/RelatedProductsCarousel";
import { Suspense } from "react";
import { LinesSkeleton, ReletedProductSkeleton } from "@/components/Skeletons";

const Page = async ({ params, searchParams }) => {
  const { slug } = params;
  const { data } = await getProduct(slug);
  const { data: relatedProducts } = await getProducts(slug);

  const p = data[0]?.attributes;

  return (
    <div className="md:py-6 lg:py-4">
      <Wrapper>
        <div className="flex flex-col md:flex-row gap-[50px] lg:gap-[100px]">
          {/* Left column starts */}
          <div className="w-full flex-[1.5]">
            <ProductDetailsCarousel images={p.image.data} />
          </div>
          {/* Left column ends */}

          {/* Right column starts */}
          <div className="flex-[1] py-1 px-4">
            {/* Product Title */}
            <div className="text-[32px] font-semibold leading-tight">
              {p?.name}
            </div>
            {/* Product SubTitle */}
            <div className="text-[20px] font-semibold mb-4">{p?.subtitle}</div>
            {/* Product Price */}
            <div className="flex items-center gap-2">
              <div className="text-lg font-semibold">
                MRP : &#36; {p?.price}
              </div>

              <div className="text-base font-normal">
                {p?.orignal_price && (
                  <div className="flex items-center gap-3">
                    <p className="line-through">{p.orignal_price}</p>
                    <p className="ml-auto leading-tight text-green-500">
                      {getDiscountedPricePercentage(p.orignal_price, p.price)} %
                      off
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-10">
              {"(also include all applicable duties)"}
            </div>
            {/* Product size range start */}
            <div className="mb-10">
              {/* HEADING START */}
              <div className="flex justify-between mb-1">
                <div className="text-md font-semibold ">Select Size</div>
                <div className="text-md font-semibold text-black/[0.5]">
                  Select Guide
                </div>
              </div>
              {/* HEADING ENDS */}
              {/* size starts */}
              <ProductDetail product={data[0]} />
              {/* size ends */}
            </div>
            {/* Product size range ends */}
          </div>
          {/* Right column ends */}
        </div>
        {/* related products starts */}
        {/* <Suspense fallback={<ReletedProductSkeleton size={4}/>}> */}
        <RelatedProductsCarousel data={relatedProducts} />
        {/* </Suspense> */}
        {/* related products ends */}
      </Wrapper>
    </div>
  );
};

export default Page;

async function getProduct(slug) {
  // to add delayed loading
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  try {
    const product = await fetchData(
      `/api/products?populate=*&filters[slug][$eq]=${slug}`,
      "no-cache"
    );

    console.log("product is:", product.data[0]);
    return product;
  } catch (error) {
    console.log("error is:", error);
  }
}
async function getProducts(slug) {
  try {
    const products = await fetchData(
      `/api/products?populate=*&filters[slug][$ne]=${slug}`,
      "no-cache"
    );

    // console.log(res);
    return products;
  } catch (error) {
    console.log("error is:", error);
  }
}
