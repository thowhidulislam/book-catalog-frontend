import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type IWishlistState = {
  books: {
    _id: number | undefined;
  }[];
  isLoading?: boolean;
};

const initialState: IWishlistState = {
  books: [],
  isLoading: true,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addBookToWishlist: (
      state,
      action: PayloadAction<{
        _id: number | undefined;
      }>
    ) => {
      state.books.push(action.payload);
    },
    removeBookFromWishlist: (
      state,
      action: PayloadAction<{
        _id: number | undefined;
      }>
    ) => {
      state.books = state.books.filter(
        (book) => book._id !== action.payload._id
      );
    },
  },
});

export const { addBookToWishlist, removeBookFromWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
