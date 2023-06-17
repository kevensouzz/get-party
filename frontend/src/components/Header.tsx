import Nav from "./Nav";
import Title from "./Title";

export default function Header() {
  return (
    <header
      className={`w-full h-20 shadow-md flex justify-between items-center px-20 max-lg:px-10 max-md:px-5 max-[320px]:px-2`}
    >
      <Title />
      <Nav />
    </header>
  );
}
