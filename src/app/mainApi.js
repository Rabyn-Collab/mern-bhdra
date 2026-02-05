import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const baseUrl = 'http://10.80.93.177:5000/api';
export const base = 'http://10.80.93.177:5000';

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl, credentials: 'include' }),
  endpoints: (builder) => ({})
});




