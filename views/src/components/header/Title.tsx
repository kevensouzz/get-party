import Link from "next/link";

export default function Title() {
  return (
    <Link
      href={"/"}
      className={`group text-3xl flex items-center w-min font-medium tracking-wide max-sm:pb-1 max-[320px]:text-2xl
      sm:hover:text-red-600 transition-all ease-linear duration-200`}
    >
      <span
        className={`text-4xl text-red-600 max-[320px]:text-3xl sm:group-hover:text-white transition-all ease-linear duration-200`}
      >
        G
      </span>
      et
      <span
        className={`text-4xl text-red-600 ml-1 max-[320px]:text-3xl sm:group-hover:text-white transition-all ease-linear duration-200`}
      >
        P
      </span>
      arty
    </Link>
  );
}
