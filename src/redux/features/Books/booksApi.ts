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
  }),
});

export const { useGetBooksQuery, useAddBookMutation } = booksApi;
