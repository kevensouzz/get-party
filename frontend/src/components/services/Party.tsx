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
        <header className={`w-full h-[10%] flex items-center justify-end pr-4`}>
          <span
            className={`flex items-center justify-center gap-2 cursor-pointer sm:hover:text-black
          transition-all ease-linear duration-150`}
          >
            <p className="text-xl font-medium">EDIT PARTY</p>
            <Edit className="cursor-pointer mb-[2px]" />
          </span>
        </header>
        <div
          className={`w-full h-[90%] flex flex-col items-center justify-evenly py-8 select-text`}
        >
          <span className={`flex gap-1 items-center text-2xl font-semibold`}>
            {title}
            <PartyPopper />
          </span>
          <span className={`flex items-center gap-1 text-2xl font-semibold`}>
            {author}
            <User />
          </span>
          <span className={`flex gap-1 items-center text-2xl font-semibold`}>
            {budget}
            <DollarSign />
          </span>
          <span className={`flex items-center gap-1 font-light`}>
            {_id}
            <KeyRound size={16} />
          </span>
        </div>
        <footer className={`w-full h-[10%] flex items-center justify-end pr-4`}>
          <span
            className={`flex items-center justify-center gap-2 cursor-pointer sm:hover:text-black
          transition-all ease-linear duration-150`}
          >
            <p className="text-xl font-medium">DELETE PARTY</p>
            <Trash2 className="cursor-pointer mb-[2px]" />
          </span>
        </footer>
      </div>
    </section>
  );
}
