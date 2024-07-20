// import Link from "next/link";
// import React from "react";
// import { BsChevronDown } from "react-icons/bs";
// const data = [
//   { id: 1, name: "Home mob", url: "/" },
//   { id: 2, name: "About", url: "/about" },
//   { id: 3, name: "Categories", subMenu: true },
//   { id: 4, name: "Contact", url: "/contact" },
// ];

// const subMenuData = [
//   { id: 1, name: "Jordan", doc_count: 11 },
//   { id: 2, name: "Sneakers", doc_count: 8 },
//   { id: 3, name: "Running shoes", doc_count: 64 },
//   { id: 4, name: "Football shoes", doc_count: 107 },
// ];

// const MobileNavbar = ({ showCatMenu, setShowCatMenu }) => {
//   return (
//     <ul className="sm:hidden flex flex-col absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white font-medium text-black">
//       {data.map((item) =>
//         item?.subMenu ? (
//           <li key={item.id} className="relative px-4 py-4 border-b">
//             <div
//               className="flex items-center justify-between cursor-pointer gap-2"
//               onClick={() => setShowCatMenu(!showCatMenu)}
//             >
//               <span>{item.name}</span>
//               <BsChevronDown
//                 size={14}
//                 className={`${
//                   showCatMenu
//                     ? "rotate-180 transition-all duration-100 ease-in-out"
//                     : "transition-all ease-in-out"
//                 }`}
//               />
//             </div>
//             {showCatMenu && (
//               <ul className="-mx-4 pl-3 mt-2 bg-black/[0.05] rounded">
//                 {subMenuData.map((submenu) => (
//                   <Link key={submenu.id} href="/" className="mb-4">
//                     <li className="h-9 flex justify-between items-center gap-3 px-2 rounded-md hover:bg-black/[0.03]">
//                       {submenu.name}
//                       <span className="text-sm">{submenu.doc_count}</span>
//                     </li>
//                   </Link>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ) : (
//           <li
//             key={item.id}
//             className="relative px-4 py-4 border-b"
//             onClick={() => item?.subMenu && setShowCatMenu(!showCatMenu)}
//           >
//             <Link href={`${item?.url}`} className="flex items-center gap-2">
//               {item.name}
//             </Link>
//           </li>
//         )
//       )}
//     </ul>
//   );
// };
import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import MenuItems from "./MenuItems";
import SearchBar from "./SearchBar";
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

const MobileNavbar = ({
  showCatMenu,
  setShowCatMenu,
  setMobileMenu,
  categories,
}) => {
  let depthLevel = 0;

  let menuItem = data.filter((item) => {
    if (item.name === "Categories") item.subMenuData = categories;
    return;
  });
  console.log({ menuItem, categories });
  // menuItem.subMenuData = categories;
  console.log({ data });
  return (
    <ul className="sm:hidden flex flex-col absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white font-medium text-black">
      <li className="py-2 px-4">
        <SearchBar setMobileMenu={setMobileMenu}/>
      </li>
      {data.map((menu, i) => (
        <MenuItems
          item={menu}
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          setMobileMenu={setMobileMenu}
          depthLevel={depthLevel}
          subMenuData={menu.subMenuData}
          // subMenuData={categories}
          key={i}
        />
      ))}
    </ul>
  );
};

export default MobileNavbar;
