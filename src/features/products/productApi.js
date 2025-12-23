import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';





export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),



  endpoints: (builder) => ({


    getProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',

      })

    })




  })



});


export const { useGetProductsQuery } = productApi;