export type PartyApiTypeProps = {
  title: string;
  author: string;
  budget: number;
  image: string;
  _id: string;
  services: [
    {
      name: string;
      price: number;
      image: string;
      _id: string;
    }
  ];
};
