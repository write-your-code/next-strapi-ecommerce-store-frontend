"use client";
import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = ({ images }) => {
  return (
    <div className="w-full sticky top-[100px]">
      <Carousel
        autoPlay={false}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={true}
        // thumbWidth={}
        className="productCarousel"
      >
        {/* <img src={"/images/slide-1.png"} />

        <img src={"/images/p2.png"} />

        <img src={"/images/p2.png"} />

        <img src={"/images/p2.png"} /> */}

        {/* <Image src={"/images/slide-1.png"} width={400} height={300} />
        <Image src={"/images/p2.png"} width={400} height={300} />
        <Image src={"/images/slide-1.png"} width={400} height={300} />
      <Image src={"/images/slide-1.png"} width={400} height={300} /> */}
        {images && images?.map((img) => (
          <img src={`${img?.attributes?.url}`} key={img?.attributes?.url}/>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
