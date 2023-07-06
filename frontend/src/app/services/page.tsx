// TODO: não permitir o acesso do usuario sem estar logado

import WelcomeServices from "@/components/WelcomeServices";
import { GetPartyAPI } from "@/fetch/GetParty";
import Party from "@/components/Party";

// TODO: tipar índice dos arrays 

type GetPartyDataType = [
  {
    title: string;
    description: string;
    author: string;
    budget: number;
    image: string;
    services?: [
      {
        name: string;
        description: string;
        price: number;
        image: string;
      }
    ];
  }
];

export default async function Services() {
  const GetPartyData = await GetPartyAPI<GetPartyDataType>("/parties", {
    method: "GET",
  });
  
  // TODO: fazer um map pra renderizar valores de um objeto da api, que corresponderá às props do componente Party

  return (
    <main
      className={`flex flex-col items-center justify-center w-full min-h-[88vh]`}
    >
      <WelcomeServices />

      <section className={`w-full flex flex-col items-center`}>
        {/* PARTIES */}

        {/* TODO: renderizar os componentes sem erro de tipagem no índice */}

        <Party
          author={GetPartyData[0].author}
          budget={GetPartyData[0].budget}
          description={GetPartyData[0].description}
          image={GetPartyData[0].image}
          title={GetPartyData[0].title}
        />
        {/* <Party
          author={GetPartyData[1].author}
          budget={GetPartyData[1].budget}
          description={GetPartyData[1].description}
          image={GetPartyData[1].image}
          title={GetPartyData[1].title}
        /> */}
      </section>
    </main>
  );
}
