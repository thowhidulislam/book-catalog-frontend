import { api } from "@/redux/api/apiSlice";

const readinglistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postReadingList: builder.mutation({
      query: ({ id }) => ({
        url: `/readingList/addBook`,
        method: "POST",
        body: { bookId: id },
      }),
    }),
    getReadingList: builder.query({
      query: () => `/readingList/getBooks`,
    }),
    updateReadingList: builder.mutation({
      query: ({ id }) => ({
        url: `/readingList/${id}`,
        method: "PATCH",
      }),
    }),
  }),
});

export const {
  usePostReadingListMutation,
  useGetReadingListQuery,
  useUpdateReadingListMutation,
} = readinglistApi;
