// import { X } from "lucide-react";
const { X } = require ("lucide-react");
import NavLink from "./NavLink";

export default function NavModal({ onClose }: { onClose: () => void }) {
  return (
    <section
      className={`sm:hidden fixed inset-0 bg-black bg-opacity-75 backdrop-blur-md flex flex-col justify-center items-center cursor-default px-5 max-[320px]:px-2`}
    >
      <header className={`w-full h-[14vh] flex items-center justify-end`}>
        <button onClick={onClose}>
          <X className={`w-min h-min`} />
        </button>
      </header>
      <main
        className={`w-full h-full flex flex-col justify-center items-center text-2xl pb-10 space-y-10`}
      >
        <NavLink href={"/"} children={"Home"} />
        <NavLink href={"/services"} children={"Services"} />
        <NavLink href={"/about"} children={"About"} />
        <NavLink href={"/contact"} children={"Contact"} />
        <NavLink href={"/account"} children={"Account"} />
      </main>
    </section>
  );
}
