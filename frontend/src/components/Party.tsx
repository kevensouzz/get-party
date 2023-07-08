"use client";
import { ArrowUpRight, DollarSign, User } from "lucide-react";
import { useState } from "react";
import PartyModal from "./PartyModal";
import { PartyApiTypeProps } from "@/types/PartyApiTypeProps";

export default function Party({
  title,
  description,
  author,
  budget,
  image,
  _id
}: PartyApiTypeProps) {
  const [partyModal, setPartyModal] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);

  const openModal = () => {
    setPartyModal(!partyModal);
    setShowCloseButton(!partyModal);
  };

  const closeModal = () => {
    setPartyModal(false);
    setShowCloseButton(false);
  };

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
        <img
          className="w-full h-full rounded-xl"
          src={image}
          alt={description}
        />
      </div>

      <div
        className={`h-full w-1/2 flex flex-col items-center justify-around bg-red-600 p-4 max-sm:w-full max-sm:h-1/2 max-sm:p-0 max-sm:px-2`}
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

        <span
          onClick={openModal}
          className="hover:text-zinc-950 font-medium ransition-all duration-200 ease-linear flex items-center justify-between cursor-pointer"
        >
          Learn More
          <ArrowUpRight size={18} />
        </span>
        {partyModal && (
          <PartyModal
            onClose={closeModal}
            title={title}
            description={description}
            author={author}
            budget={budget}
            _id={_id}
          />
        )}
      </div>
    </section>
  );
}
