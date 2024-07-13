export type TPost = {
  id: number;
  title: string;
  body: string;
};

export type TCard = TPost & { color: string };