import Link from "next/link";

interface props {
  firstText: string;
  secondText: string;
  link: string;
}

export default function HomeText(prop: props) {
  return (
    <section
      className={`w-full h-1/2 flex flex-col justify-center items-center text-4xl  max-lg:text-2xl max-md:text-lg max-sm:text-sm max-[375px]:px-14`}
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
