"use client";
import Link from "next/link";
import { useState } from "react";
import NavModal from "./NavModal";
import { AlignJustify } from "lucide-react";

export default function Nav() {
  const [menu, setMenu] = useState(false);

  const abrirFechar = () => {
    setMenu(!menu);
  };
  return (
    <nav
      className={`flex items-center justify-between h-full w-1/4 text-xl max-xl:w-1/3 max-lg:w-1/2 max-md:text-base max-sm:w-min`}
    >
      <span
        className={`flex items-center justify-between w-full max-sm:hidden`}
      >
        <Link href={"/"}>Home</Link>
        <Link href={"/sign-in"}>Services</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </span>

      <span
        className={`sm:hidden w-min h-min flex items-center justify-end cursor-pointer`}
        onClick={abrirFechar}
      >
        {menu ? <NavModal /> : <AlignJustify />}
      </span>
    </nav>
  );
}
