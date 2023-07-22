import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

type IPayload = {
  email: string | null;
};

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
  isLoading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IPayload>) => {
      state.user.email = action.payload?.email;
      state.isLoading = false;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
