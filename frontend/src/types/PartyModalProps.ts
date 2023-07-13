export type PartyModalProps = {
  onClose: () => void;
  author: string;
  budget: number;
  title: string;
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
