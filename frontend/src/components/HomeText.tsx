import Link from "next/link";

interface props {
  firstText: string;
  secondText: string;
  link: string;
}

export default function HomeText(prop: props) {
  return (
    <section
      className={`w-full h-1/2 flex flex-col justify-center items-center text-3xl max-xl:text-2xl max-lg:text-xl max-lg:p-3 max-lg:items-start max-md:text-lg max-sm:items-center max-[425px]:text-sm max-[320px]:text-xs`}
    >
      {prop.firstText}
      <span>
        <Link href={prop.link} className={`text-red-600 pr-2`}>
          Clique aqui
        </Link>
        {prop.secondText}
      </span>
    </section>
  );
}
