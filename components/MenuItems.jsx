import Link from "next/link";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import Dropdown from "./Dropdown";
import { BiMinus, BiPlus } from "react-icons/bi";

const MenuItems = ({
  item,
  //   showCatMenu,
  //   setShowCatMenu,
  setMobileMenu,
  subMenuData,
  depthLevel,
  categories,
}) => {
  //   console.log(item);
  const [dropdown, setDropDown] = useState(false);
  return (
    <>
      {!!item?.subMenu ? (
        <li
          key={item.id}
          className="relative w-full border-b px-4 py-2 sm:border-none"
          // onClick={() => setDropDown(!dropdown)}
        >
          <div
            className="flex items-center w-full justify-between cursor-pointer gap-2"
            // onClick={() => setShowCatMenu(!showCatMenu)}
            onClick={() => setDropDown(!dropdown)}
          >
            <span className="capitalize">{item.name || item?.attributes?.name}</span>
            {/* {console.log(item)} */}
            <BsChevronDown
                size={14}
                className={`${
                  dropdown
                    ? "rotate-180 transition-all duration-100 ease-in-out"
                    : "transition-all ease-in-out"
                }`}
              />
          </div>
          <Dropdown
            dropdown={dropdown}
            subMenuData={item.subMenuData}
            setMobileMenu={setMobileMenu}
            // subMenuData={categories}
            depthLevel={depthLevel}
            keyId={item.id}
          />
        </li>
      ) : (
        <li
          key={item.id}
          className="relative border-b px-4 py-2 sm:border-none"
          onClick={() => item?.subMenu && setShowCatMenu(!showCatMenu)}
        >
          <Link
            href={`${item?.url}`}
            className=""
            onClick={(e) => setMobileMenu((prev) => !prev)}
          >
            {item.name || item?.attributes?.name}
            {item?.subMenuData?.length ||
              item?.attributes?.products?.data?.lemgth}
          </Link>
        </li>
      )}
    </>
  );
};

export default MenuItems;
