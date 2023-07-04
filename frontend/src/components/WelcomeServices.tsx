import Link from "next/link";

export default function WelcomeServices() {
  return (
    <section className="bg-neutral-950 w-full h-[88vh] flex flex-col items-center justify-center">
      <div className="w-full h-full"></div>
      <div className="text-red-500 w-full flex items-center justify-center h-[7.5vh]">
        <Link
          className="flex items-center justify-center text-center h-full text-[10px] min-[425px]:text-xs
        font-mono uppercase max-md:w-4/6 max-sm:w-5/6 max-[425px]:w-full max-[425px]:mx-2 max-[320px]:mx-0
        hover:text-red-600 transition-all ease-linear duration-200"
          href="#parties"
        >
          see our services shared by customers themselves followed by their
          appropriate prices and ratings!
        </Link>
      </div>
    </section>
  );
}
