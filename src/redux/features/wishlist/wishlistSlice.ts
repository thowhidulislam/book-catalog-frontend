import { createSlice } from "@reduxjs/toolkit";

type IWishlistState = {
  books: {
    _id: string | undefined;
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
  reducers: {},
});

export default wishlistSlice.reducer;
