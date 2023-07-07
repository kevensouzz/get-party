export default function PartyModal({ onClose }: { onClose: () => void }) {
  return (
    <section
      className={`fixed inset-0 bg-black bg-opacity-75 backdrop-blur-md flex flex-col justify-center items-center`}
    >
      <span onClick={onClose} className={`text-white cursor-pointer`}>
        close modal
      </span>
    </section>
  );
}