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

const readingListSlice = createSlice({
  name: "readingList",
  initialState,
  reducers: {},
});

export default readingListSlice.reducer;
