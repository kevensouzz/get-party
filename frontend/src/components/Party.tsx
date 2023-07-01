// interface ServicesApiTypeProps {
//   name: String;
//   description: String;
//   price: Number;
//   image: String;
// }

interface PartyApiTypeProps {
  title: String;
  description: String;
  author: String;
  budget: Number;
  image: String;
  // services: ServicesApiTypeProps;
}

export default function Party({title, description, author, budget, image}: PartyApiTypeProps) {
  return (
    <section
      className={`
    w-5/6 h-[75vh] bg-black bg-opacity-25 border border-red-600 rounded-md
    flex
    `}
    >
      <div
        className={`h-full w-1/2 flex items-center justify-center p-4`}
      ></div>
      <div
        className={`h-full w-1/2 flex flex-col items-center justify-evenly bg-red-600 p-4`}
      ></div>
    </section>
  );
}
