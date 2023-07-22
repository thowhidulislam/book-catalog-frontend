import { createSlice } from "@reduxjs/toolkit";

type IReviewState = {
  review: {
    message: string;
  }[];
};

const initialState: IReviewState = {
  review: [
    {
      message: "",
    },
  ],
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
});

export default reviewSlice.reducer;
