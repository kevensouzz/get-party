export type PartyApiTypeProps = {
  title: string;
  description: string;
  author: string;
  budget: number;
  image: string;
  services?: [name: string, description: string, price: Number, image: string];
};