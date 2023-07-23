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
  },
});

export const { addBookToWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
