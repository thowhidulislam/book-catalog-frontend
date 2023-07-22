import bookReducer from "@/redux/features/Books/booksSlice";
import reviewReducer from "@/redux/features/review/reviewSlice";
import userReducer from "@/redux/features/user/userSlice";
import wishlistReducer from "@/redux/features/wishlist/wishlistSlice";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    user: userReducer,
    review: reviewReducer,
    wishlist: wishlistReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
