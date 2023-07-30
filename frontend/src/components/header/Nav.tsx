"use client";
import { useState } from "react";
import NavModal from "./NavModal";
import { AlignJustify } from "lucide-react";
import NavLink from "./NavLink";

export default function Nav() {
  const [menu, setMenu] = useState(false);

  return (
    <nav
      className={`flex items-center justify-between h-full w-1/4 text-xl max-xl:w-1/3 max-lg:w-1/2 max-md:text-base max-sm:w-min`}
    >
      <span
        className={`flex items-center justify-between w-full max-sm:hidden`}
      >
        <NavLink children={"Home"} href={"/"} />
        <NavLink children={"Services"} href={"/services"} />
        <NavLink children={"About"} href={"/about"} />
        <NavLink children={"Contact"} href={"/contact"} />
      </span>

      <span
        className={`sm:hidden w-min h-min flex items-center justify-end cursor-pointer`}
        onClick={() => setMenu(true)}
      >
        {menu ? <NavModal /> : <AlignJustify />}
      </span>
    </nav>
  );
}
