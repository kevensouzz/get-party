import Link from "next/link";

export default function Title() {
  return (
    <Link href={"/"}>
      <h1
        className={`text-3xl flex items-center w-min font-medium tracking-wide max-sm:pb-1 max-[320px]:text-2xl`}
      >
        <span className={`text-4xl text-red-600 max-[320px]:text-3xl`}>G</span>
        et
        <span className={`text-4xl text-red-600 ml-1 max-[320px]:text-3xl`}>
          P
        </span>
        arty
      </h1>
    </Link>
  );
}
