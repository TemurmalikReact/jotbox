export type CartProps = {
  id: string;
  title: string;
  description: string;
  pined: boolean;
  archived: boolean;
  labels: string[];
  _version: number;
  _deleted: boolean;
  color: string;
  collabarators: string[];
  collabarator: string;
  img: string[];
  todo: Array<{
    id: string;
    title: string;
    checked: boolean;
  }>;
};

export type LabelType = {
  id: string;
  _version: number;
  title: string;
};
