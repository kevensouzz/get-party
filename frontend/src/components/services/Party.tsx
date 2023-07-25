import {
  DollarSign,
  Edit,
  KeyRound,
  PartyPopper,
  Trash2,
  User,
} from "lucide-react";
import { PartyApiTypeProps } from "@/type/PartyApiTypeProps";

export default function Party({
  title,
  author,
  budget,
  image,
  _id,
}: PartyApiTypeProps) {
  return (
    <section
      className={`
    w-[980px] h-[420px] bg-black bg-opacity-25 border border-red-600 rounded-md overflow-hidden flex my-8
    max-sm:flex-col max-lg:w-[720px] max-lg:h-[380px] max-md:w-[620px]
    max-md:h-[300px] max-sm:w-[375px] max-sm:h-[80vh] max-[400px]:w-[300px] max-[320px]:w-[260px]
    `}
    >
      <div
        className={`h-full w-1/2 flex items-center justify-center p-8 max-sm:w-full max-sm:h-1/2 max-sm:p-4`}
      >
        <img className="w-full h-full rounded-xl" src={image} alt={image} />
      </div>

      <div
        className={`h-full w-1/2 flex flex-col bg-red-600 max-sm:w-full max-sm:h-1/2`}
      >
        <header
          className={`w-full h-1/6 flex items-center justify-between px-4`}
        >
          <Trash2 className="cursor-pointer sm:hover:text-black transition-all ease-linear duration-150" />
          <Edit className="cursor-pointer sm:hover:text-black transition-all ease-linear duration-150" />
        </header>
        <div
          className={`w-full h-4/6 flex flex-col items-center justify-evenly py-12 select-text`}
        >
          <span
            className={`flex gap-1 items-center text-2xl font-medium max-[400px]:text-lg max-md:text-xl`}
          >
            {title}
            <PartyPopper className="max-sm:w-4 max-sm:h-4 sm:h-5 sm:w-5" />
          </span>
          <span
            className={`flex items-center gap-1 text-xl font-medium max-[400px]:text-base max-md:text-lg`}
          >
            {author}
            <User className="max-sm:w-4 max-sm:h-4 sm:h-5 sm:w-5" />
          </span>
          <span
            className={`flex gap-1 items-center text-lg font-medium max-[400px]:text-sm max-md:text-base`}
          >
            {budget}
            <DollarSign className="max-sm:w-4 max-sm:h-4 sm:h-5 sm:w-5" />
          </span>
        </div>
        <footer
          className={`flex items-center justify-center gap-1 font-light h-1/6 w-full`}
        >
          {_id}
          <KeyRound className="max-sm:w-3 max-sm:h-3 sm:h-4 sm:w-4" />
        </footer>
      </div>
    </section>
  );
}
