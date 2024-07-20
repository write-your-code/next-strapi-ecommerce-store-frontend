import { removeFromCart, updateCart } from "@/store/cartSlice";
import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleChange = (e, key) => {
    let payload = {
      key,
      value: key === "selectedSize" ? e.target.value : parseInt(e.target.value),
      id: item.id,
    };
    dispatch(updateCart(payload));
    // console.log("change called", key);
  };
  return (
    // <div className="flex items-center justify-between gap-4 md:gap-10 py-4 border-b-[1px]">
    //   {/* IMAGE START */}
    //   <div className="w-[60px] shrink-0 aspect-square md:w-[100px] object-cover">
    //     <Image
    //       src={item?.thumbnail.data.attributes.url}
    //       alt={item.name}
    //       width={320}
    //       height={320}
    //       // fill={true}
    //     />
    //   </div>
    //   {/* IMAGE END */}

    //   {/* CONTENT START */}
    //   <div className="flex flex-col flex-1 max-w-[200px] gap-1">
    //     <div className="text-lg font-bold text-black/[0.7] leading-tight">
    //       {item?.name}
    //     </div>
    //     <div className="text-[1rem] font-semibold text-black/[0.5] leading-tight mb-1">
    //       {item?.subtitle}
    //     </div>
    //     {/* SIZE START */}
    //     <div className="flex gap-2 items-center">
    //       <div className="text-black/[0.5] font-semibold hidden md:block">
    //         Size :
    //       </div>
    //       <select
    //         name=""
    //         id=""
    //         className="max-w-[120px] text-xs p-2 border border-gray-300 rounded-md"
    //         onChange={(e) => handleChange(e, "selectedSize")}
    //       >
    //         {item?.size?.data?.map((s, i) => (
    //           <option
    //             value={s.size}
    //             selected={item.selectedSize === s.size}
    //             className=" text-black/[0.5]"
    //           >
    //             {s.size}
    //           </option>
    //         ))}
    //       </select>
    //     </div>
    //     {/* SIZE END */}
    //     {/* qty start */}
    //     <div className="flex gap-2 items-center">
    //       <div className="text-black/[0.5] font-semibold hidden md:block">
    //         Qty :
    //       </div>
    //       <select
    //         name=""
    //         id=""
    //         className="text-xs p-2 border border-gray-300 rounded-md"
    //         onChange={(e) => handleChange(e, "quantity")}
    //       >
    //         {Array.from({ length: 10 }, (_, i) => i + 1).map((n, i) => (
    //           <option
    //             key={n}
    //             value={n}
    //             selected={item.quantity === n}
    //             className="text-black/[0.5]"
    //           >
    //             {n}
    //           </option>
    //         ))}
    //         {/* <option value={item.quantity}>{item.quantity}</option> */}
    //       </select>
    //     </div>
    //     {/* qty end */}
    //     <div className="text-right">
    //       <button
    //         className="text-gray-100 rounded p-1 underline italic flex gap-1 items-center bg-red-500"
    //         onClick={() => dispatch(removeFromCart({ id: item.id }))}
    //       >
    //         <span className="text-xs">Remove item</span>
    //         <RiDeleteBin6Line
    //           className="cursor-pointer"
    //           // onClick={() => dispatch(removeFromCart({ id: item.id }))}
    //         />
    //       </button>
    //     </div>
    //   </div>
    //   {/* CONTENT END */}

    //   {/* price start */}
    //   <div className="flex-1 flex justify-end font-semibold">
    //     ${item?.price}
    //   </div>
    //   {/* price end */}
    //   {/* delete btn start */}
    //   {/* <div className="">
    //     <RiDeleteBin6Line
    //       className="cursor-pointer"
    //       onClick={() => dispatch(removeFromCart({ id: item.id }))}
    //     />
    //   </div> */}
    //   {/* delete btn end */}
    // </div>
    <div className="flex items-center gap-4 md:gap-5 py-2 border-b-[1px]">
      {/* IMAGE START */}
      <div className="w-[60px] shrink-0 aspect-square md:w-[100px] object-cover">
        <Image
          src={item?.thumbnail.data.attributes.url}
          alt={item.name}
          width={320}
          height={320}
          // fill={true}
        />
      </div>
      {/* IMAGE END */}

      {/* CONTENT START */}
      <div className="flex flex-col flex-1 gap-1">
        <div className="flex justify-between">
          <div className="max-w-[120px] sm:max-w-2xl">
            <div className="text-sm font-bold text-black/[0.7] leading-tight">
              {item?.name}
            </div>
            <div className="text-xs font-semibold text-black/[0.5] leading-tight mb-1 capitalize">
              {item?.subtitle}
            </div>
          </div>
          <div className="font-semibold text-sm">${item?.price}</div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* SIZE START */}
            <div className="flex items-center gap-1">
              <span className="text-sm text-black/[0.5] font-semibold hidden md:block">
                Size :
              </span>
              <select
                name=""
                id=""
                className="max-w-[100px] text-xs p-1 border border-gray-300 rounded-md"
                onChange={(e) => handleChange(e, "selectedSize")}
              >
                {item?.size?.data?.map((s, i) => (
                  <option
                    value={s.size}
                    selected={item.selectedSize === s.size}
                    className=""
                  >
                    {s.size}
                  </option>
                ))}
              </select>
            </div>
            {/* SIZE END */}
            {/* qty start */}
            <div className="flex gap-1 items-center">
              <div className="text-sm text-black/[0.5] font-semibold hidden md:block">
                Qty :
              </div>
              <select
                name=""
                id=""
                className="text-xs p-1 border border-gray-300 rounded-md"
                onChange={(e) => handleChange(e, "quantity")}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((n, i) => (
                  <option
                    key={n}
                    value={n}
                    selected={item.quantity === n}
                    className=""
                  >
                    {n}
                  </option>
                ))}
                {/* <option value={item.quantity}>{item.quantity}</option> */}
              </select>
            </div>
            {/* qty end */}
          </div>
          {/* Delete btn start */}
          <div className="">
            <RiDeleteBin6Line
              className="cursor-pointer"
              onClick={() => dispatch(removeFromCart({ id: item.id }))}
            />
          </div>
          {/* Delete btn end*/}
        </div>
      </div>
      {/* CONTENT END */}
    </div>
  );
};

export default CartItem;
