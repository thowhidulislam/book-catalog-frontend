export type IBook = {
  _id?: string | undefined;
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

export type IWishlistBook = {
  _id: string | number;
  book: IBook;
  user: IUser;
};
