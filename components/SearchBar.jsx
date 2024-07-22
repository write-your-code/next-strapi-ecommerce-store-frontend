"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({ setMobileMenu, setSearchMenu }) => {
  const router = useRouter();
  const pathName = usePathname();
  console.log("pathname,", pathName);
  const handleSearch = (formData) => {
    // e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    const name = formData.get("name");

    if (name) {
      router.push(`/category?query=${name}`);
      setMobileMenu && setMobileMenu((prev) => !prev);
      setSearchMenu && setSearchMenu((prev) => !prev);
    }
  };

  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-lg "
      action={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        required
        disabled={pathName === "/category"}
        className="flex-1 bg-transparent text-gray-500 outline-none px-2"
      />
      <button className="cursor-pointer">
        {/* <Image src="/search.png" alt="" width={16} height={16} /> */}
        <BiSearch className="w-4 h-4" />
      </button>
    </form>
  );
};

export default SearchBar;
