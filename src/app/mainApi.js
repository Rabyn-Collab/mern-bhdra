import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


//

export const base = 'https://mern-ashad.onrender.com';

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mern-ashad.onrender.com/api' }),
  endpoints: (builder) => ({})
});