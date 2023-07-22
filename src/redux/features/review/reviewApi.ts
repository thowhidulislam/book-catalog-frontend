import { api } from "@/redux/api/apiSlice";

const reviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postReview: builder.mutation({
      query: ({ id, message }) => ({
        url: `/review/${id}`,
        method: "POST",
        body: { message: message },
      }),
    }),
  }),
});

export const { usePostReviewMutation } = reviewApi;
