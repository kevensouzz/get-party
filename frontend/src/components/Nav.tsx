"use client";

import { List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menu, setMenu] = useState(false);

  const abrirFechar = () => {
    setMenu(!menu);
  };
  return (
    <nav
      className={`flex items-center justify-between w-1/4 text-xl max-xl:w-1/3 max-lg:w-1/2 max-md:text-base max-sm:w-min`}
    >
      <span
        className={`flex items-center justify-between w-full max-sm:hidden`}
      >
        <Link
          href={"/"}
          className={`transition-all duration-200 ease-linear hover:text-red-600`}
        >
          Home
        </Link>
        <Link
          href={"/services"}
          className={`transition-all duration-200 ease-linear hover:text-red-600`}
        >
          Services
        </Link>
        <Link
          href={"/about"}
          className={`transition-all duration-200 ease-linear hover:text-red-600`}
        >
          About
        </Link>
        <Link
          href={"/contact"}
          className={`transition-all duration-200 ease-linear hover:text-red-600`}
        >
          Contact
        </Link>
      </span>

      <span
        className={`flex items-center justify-centerl sm:hidden cursor-pointer transition-all duration-200 ease-linear hover:text-red-600`}
        onClick={abrirFechar}
      >
        {menu ? <X size={32} /> : <List size={32} />}
      </span>
    </nav>
  );
}
