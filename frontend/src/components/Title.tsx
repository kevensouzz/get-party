import Link from "next/link";

export default function Title() {
  return (
    <Link href={"/"}>
      <h1 className={`text-3xl font-medium tracking-wide`}>
        <span className={`text-4xl text-red-600`}>P</span>arty
        <span className={`text-4xl text-red-600 ml-1`}>S</span>ervices
      </h1>
    </Link>
  );
}
