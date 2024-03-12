import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// example CRUD for users
const backendApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://your-api-backend-url" }),
  endpoints: (builder) => ({
    // Get all users
    getUsers: builder.query({
      query: () => "/users",
    }),
    // Get a user by ID
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
    }),
    // Create a new user
    createUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
    }),
    // Update an existing user
    updateUser: builder.mutation({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "PUT",
        body: user,
      }),
    }),
    // Delete a user
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export default backendApiSlice;