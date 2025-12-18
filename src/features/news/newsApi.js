import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const newsApi = createApi({
  reducerPath: 'newsApi',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://6943678a69b12460f31474d4.mockapi.io' }),


  endpoints: (builder) => ({


    getNews: builder.query({
      query: () => ({
        url: '/news',
        method: 'GET',

      })
    }),











  })







});


export const { useGetNewsQuery, useLazyGetNewsQuery } = newsApi;