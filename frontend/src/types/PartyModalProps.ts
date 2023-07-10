export type PartyModalProps = {
  onClose: () => void;
  author: string;
  budget: number;
  description: string;
  title: string;
  _id: string;
  services: [
    {
      name: string;
      description: string;
      price: number;
      image: string;
      _id: string;
    }
  ];
};
