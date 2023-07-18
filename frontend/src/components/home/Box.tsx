export default function Box() {
  return (
    <div
      className={`w-5/6 h-5/6 rounded-3xl bg-black bg-opacity-25 flex flex-col items-center justify-center text-9xl max-xl:text-8xl max-lg:text-7xl`}
    >
      <span
        className={`sm:cursor-pointer sm:hover:uppercase sm:hover:text-red-600`}
      >
        <span className={`text-red-600`}>G</span>et
      </span>
      <span
        className={`sm:cursor-pointer sm:hover:uppercase sm:hover:text-red-600`}
      >
        <span className={`text-red-600`}>P</span>arty
      </span>
    </div>
  );
}
