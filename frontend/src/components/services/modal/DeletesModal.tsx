import { Fetch } from "@/Fetch";
import { GetPartyDelete } from "@/type/GetPartyDelete";

export default function DeletesModal({ onClose, party, id }: GetPartyDelete) {
  function deleteParty() {
    Fetch<GetPartyDelete>(`http://localhost:5000/parties/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <section
      className={`fixed inset-0 bg-black text-white bg-opacity-75 backdrop-blur-md flex flex-col justify-center items-center`}
    >
      <div
        className={`w-[500px] h-[150px] flex flex-col rounded-2xl border bg-black bg-opacity-75
        max-sm:w-[375px] max-[400px]:w-[275px]`}
      >
        <span
          className={`w-full h-1/2 flex items-center justify-center max-[400px]:text-xs px-4 text-center`}
        >
          <p>Do you want to delete the "{party}" party?</p>
        </span>
        <span className={`w-full h-1/2 flex items-center justify-around`}>
          <div
            className={`cursor-pointer flex items-center justify-center border rounded-xl h-1/2 w-1/3
            sm:hover:text-black sm:hover:bg-white transition-all ease-linear duration-150`}
            onClick={deleteParty}
          >
            Yes!
          </div>
          <div
            className={`cursor-pointer flex items-center justify-center border rounded-xl h-1/2 w-1/3
            sm:hover:text-black sm:hover:bg-white transition-all ease-linear duration-150`}
            onClick={onClose}
          >
            No!
          </div>
        </span>
      </div>
    </section>
  );
}
