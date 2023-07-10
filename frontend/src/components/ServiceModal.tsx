import { ServiceModalProps } from "@/types/ServiceModalProps";
import { X } from "lucide-react";

export default function ServiceModal({
  name,
  price,
  _id,
  description,
  onClose,
}: ServiceModalProps) {
  return (
    <section
      className={`fixed inset-0 bg-black text-white bg-opacity-75 backdrop-blur-md flex flex-col justify-center items-center`}
    >
      <main
        className={`bg-black overflow-hidden flex flex-col rounded-2xl border border-red-600 select-text
        w-5/6 h-5/6 max-sm:h-4/6`}
      >
        <header
          className={`w-full h-1/6 bg-red-600 flex items-center justify-between px-4 max-sm:px-2`}
        >
          <h1 className="font-semibold">{name}</h1>
          <X onClick={onClose} className={`cursor-pointer w-8 h-8`} />
        </header>
        <section
          className={`w-full h-full flex flex-col items-center justify-around p-4 gap-4 max-sm:p-2 overflow-hidden font-normal`}
        >
          <div className="w-full flex items-center justify-between max-[425px]:text-sm">
            <span>Name: {name}</span>
            <span>Price: {price}</span>
          </div>
          <span className="w-full flex items-center justify-center text-xs font-light">
            {_id}
          </span>
          <span className="w-full text-sm font-light max-[425px]:text-xs text-center px-8 max-md:px-0">
            {description}
          </span>
        </section>
      </main>
    </section>
  );
}
