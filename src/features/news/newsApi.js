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

    addNews: builder.mutation({
      query: (body) => ({
        url: '/news',
        method: 'POST',
        body
      })
    })




  })







});


export const { useGetNewsQuery, useAddNewsMutation, useLazyGetNewsQuery } = newsApi;