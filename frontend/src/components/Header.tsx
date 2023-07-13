import Nav from "./Nav";
import Title from "./Title";

export default function Header() {
  return (
    <header
      className={`z-10 w-full h-[12vh] shadow-md flex justify-between items-center px-20 max-lg:px-10 max-md:px-5 max-[320px]:px-2`}
    >
      <Title />
      <Nav />
    </header>
  );
}
