export type PartyModalProps = {
  onClose: () => void;
  author: string;
  budget: number;
  description: string;
  title: string;
  services?: [
    { name: string; description: string; price: Number; image: string }
  ];
};
