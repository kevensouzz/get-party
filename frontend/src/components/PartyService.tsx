"use client";
import { PartyServiceProps } from "@/types/PartyServiceProps";
import { DollarSign, Layers, MoreVertical } from "lucide-react";
import { useState } from "react";
import ServiceModal from "./ServiceModal";

export default function PartyService({ name, price, _id }: PartyServiceProps) {
  const [serviceModal, setServiceModal] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);

  const openModal = () => {
    setServiceModal(!serviceModal);
    setShowCloseButton(!serviceModal);
  };

  const closeModal = () => {
    setServiceModal(false);
    setShowCloseButton(false);
  };

  return (
    <span
      className="bg-red-600 w-full h-20 rounded-2xl flex justify-around items-center select-text font-semibold text-lg
    max-sm:text-sm max-[425px]:justify-between max-[425px]:px-4"
    >
      <p className="flex items-center justify-center gap-1">
        {name}
        <Layers className="w-4 h-4" />
      </p>
      <p className="flex items-center justify-center">
        {price}
        <DollarSign className="h-4 w-4" />
      </p>
      <p
        onClick={openModal}
        className="flex items-center justify-center cursor-pointer select-none"
      >
        <MoreVertical />
      </p>
      {serviceModal && (
        <ServiceModal
          onClose={closeModal}
          name={name}
          price={price}
          _id={_id}
        />
      )}
    </span>
  );
}
