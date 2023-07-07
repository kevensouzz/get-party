export type GetPartyDataType = [
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