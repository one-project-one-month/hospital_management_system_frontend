// api/supabaseApi.js
import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react';
import {supabase} from "./supabaseClient.js";


export const supabaseApi = createApi({
    reducerPath: 'supabaseApi',
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        login: builder.mutation({
            queryFn: async ({email, password}) => {

                const { user, session, error } = await supabase.auth.signInWithPassword({email, password});
                if (error) throw error;
                return { user, session };
            },
        }),
        signup: builder.mutation({
            queryFn: async () => {

                const { user, session, error } = await supabase.auth.signUp({
                    email: 'example@email.com',
                    password: 'example-password',
                });
                if (error) throw error;
                return { user, session };
            },
        }),
        fetchUser: builder.query({
            queryFn: async () => {

                const user = supabase.auth.getUser();
                return { user };
            },
        }),
    }),
});

export const { useLoginMutation, useSignupMutation, useFetchUserQuery } = supabaseApi;
