import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const productAPi = createApi({
  reducerPath: 'productApi',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),


  endpoints: (builder) => ({







  })







});


export const { } = newsApi;