import { api } from "@/redux/api/apiSlice";

const wishlistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postWishlist: builder.mutation({
      query: ({ id }) => ({
        url: "/wishlist/addBook",
        method: "POST",
        body: { bookId: id },
      }),
    }),
  }),
});

export const { usePostWishlistMutation } = wishlistApi;
