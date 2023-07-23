export type IBook = {
  _id?: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
  addedBy?: string;
};

export type IUser = {
  _id: string;
  email: string;
  name: string;
  role: string;
};
