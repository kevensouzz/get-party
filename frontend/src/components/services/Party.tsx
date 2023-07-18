"use client";
import { ArrowUpRight, DollarSign, PartyPopper, User } from "lucide-react";
import { useState } from "react";
import { PartyApiTypeProps } from "@/type/PartyApiTypeProps";
import PartyModal from "./PartyModal";

export default function Party({
  title,
  author,
  budget,
  image,
  _id,
  services,
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
        <img className="w-full h-full rounded-xl" src={image} alt={image} />
      </div>

      <div
        className={`h-full w-1/2 flex flex-col items-center justify-center bg-red-600 p-2 max-sm:w-full max-sm:h-1/2 max-sm:p-0 max-sm:px-2`}
      >
        <span className="font-semibold uppercase flex items-center justify-center text-2xl max-lg:text-xl">
          {title}
          <PartyPopper className="w-6 h-6 mb-1" />
        </span>
        <span
          onClick={openModal}
          className="hover:text-zinc-950 font-semibold ransition-all duration-200 ease-linear flex items-center justify-center cursor-pointer"
        >
          Learn More
          <ArrowUpRight size={18} />
        </span>
        {partyModal && (
          <PartyModal
            onClose={closeModal}
            title={title}
            author={author}
            budget={budget}
            _id={_id}
            services={services}
          />
        )}
      </div>
    </section>
  );
}
