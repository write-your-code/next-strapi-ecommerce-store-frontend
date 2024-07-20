import Link from "next/link";
import React from "react";
import MenuItems from "./MenuItems";

const Dropdown = ({ dropdown, subMenuData, depthLevel, setMobileMenu }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <>
      {dropdown && (
        <ul
          className={`flex flex-col flex-nowrap bg-white md:absolute right-0 px-1 my-4 text-black/[0.8] md:shadow-lg min-w-[250px] rounded-md pb-3 list-disc ${
            depthLevel > 1 ? " left-full top-0" : "top-6"
          }`}
        >
          {subMenuData?.map((submenu, i) =>
            submenu.subMenu ? (
              <li
                className="h-auto flex justify-between items-center gap-3 rounded-md hover:bg-black/[0.03] w-full"
                key={submenu.id}
              >
                {/* {submenu.name} */}
                <MenuItems
                  item={submenu}
                  depthLevel={depthLevel}
                  key={submenu.id}
                />
              </li>
            ) : (
              <li
                className="h-auto flex justify-between items-center rounded-md hover:bg-black/[0.03] w-full px-4 py-2"
                key={submenu.id}
                onClick={() => setMobileMenu((prev) => !prev)}
              >
                <Link
                  href={`/category/${submenu?.attributes?.slug}`}
                  className="flex justify-between items-center w-full capitalize center"
                >
                  {submenu?.name || submenu?.attributes?.name}
                  <span className="text-sm">
                    {submenu?.subMenuData?.length ||
                      submenu?.attributes?.products?.data?.length}
                  </span>
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
};

export default Dropdown;
