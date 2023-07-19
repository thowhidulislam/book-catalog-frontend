import { IBook } from "@/types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";

type IBooks = {
  books: IBook[];
};

const initialState: IBooks = {
  books: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export default booksSlice.reducer;
