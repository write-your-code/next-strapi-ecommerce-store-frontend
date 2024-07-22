"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/cartSlice";

const ProductDetail = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);

  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const p = product?.attributes;
  const id = product?.id;
  console.log(cart, totalAmount);
  // console.log("details are:", product);
  return (
    <>
      <div className="grid grid-cols-3 gap-2" id="sizesGrid">
        {p?.size?.data.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              setSelectedSize(item.size);
              setShowError(false);
            }}
            className={`border rounded-md text-center py-1 font-normal text-sm whitespace-nowrap
                                    ${
                                      item.enabled
                                        ? "hover:border-black cursor-pointer"
                                        : "cursor-not-allowed bg-black/[0.1] opacity-50"
                                    }
                                    ${
                                      selectedSize === item.size
                                        ? "bg-black/[0.7] text-gray-100 font-semibold."
                                        : ""
                                    }`}
          >
            {item.size}
          </div>
        ))}
      </div>
      {/* show error start */}
      {showError && (
        <div className="text-red-600 mt-1">Size selection is required</div>
      )}
      {/* show error end */}
      {/* ADD TO CART BUTTON STARTS */}
      <button
        className={`w-full py-2 bg-black rounded-full text-white cursor-pointer font-medium text-lg transition-transform active:scale-95 hover:opacity-75 mb-4 mt-4`}
        onClick={() => {
          if (!selectedSize) {
            setShowError(true);
            document.getElementById("sizesGrid").scrollIntoView({
              block: "center",
              behavior: "smooth",
              inline: "nearest",
            });
          } else {
            dispatch(
              addToCart({
                id,
                ...p,
                selectedSize,
                oneQtyPrice: p.price,
              })
            );
          }
        }}
      >
        Add to Cart
      </button>
      {/* ADD TO CART BUTTON ENDS */}

      {/* ADD TO WISHLIST BUTTON STARTS */}
      <button
        className={`w-full py-2 border border-black rounded-full text-black cursor-pointer font-medium text-lg transition-transform active:scale-95 hover:opacity-75 mb-10 flex justify-center items-center gap-2`}
      >
        Wishlist
        <IoMdHeartEmpty size={20} />
      </button>
      {/* ADD TO WISHLIST BUTTON ENDS */}

      {/* product details starts*/}

      <div className="text-lg font-bold mb-4">Product Details</div>
      <div className="text-md mb-5" id="desc">
        <ReactMarkdown>{p?.description}</ReactMarkdown>
      </div>
      {/* product details ends*/}
    </>
  );
};

export default ProductDetail;
