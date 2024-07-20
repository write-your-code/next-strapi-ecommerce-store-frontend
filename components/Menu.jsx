import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import MenuItems from "./MenuItems";
const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  {
    id: 3,
    name: "Categories",
    subMenu: true,
  },
  {
    id: 4,
    name: "Contact",
    url: "/contact",
    subMenu: false,
  },
];

// const subMenuData = [
//   { id: 1, name: "Jordan", doc_count: 11 },
//   { id: 2, name: "Sneakers", doc_count: 8 },
//   { id: 3, name: "Running shoes", doc_count: 64 },
//   { id: 4, name: "Football shoes", doc_count: 107 },
// ];

const Menu = ({ showCatMenu, setShowCatMenu, categories }) => {
  let depthLevel = 0;
  return (
    <ul
      className="hidden md:flex items-center gap-8 font-medium text-black"
      key={crypto.randomUUID()}
    >
      {data.map((menu, i) =>
        !!menu?.subMenu ? (
          <li
            key={menu.id}
            className="cursor-pointer flex items-center gap-2 relative"
            onMouseEnter={() => setShowCatMenu(true)}
            onMouseLeave={() => setShowCatMenu(false)}
          >
            {menu.name}
            <BsChevronDown size={14} />

            {showCatMenu && (
              <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                {categories?.map(({ attributes: c, id }) => {
                  return (
                    <Link
                      key={id}
                      href={`/category?category=${c.slug}`}
                      onClick={() => setShowCatMenu(false)}
                    >
                      <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                        {c.name}
                        <span className="opacity-50 text-sm">
                          {`(${c.products.data.length})`}
                        </span>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            )}
          </li>
        ) : (
          <li className="cursor-pointer" key={menu.id}>
            <Link href={menu?.url}>{menu.name}</Link>
          </li>
        )
      )}
    </ul>
  );
};
export default Menu;
