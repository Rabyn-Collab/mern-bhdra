import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const baseUrl = 'http://192.168.1.99:5000/api';

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({})
});




