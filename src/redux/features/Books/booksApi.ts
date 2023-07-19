import { api } from "@/redux/api/apiSlice";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/book/getAllBooks",
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;
