export default function DeletesModal({
  onCloseDeletesModal,
  showSuccessModal,
  title,
  id,
}: {
    onCloseDeletesModal: () => void;
    showSuccessModal: () => void;
    title: string;
    id: string;
}) {
  function deleteParty() {
    fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        onCloseDeletesModal();
        showSuccessModal();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <section
      className={`fixed inset-0 bg-black text-white bg-opacity-75 backdrop-blur-md flex flex-col justify-center items-center`}
    >
      <div
        className={`w-[500px] h-36 flex flex-col rounded-2xl border bg-black bg-opacity-75 max-sm:w-[375px] max-[400px]:w-[275px]`}
      >
        <span
          className={`w-full h-1/2 flex items-center justify-center text-center max-[400px]:text-xs px-2`}
        >
          <p>DO YOU WANT TO DELETE THE "{title}"?</p>
        </span>
        <span className={`w-full h-1/2 flex items-center justify-around`}>
          <button
            className={`cursor-pointer flex items-center justify-center border rounded-xl h-1/2 w-1/3 sm:hover:text-black sm:hover:bg-white transition-all ease-linear duration-150 outline-none focus:text-black focus:bg-white`}
            onClick={deleteParty}
          >
            Yes
          </button>
          <button
            className={`cursor-pointer flex items-center justify-center border rounded-xl h-1/2 w-1/3 sm:hover:text-black sm:hover:bg-white transition-all ease-linear duration-150 outline-none focus:text-black focus:bg-white`}
            onClick={onCloseDeletesModal}
          >
            No
          </button>
        </span>
      </div>
    </section>
  );
}
