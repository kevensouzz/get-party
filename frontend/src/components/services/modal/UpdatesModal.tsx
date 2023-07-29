import FormGetPartyPut from "@/components/form/FormGetPartyPut";
import { PenLine, X } from "lucide-react";

export type UpdatesModalProps = {
  onCloseUpdatesModal: () => void;
  id: string
};

export default function UpdatesModal({ onCloseUpdatesModal, id }: UpdatesModalProps) {
  return (
    <section
      className={`fixed inset-0 bg-black text-white bg-opacity-75 backdrop-blur-md flex flex-col justify-center items-center`}
    >
      <div
        className={`w-[600px] h-[400px] flex flex-col rounded-2xl border bg-black bg-opacity-75
        max-sm:w-[375px] max-[400px]:w-[275px]`}
      >
        <header className={`w-full h-1/6 flex items-center justify-between px-4`}>
          <div className={`flex items-center justify-center gap-1`}>
              <span className={`font-medium text-lg`}>Edit party</span>
              <PenLine />
          </div>
          <X onClick={onCloseUpdatesModal} className={`cursor-pointer w-8 h-8`} />
        </header>
        <FormGetPartyPut id={id} />
      </div>
    </section>
  );
}
