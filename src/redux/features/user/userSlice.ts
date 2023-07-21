import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

type IUserState = {
  user: {
    email: string | null;
  };
  isLoading: boolean;
};

const initialState: IUserState = {
  user: {
    email: null,
  },
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string | null>) => {
      state.user.email = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
