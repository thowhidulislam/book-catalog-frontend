import { api } from "@/redux/api/apiSlice";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (data) => ({
        url: "/book/getAllBooks",
        method: "GET",
        params: { ...data },
      }),
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: "/book/addBook",
        method: "POST",
        body: { ...data },
      }),
    }),
    getSingleBook: builder.query({
      query: (id) => ({
        url: `/book/${id}`,
        method: "GET",
      }),
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/${id}`,
        method: "PATCH",
        body: { ...data },
        params: id,
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useGetSingleBookQuery,
  useUpdateBookMutation,
} = booksApi;
