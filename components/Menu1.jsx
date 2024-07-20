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
    subMenuData: [
      {
        id: 1,
        name: "contagory1",
        subMenu: true,
        subMenuData: [
          { id: 1, name: "contagory inside category", url: "/" },
          {
            id: 2,
            name: "cotgery2inside category",
            url: "/",
            subMenu: true,
            subMenuData: [
              {
                id: 1,
                name: "3rd list",
                subMenu: true,
                subMenuData: [
                  {
                    id: 2,
                    name: "4th list",
                    subMenu: true,
                    subMenuData: [{ id: 3, name: "5th list" }],
                  },
                ],
              },
            ],
          },
        ],
      },
      { id: 2, name: "cotgery2" },
    ],
  },
  {
    id: 4,
    name: "Contact",
    url: "/contact",
    subMenu: true,
    subMenuData: [
      { id: 1, name: "contact1" },
      { id: 2, name: "contact2" },
    ],
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
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((menu, i) => (
        <MenuItems
          item={menu}
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          depthLevel={depthLevel}
          // subMenuData={subMenuData}
          categories={categories}
          key={i}
        />
      ))}
    </ul>
  );
};
export default Menu;
