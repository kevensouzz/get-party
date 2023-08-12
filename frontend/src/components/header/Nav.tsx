"use client";
import { useState } from "react";
import NavModal from "./NavModal";
// import { AlignJustify } from "lucide-react";
const { AlignJustify } = require("lucide-react");
import NavLink from "./NavLink";

export default function Nav() {
  const [menu, setMenu] = useState(false);

  return (
    <nav
      className={`flex items-center justify-between h-full text-xl w-1/2 max-lg:w-[60%] max-md:text-base max-sm:w-min`}
    >
      <span
        className={`flex items-center justify-between w-full max-sm:hidden`}
      >
        <NavLink children={"Home"} href={"/"} />
        <NavLink children={"Services"} href={"/services"} />
        <NavLink children={"About"} href={"/about"} />
        <NavLink children={"Contact"} href={"/contact"} />
        <NavLink children={"Account"} href={"/account"} />
      </span>

      <button
        className={`sm:hidden w-min h-min flex items-center justify-end cursor-pointer`}
        onClick={() => setMenu(!menu)}
      >
        <AlignJustify />
      </button>

      {menu && <NavModal onClose={() => setMenu(!menu)} />}
    </nav>
  );
}
