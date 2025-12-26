import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const drinkApi = createApi({
  reducerPath: 'drinkApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1' }),


  endpoints: (builder) => ({


    getDrinksByCategory: builder.query({
      query: (category) => ({
        url: '/filter.php',
        params: { c: category },
        method: 'GET',
      }),
    }),
    getDrinkDetails: builder.query({
      query: (id) => ({
        url: '/lookup.php',
        params: {
          i: id
        },
        method: 'GET',
      }),
    }),







  }),
});

export const { useGetDrinksByCategoryQuery, useGetDrinkDetailsQuery } = drinkApi;


