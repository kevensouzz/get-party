export default function ErrorModal({
  onCloseErrorModal,
  message,
}: {
  onCloseErrorModal: () => void;
  message: string;
}) {
  return (
    <section
      className={`fixed inset-0 bg-black text-white bg-opacity-75 backdrop-blur-md flex flex-col justify-center items-center`}
    >
      <div
        className={`w-[450px] h-[125px] overflow-hidden flex flex-col rounded-2xl border bg-black bg-opacity-75 max-sm:w-[375px] max-sm:h-[100px] max-[400px]:w-[275px]`}
      >
        <span
          className={`w-full h-3/5 flex items-center justify-center text-center px-2 font-medium text-lg max-sm:text-sm max-[400px]:text-xs`}
        >
          {message}
        </span>

        <span
          onClick={onCloseErrorModal}
          className={`cursor-pointer bg-red-600 w-full h-2/5`}
        />
      </div>
    </section>
  );
}
