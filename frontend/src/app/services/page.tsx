// import { GetPartyAPI } from "@/functions/fetch/GetParty";
import Party from "@/components/Party";
import Link from "next/link";

export default function Services() {
  return (
    <main
      className={`flex flex-col items-center justify-center w-full min-h-[88vh]`}
    >
      <section className="bg-neutral-950 w-full h-[88vh] flex flex-col items-center justify-center">
        <div className="w-full h-full"></div>
        <div className="text-red-500 w-full flex items-center justify-center h-[7.5vh]">
          <Link
            className="flex items-center justify-center text-center h-full text-[10px] min-[425px]:text-xs
            font-mono uppercase max-md:w-4/6 max-sm:w-5/6 max-[425px]:w-full max-[425px]:mx-2 max-[320px]:mx-0
            hover:text-red-600 transition-all ease-linear duration-200"
            href="#parties"
          >
            see our services shared by customers themselves followed by their
            appropriate prices and ratings!
          </Link>
        </div>
      </section>

      <section
        id="parties"
        className="min-h-screen w-full flex flex-col items-center pb-32"
      >
        <Party
          author={"Keven Souza"}
          budget={25000}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eum vero soluta delectus facilis error, unde veniam optio voluptates molestiae modi doloribus quos porro, dolores placeat iusto tempora. Tenetur, sed!"
          }
          image={"https://picsum.photos/750/750"}
          title={"Festa dos mano"}
        />
        <Party
          author={"Keven Souza"}
          budget={25000}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eum vero soluta delectus facilis error, unde veniam optio voluptates molestiae modi doloribus quos porro, dolores placeat iusto tempora. Tenetur, sed!"
          }
          image={"https://picsum.photos/750/750"}
          title={"Festa dos mano"}
        />
        <Party
          author={"Keven Souza"}
          budget={25000}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eum vero soluta delectus facilis error, unde veniam optio voluptates molestiae modi doloribus quos porro, dolores placeat iusto tempora. Tenetur, sed!"
          }
          image={"https://picsum.photos/750/750"}
          title={"Festa dos mano"}
        />
      </section>
    </main>
  );
}
