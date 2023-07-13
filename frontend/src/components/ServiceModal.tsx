import { ServiceModalProps } from "@/types/ServiceModalProps";
import { DollarSign, Key, Layers, Pencil, X } from "lucide-react";

export default function ServiceModal({
  name,
  price,
  _id,
  onClose,
}: ServiceModalProps) {
  return (
    <section
      className={`fixed inset-0 bg-black text-white bg-opacity-75 backdrop-blur-md flex flex-col justify-center items-center`}
    >
      <main
        className={`bg-black overflow-hidden flex flex-col rounded-2xl border border-red-600 select-text
        w-2/6 h-1/5 max-sm:w-3/6 max-[425px]:w-4/6`}
      >
        <header
          className={`w-full h-2/6 bg-red-600 flex items-center justify-between px-4 max-sm:px-2`}
        >
          <span className="font-semibold flex items-center justify-center gap-1">
            {name}
            <Layers size={16} />
          </span>
          <X onClick={onClose} className={`cursor-pointer w-8 h-8`} />
        </header>
        <section
          className={`w-full h-full flex flex-col p-4 gap-4 max-sm:p-2 overflow-hidden font-normal`}
        >
          <div className="w-full flex items-center justify-between max-[425px]:text-sm">
            <span className="flex items-center justify-center gap-1">
              {name}
              <Pencil size={16} />
            </span>
            <span className="flex items-center justify-center">
              {price}
              <DollarSign size={16} />
            </span>
          </div>
          <span className="w-full flex items-center justify-center gap-1 text-xs font-light">
            {_id}
            <Key size={12} />
          </span>
        </section>
      </main>
    </section>
  );
}
