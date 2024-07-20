import Wrapper from "@/components/Wrapper";
import React from "react";
import { FaSpinner } from "react-icons/fa";

export const HeadingSkeleton = () => {
  return (
    <Wrapper className="py-10">
      <div className="flex justify-center">
        <h2 className="w-1/4 h-[30px] bg-gray-300 my-4 rounded-full animate-pulse"></h2>
      </div>
    </Wrapper>
  );
};
export const ReletedProductSkeleton = ({ size = 4 }) => {
  return (
    <Wrapper className="py-10">
      <div className="flex justify-center">
        <h2 className="w-1/4 h-[30px] bg-gray-300 my-4 rounded-full animate-pulse"></h2>
      </div>
      <div className="flex py-6 flex-wrap">
        {Array(size)
          .fill(1)
          .map((a) => (
            <div className="w-full sm:w-1/4 sm:px-4 h-[400px]">
              <div className="bg-gray-300 w-full  h-[250px] rounded animate-pulse"></div>
              {/* <h2 className="w-full h-[30px] bg-gray-300 my-4 rounded-full animate-pulse"></h2>
              <p className="w-full h-[15px] bg-gray-300 my-3 rounded-full animate-pulse"></p> */}
            </div>
          ))}
      </div>
    </Wrapper>
  );
};
export const ProductListSkeleton = () => {
  return (
    <Wrapper className="py-2">
      {/* <div className="flex justify-center">
        <h2 className="w-1/4 h-[30px] bg-gray-300 my-4 rounded-full animate-pulse"></h2>
      </div> */}
      <div className="flex py-2 flex-wrap">
        {Array(8)
          .fill(1)
          .map((a) => (
            <div className="w-1/4 h-[400px] px-2">
              <div className="bg-gray-300 w-full h-[250px] rounded animate-pulse"></div>
              <h2 className="w-full h-[30px] bg-gray-300 my-4 rounded-full animate-pulse"></h2>
              <p className="w-full h-[15px] bg-gray-300 my-3 rounded-full animate-pulse"></p>
            </div>
          ))}
      </div>
    </Wrapper>
  );
};

export const ProductDetailSkeleton = ({ size = 1 }) => {
  return (
    <Wrapper className="py-10">
      {/* <div className="flex justify-center">
        <h2 className="w-1/4 h-[30px] bg-gray-300 my-4 rounded-full animate-pulse"></h2>
      </div> */}
      <div className="flex py-4 flex-wrap px-2">
        {Array(size)
          .fill(1)
          .map((a) => (
            <div className="w-full sm:w-1/2 h-[600px]">
              <div className="bg-gray-300 w-full h-[400px] rounded animate-pulse"></div>
              <h2 className="w-full h-[30px] bg-gray-300 my-4 rounded animate-pulse"></h2>
              <p className="w-full h-[15px] bg-gray-300 my-3 rounded animate-pulse"></p>
            </div>
          ))}
        <div className="w-full sm:w-1/2">
          <LinesSkeleton size={6} />
        </div>
      </div>
      <div>
        <ReletedProductSkeleton size={4} />
      </div>
    </Wrapper>
  );
};
export const LinesSkeleton = ({ size = 1 }) => {
  return (
    <div className="w-full px-2">
      {/* <div className="">
        <h2 className="w-1/4 h-[30px] bg-gray-300 my-4 rounded-full animate-pulse"></h2>
      </div> */}
      {/* <div className="flex gap-4 py-6 flex-wrap"> */}
      {Array(size)
        .fill(1)
        .map((a) => (
          <div className="w-full h-[60px] mb-2">
            {/* <div className="bg-gray-300 w-full h-[250px] rounded animate-pulse"></div> */}
            <h2 className="w-full h-[20px] bg-gray-300 rounded-full animate-pulse"></h2>
            <p className="w-full h-[10px] bg-gray-300 my-3 rounded-full animate-pulse"></p>
          </div>
        ))}
      {/* //   </div> */}
    </div>
  );
};
