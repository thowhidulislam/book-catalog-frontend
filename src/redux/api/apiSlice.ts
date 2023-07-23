import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    prepareHeaders: (headers) => {
      // Get the JWT token from your storage (localStorage, sessionStorage, etc.)
      const token = localStorage.getItem("token");
      if (token && token !== "undefined") {
        headers.set("Authorization", `${JSON.parse(token)}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["review", "books", "wishlist"],
  endpoints: () => ({}),
});
