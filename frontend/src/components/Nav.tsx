import Link from "next/link";

export default function Nav() {
  return (
    <nav
      className={`flex items-center justify-between w-1/4 text-xl max-xl:w-1/3 max-lg:w-1/2 max-md:text-base max-sm:hidden`}
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
    </nav>
  );
}
