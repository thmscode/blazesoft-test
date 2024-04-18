export type Book = {
  id: string;
  title: string;
  price: string;
  category: string;
  description: string;
};

export type ModalStates = {
  ADD: string;
  EDIT: string;
  RESET: string;
};

export type FormData = {
  title: string;
  price: string;
  category: string;
  description: string;
};
