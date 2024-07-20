import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";

const MobileFilters = ({
  searchParams,
  categories,
  handleChange,
  handleInputChange,
  resetFiletrs,
  setMobileFilter,
}) => {
  return (
    <div className="flex items-center justify-center fixed top-0 right-0 bg-black/[0.8] z-40 p-3 flex-wrap gap-2 ">
      <div className="flex items-center gap-3 flex-wrap justify-center">
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
            defaultValue={searchParams.category}
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
      <div className="flex items-center gap-3 flex-wrap justify-center">
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
          className="flex items-center justify-center rounded-2xl bg-gray-700 px-5 py-2.5 text-center text-xs sm:text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Reset
        </button>
        <button
          className="bg-red-500 text-white rounded-2xl p-2 text-xs"
          onClick={(e) => setMobileFilter((prev) => !prev)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MobileFilters;
