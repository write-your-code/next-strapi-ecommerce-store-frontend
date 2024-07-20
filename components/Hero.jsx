// helpfull link
// https://stackoverflow.com/questions/74828427/how-to-customize-react-responsive-carousel-arrow

"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack, BiRightArrow, BiLeftArrow } from "react-icons/bi";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="text-white text-xl max-w-[1100px] mx-auto pb-0">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        renderIndicator={false}
        showThumbs={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            className={`${
              hasPrev ? "absolute" : "hidden"
            } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-50 hover:opacity-100 cursor-pointer z-20 sm:my-32`}
            onClick={clickHandler}
          >
            <BiLeftArrow className="w-9 h-9 text-white" />
          </div>
          //   <div
          //     onClick={clickHandler}
          //     className="absolute right-8 top-0 w-[30px] h-[30px] z-10 bg-black flex justify-center items-center cursor-pointer"
          //   >
          //     <BiArrowBack />
          //   </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            className={`${
              hasNext ? "absolute" : "hidden"
            } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-50 hover:opacity-100 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <BiRightArrow className="w-9 h-9 text-white" />
          </div>
          //   <div
          //     onClick={clickHandler}
          //     className="absolute right-0 top-0 w-[30px] h-[30px] z-10 bg-black text-white flex justify-center items-center cursor-pointer"
          //   >
          //     <BiArrowBack className=" rotate-180"/>
          //   </div>
        )}
      >
        <div>
          <img src="images/slide-1.png" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="images/slide-1.png" />
          <div className="absolute bottom-0 text-xs sm:text-md sm:bottom-10 px-3 py-2 flex justify-center items-center bg-white text-black/[0.7] font-semibold">
            <Link href={"/product/new-product"}>Shop Now</Link>
          </div>
        </div>
        <div>
          <img src="images/slide-1.png" />
          <span className="legend">Legend 3</span>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
