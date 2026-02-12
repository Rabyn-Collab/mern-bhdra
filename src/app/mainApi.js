import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// export const baseUrl = 'http://192.168.100.6:5000/api';
// export const base = 'http://192.168.100.6:5000';


export const baseUrl = 'https://shop-puax.onrender.com/api';
export const base = 'https://shop-puax.onrender.com';

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl, credentials: 'include' }),
  endpoints: (builder) => ({})
});




