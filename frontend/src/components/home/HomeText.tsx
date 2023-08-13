import Link from "next/link";

export default function HomeText({
  firstText,
  link,
  secondText,
}: {
  firstText: string;
  secondText: string;
  link: string;
}) {
  return (
    <section
      className={`w-full h-1/2 flex flex-col justify-center items-center text-3xl max-xl:text-2xl max-lg:text-xl max-lg:p-3 max-lg:items-start max-md:text-lg max-sm:items-center max-[425px]:text-sm max-[320px]:text-xs`}
    >
      {firstText}
      <span>
        <Link href={link} className={`text-red-600 pr-2 hover:underline`}>
          Click here
        </Link>
        {secondText}
      </span>
    </section>
  );
}
