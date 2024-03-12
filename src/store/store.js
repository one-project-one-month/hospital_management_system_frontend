import {configureStore} from "@reduxjs/toolkit";
import {supabaseApi} from "../api/baseApi.js";

const reduxStore=configureStore({
    reducer:{
        [supabaseApi.reducerPath]: supabaseApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(supabaseApi.middleware)
})
export default reduxStore