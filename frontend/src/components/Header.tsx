import Nav from "./Nav";
import Title from "./Title";

export default function Header() {
  return (
    <header
      className={`w-full h-20 shadow-lg flex justify-between items-center px-20`}
    >
      <Title />
      <Nav />
    </header>
  );
}
