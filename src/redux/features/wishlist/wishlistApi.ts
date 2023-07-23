import { api } from "@/redux/api/apiSlice";

const wishlistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postWishlist: builder.mutation({
      query: ({ id }) => ({
        url: "/wishlist/addBook",
        method: "POST",
        body: { bookId: id },
      }),
      invalidatesTags: ["wishlist"],
    }),
    getWishlistBooks: builder.query({
      query: () => ({
        url: "/wishlist/getBooks",
        method: "GET",
      }),
      providesTags: ["wishlist"],
    }),
    deleteWishlistBook: builder.mutation({
      query: ({ id }) => ({
        url: `/wishlist/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  usePostWishlistMutation,
  useGetWishlistBooksQuery,
  useDeleteWishlistBookMutation,
} = wishlistApi;
