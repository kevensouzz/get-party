import { ArrowUpRight, DollarSign, User } from "lucide-react";
import Link from "next/link";

type PartyApiTypeProps = {
  title: string;
  description: string;
  author: string;
  budget: number;
  image: string;
  services?: [name: string, description: string, price: Number, image: string];
};

export default function Party({
  title,
  description,
  author,
  budget,
  image,
}: PartyApiTypeProps) {
  return (
    <section
      className={`
    w-[980px] h-[420px] bg-black bg-opacity-25 border border-red-600 rounded-md overflow-hidden flex my-8
    max-sm:flex-col max-lg:w-[720px] max-lg:h-[380px] max-md:w-[620px]
    max-md:h-[300px] max-sm:w-5/6 max-sm:h-[70vh]
    `}
    >
      <div
        className={`h-full w-1/2 flex items-center justify-center p-8 max-sm:w-full max-sm:h-1/2`}
      >
        <img
          className="w-full h-full rounded-xl"
          src={image}
          alt={description}
        />
      </div>

      <div
        className={`h-full w-1/2 flex flex-col items-center justify-around bg-red-600 p-4 max-sm:w-full max-sm:h-1/2 max-sm:p-2 max-[425px]:p-0 max-[425px]:px-2`}
      >
        <h1 className="font-semibold uppercase text-lg">{title}</h1>
        <p className="text-sm px-8 text-justify max-md:px-0 max-[375px]:text-xs">
          {description}
        </p>
        <div className="w-full h-[10%] flex items-center justify-around text-sm font-light capitalize">
          <span className="flex gap-1 items-center justify-between">
            <p>by: {author}</p>
            <User size={14} />
          </span>
          <span className="flex gap-1 items-center justify-between">
            <p>budget: {budget}</p>
            <DollarSign size={14} />
          </span>
        </div>

        <Link
          className="capitalize hover:text-zinc-950 font-medium ransition-all duration-200 ease-linear flex items-center justify-between"
          href={""}
        >
          learn more
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
