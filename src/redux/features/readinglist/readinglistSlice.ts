import { createSlice } from "@reduxjs/toolkit";

type IReadingListState = {
  books: [
    {
      book: string;

      isReading: boolean;
    }
  ];
};

const initialState: IReadingListState = {
  books: [
    {
      book: "",
      isReading: false,
    },
  ],
};

const readinglistSlice = createSlice({
  name: "readingList",
  initialState,
  reducers: {},
});

export default readinglistSlice.reducer;
