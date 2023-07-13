import { PartyServiceProps } from "@/types/PartyServiceProps";
import { DollarSign, Edit, Layers } from "lucide-react";

export default function PartyService({ name, price }: PartyServiceProps) {
  return (
    <div
      className="bg-red-600 w-full h-20 rounded-2xl flex justify-around items-center select-text font-semibold text-lg
    max-sm:text-sm max-[425px]:justify-between max-[425px]:px-4"
    >
      <span className="flex items-center justify-center gap-1">
        {name}
        <Layers className="w-4 h-4" />
      </span>
      <span className="flex items-center justify-center">
        {price}
        <DollarSign className="h-4 w-4" />
      </span>
      <Edit className="cursor-pointer" />
    </div>
  );
}
