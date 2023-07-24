import { api } from "@/redux/api/apiSlice";

const readinglistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postReadingList: builder.mutation({
      query: ({ id }) => ({
        url: `/readingList/addBook`,
        method: "POST",
        body: { bookId: id },
      }),
      invalidatesTags: ["readinglist"],
    }),
    getReadingList: builder.query({
      query: () => `/readingList/getBooks`,
      providesTags: ["readinglist"],
    }),
    updateReadingList: builder.mutation({
      query: ({ id }) => ({
        url: `/readingList/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["readinglist"],
    }),
  }),
});

export const {
  usePostReadingListMutation,
  useGetReadingListQuery,
  useUpdateReadingListMutation,
} = readinglistApi;
