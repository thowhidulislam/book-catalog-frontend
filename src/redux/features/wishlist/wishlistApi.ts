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
    getWishlistBooks: builder.query({
      query: () => ({
        url: "/wishlist/getBooks",
        method: "GET",
      }),
    }),
  }),
});

export const { usePostWishlistMutation, useGetWishlistBooksQuery } =
  wishlistApi;
