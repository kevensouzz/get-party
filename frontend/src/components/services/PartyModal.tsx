import { PartyModalProps } from "@/type/PartyModalProps";
import {
  ChevronDown,
  DollarSign,
  Edit,
  Key,
  PartyPopper,
  User,
  X,
} from "lucide-react";
import PartyService from "./PartyService";

export default function PartyModal({
  onClose,
  author,
  budget,
  title,
  services,
  _id,
}: PartyModalProps) {
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
          <span className="font-semibold flex items-center justify-center gap-1">
            {title}
            <PartyPopper size={16} />
          </span>
          <X onClick={onClose} className={`cursor-pointer w-8 h-8`} />
        </header>
        <section
          className={`w-full h-full flex flex-col items-center p-4 gap-4 max-sm:p-2 overflow-hidden`}
        >
          <div className="w-full flex items-center justify-between max-[425px]:text-sm">
            <div className="flex items-center justify-start gap-4 h-full w-full">
              <span className="flex items-center justify-center">
                {author}
                <User className="w-4 h-4" />
              </span>
              <span className="flex items-center justify-center">
                {budget}
                <DollarSign className="w-4 h-4" />
              </span>
            </div>
            <Edit className="cursor-pointer" />
          </div>
          <span className="w-full flex items-center justify-center gap-1 text-xs font-light">
            {_id}
            <Key className="mb-1" size={12} />
          </span>
          <div className="w-full h-full flex flex-col items-center">
            <span className="font-medium flex select-none mb-2">
              SERVICES
              <ChevronDown />
            </span>
            {services && services.length > 0 ? (
              <div className="w-full space-y-4 h-full overflow-auto pt-4 pb-20">
                {services.map((service, index) => (
                  <PartyService
                    key={index}
                    name={service.name}
                    price={service.price}
                    _id={service._id}
                  />
                ))}
              </div>
            ) : (
              <span
                className="w-full h-full flex items-center justify-center text-xl font-semibold uppercase select-none
                max-[425px]:text-base max-[320px]:text-xs"
              >
                there are no services here!
              </span>
            )}
          </div>
        </section>
      </main>
    </section>
  );
}
