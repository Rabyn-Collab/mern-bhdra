import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


//
export const newsApi = createApi({
  reducerPath: 'newsApi',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://6943678a69b12460f31474d4.mockapi.io' }),


  endpoints: (builder) => ({


    getNews: builder.query({
      query: () => ({
        url: '/news',
        method: 'GET',
      }),
      providesTags: ['news']
    }),

    getNewsDetail: builder.query({
      query: (id) => ({
        url: `/news/${id}`,
        method: 'GET',
      }),
      providesTags: ['news']
    }),

    addNews: builder.mutation({
      query: (body) => ({
        url: '/news',
        method: 'POST',
        body
      }),
      invalidatesTags: ['news']
    }),

    updateNews: builder.mutation({
      query: ({ id, body }) => ({
        url: `/news/${id}`,
        body,
        method: 'PUT',
      }),
      invalidatesTags: ['news']
    }),

    removeNews: builder.mutation({
      query: (id) => ({
        url: `/news/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['news']
    })




  })







});


export const { useGetNewsQuery, useAddNewsMutation, useLazyGetNewsQuery, useRemoveNewsMutation, useUpdateNewsMutation, useGetNewsDetailQuery } = newsApi;