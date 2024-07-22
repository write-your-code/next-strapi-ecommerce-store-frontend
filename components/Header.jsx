"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import {
  BiAlarm,
  BiCart,
  BiHeart,
  BiMenuAltRight,
  BiSearch,
} from "react-icons/bi";
// import Menu from "./Menu1";
import Menu from "./Menu";
import MobileNavbar from "./MobileNavbar";
import { VscClose } from "react-icons/vsc";
import { fetchData } from "@/store/utils/api";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";

const Header = () => {
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState([]);
  const [searchMenu, setSearchMenu] = useState(false);

  const cartCount = useSelector((state) => state.cart.cartItems.length);
  const handleNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
        // console.log("last:", lastScrollY, "windows:", window.scrollY);
      } else {
        setShow("shadow-md");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbar);

    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await fetchData("/api/categories?populate=*", "no-cache");
    // console.log(data);
    setCategories(data);
    localStorage.setItem("categories", JSON.stringify(data));
  };

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex justify-between items-center z-40 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className={"flex items-center justify-between"}>
        <Link href={"/"}>
          <BiAlarm />
        </Link>
        <Menu
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          categories={categories}
        />
        {mobileMenu && (
          <MobileNavbar
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
            categories={categories}
          />
        )}
        <div className="hidden sm:block relative">
          <BiSearch
            className="w-6 h-6 cursor-pointer"
            onClick={() => setSearchMenu(!searchMenu)}
          />
          {searchMenu && (
            <div className="absolute top-full right-0">
              <SearchBar setSearchMenu={setSearchMenu} />
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          {/* icon start */}
          <div className="relative w-8 md:w-12 h-8 md:h-12 flex items-center justify-center cursor-pointer hover:bg-black/[0.05] rounded-full">
            <BiHeart className="text-[15px] md:text-[20px]" />
            <div className="absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] bg-red-600 rounded-full w-[14px] md:w-[18px] h-[14px] md:h-[18px] flex justify-center items-center">
              15
            </div>
          </div>
          {/* icon ends */}

          {/* icon start */}
          <Link href={"/cart"}>
            <div className="relative text-center w-8 md:w-12 h-8 md:h-12 flex items-center justify-center cursor-pointer hover:bg-black/[0.05] rounded-full">
              <BiCart className="text-[15px] md:text-[20px]" />
              <div className="absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] bg-red-600 rounded-full w-[14px] md:w-[18px] h-[14px] md:h-[18px]">
                {cartCount}
              </div>
            </div>
          </Link>
          {/* icon end */}

          {/* mobile icon starts */}
          <div className="w-8 md:w-12 h-8 md:h-12 md:hidden flex items-center justify-center cursor-pointer hover:bg-black/[0.05] rounded-full">
            {mobileMenu ? (
              <VscClose
                className="text-[18px] md:text-[24px]"
                onClick={() => setMobileMenu(!mobileMenu)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[18px] md:text-[24px]"
                onClick={() => setMobileMenu(!mobileMenu)}
              />
            )}
          </div>
          {/* mobile icon ends */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
