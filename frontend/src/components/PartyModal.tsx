import { PartyModalProps } from "@/types/PartyModalProps";
import { X } from "lucide-react";

export default function PartyModal({
  onClose,
  author,
  budget,
  description,
  title,
  services,
}: PartyModalProps) {
  return (
    <section
      className={`fixed inset-0 bg-black bg-opacity-75 backdrop-blur-md flex flex-col justify-center items-center`}
    >
      <main
        className={`bg-black overflow-hidden select-text flex flex-col rounded-2xl border border-red-600 
        w-[500px] h-[500px] max-sm:w-[375px] max-sm:h-[425px] max-[425px]:w-[250px] max-[425px]:h-[375px]`}
      >
        <header
          className={`w-full h-1/6 bg-red-600 flex items-center justify-between px-4`}
        >
          <h1 className="font-semibold">{title}</h1>
          <X onClick={onClose} className={`cursor-pointer w-8 h-8`} />
        </header>
        <section
          className={`w-full h-full flex flex-col items-center p-4 gap-4`}
        >
          <div className="w-full flex items-center justify-between max-[425px]:text-sm">
            <span>Author: {author}</span>
            <span>Budget: {budget}</span>
          </div>
          <span className="w-full text-sm font-light max-[425px]:text-xs text-justify">
            {description}
          </span>
          <span className="flex flex-col items-center gap-2">
            <p className="underline mb-2">SERVICES</p>
          </span>
        </section>
      </main>
    </section>
  );
}
