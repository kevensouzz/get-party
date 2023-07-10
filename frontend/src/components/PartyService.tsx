import { PartyServiceProps } from "@/types/PartyServiceProps";
import { DollarSign, MoreVertical } from "lucide-react";

export default function PartyService({ name, price }: PartyServiceProps) {
  return (
    <span
      className="bg-red-600 w-full h-20 rounded-2xl flex justify-around items-center select-text font-semibold text-lg
    max-sm:text-sm max-[425px]:justify-between max-[425px]:px-4"
    >
      <p>{name}</p>
      <p className="flex items-center justify-center">
        {price}
        <DollarSign className="h-4 w-4" />
      </p>
      <p className="flex items-center justify-center cursor-pointer select-none">
        More
        <MoreVertical className="h-3 w-3 sm:h-4 sm:w-4" />
      </p>
    </span>
  );
}
