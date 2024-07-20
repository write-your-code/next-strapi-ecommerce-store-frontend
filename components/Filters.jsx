"use client";

import { fetchData } from "@/store/utils/api";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import MobileFilters from "./MobileFilters";
import { BiFilter } from "react-icons/bi";

const Filters = () => {
  const path = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  console.log("searcch params are:", searchParams.get("category"));
  const [categories, setCategories] = useState(
    JSON.parse(localStorage.getItem("categories"))
  );
  const [price, setPrice] = useState(searchParams.get("min"));
  const [mobileFilter, setMobileFilter] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newParams = new URLSearchParams(searchParams);
    newParams.set(name, value);
    // newParams.set("page", 1);
    newParams.delete("page");
    if (!value) {
      newParams.delete(name);
    }

    router.replace(`?${newParams.toString()}`);
  };

  // For debouncing implemented search filter seperately
  const handleInputChange = useDebouncedCallback((e) => {
    handleChange(e);
  }, 300);

  const resetFiletrs = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("page");
    newParams.delete("sort");
    newParams.delete("category");
    newParams.delete("min");
    newParams.delete("max");
    newParams.delete("query");
    router.replace(`?${newParams}`);

    // document.querySelector("#category").val('selectedIndex', 0)
    // setPrice("");

    const allSelectEl = document.getElementsByTagName("select");
    Array.from(allSelectEl).forEach((el) => (el.selectedIndex = 0));
    // to reset the query input
    document.getElementById("query").value = "";
  };

  return (
    <>
      <div className="flex justify-end  text-gray-700 font-semibold sm:hidden">
        <button
          className="flex items-center gap-1"
          onClick={() => setMobileFilter(!mobileFilter)}
        >
          <BiFilter
            className={`${
              mobileFilter ? "rotate-180" : ""
            } transition-all ease-in-out duration-100"
                `}
          />
          <span className=""> Apply Filters</span>
        </button>
      </div>
      {/* {mobileFilter && (
        <MobileFilters
          searchParams={searchParams}
          categories={categories}
          handleChange={handleChange}
          handleInputChange={handleInputChange}
          resetFiletrs={resetFiletrs}
          setMobileFilter={setMobileFilter}
        />
      )} */}
      <div
        className={`${
          mobileFilter ? "flex" : "hidden"
        } sm:flex items-center justify-between p-3 flex-wrap gap-2`}
      >
        <div className="flex items-center justify-center flex-wrap gap-2">
          <div className="flex items-center gap-3  justify-center">
            <div className="flex">
              <select
                id="sort"
                name="sort"
                className="border border-gray-300 text-xs bg-gray-100 rounded-2xl text-gray-500 font-medium p-2 px-4 hover:border-gray-500 focus:outline-gray-500 appearance-none capitalize block relative after::content-['\25BC'] after::absolute after::right-3 
           after::pointer-events-none"
                onChange={(e) => handleChange(e)}
              >
                <option>Sort by</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="price asc">Price(low to high)</option>
                <option value="price+desc">Price(high to low) </option>
              </select>
            </div>
            <div>
              <select
                id="category"
                key="category"
                name="category"
                className="p-2 rounded-2xl px-4 text-xs text-gray-500 font-medium border border-gray-300 hover:border-gray-500 focus:outline-gray-500 appearance-none capitalize"
                onChange={(e) => handleChange(e)}
                defaultValue={searchParams.get("category")}
              >
                <option value="" hidden>
                  category
                </option>
                <option value="">All</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.attributes.slug}>
                    {c.attributes.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center gap-3  justify-center">
            <select
              id="min"
              name="min"
              className="p-2 rounded-2xl text-xs px-4 text-gray-500 text- font-medium border border-gray-300 hover:border-gray-500 focus:outline-gray-500 appearance-none capitalize"
              onChange={(e) => {
                // setPrice(e.target.value);
                handleChange(e);
              }}
              // value={price}
            >
              <option value="" hidden>
                min price
              </option>
              <option value={0}>0</option>
              <option value={500}>500</option>
              <option value={1000}>1000</option>
              <option value={10000}>10000</option>
              <option value={100000}>100000</option>
            </select>

            <select
              id="sort"
              name="max"
              className="p-2 rounded-2xl text-xs px-4 text-gray-500 font-medium border border-gray-300 hover:border-gray-500 focus:outline-gray-500 appearance-none capitalize"
              onChange={(e) => handleChange(e)}
            >
              <option value="" hidden>
                max price
              </option>
              <option value={""}>All</option>
              <option value={1000}>1000</option>
              <option value={5000}>5000</option>
              <option value={10000}>10000</option>
              <option value={100000}>100000</option>
            </select>
          </div>
        </div>

        <div className="flex gap-2 justify-center">
          <input
            type="text"
            id="query"
            name="query"
            className="py-2 px-3 rounded-2xl text-xs text-gray-500 font-medium border border-gray-300 hover:border-gray-500 focus:outline-gray-500 appearance-none capitalize"
            placeholder="Search..."
            defaultValue={searchParams.get("query") ?? ""}
            // value={searchParams.get("query")}
            onChange={(e) => handleInputChange(e)}
          />
          <button
            onClick={resetFiletrs}
            className="flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-2.5 text-center text-xs sm:text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Reset
          </button>
          {/* <button
            className="bg-red-500 text-white rounded-2xl p-2 text-xs"
            onClick={(e) => setMobileFilter((prev) => !prev)}
          >
            Close
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Filters;
