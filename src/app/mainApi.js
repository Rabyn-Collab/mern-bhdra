import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


//

//export const base = 'https://mern-ashad.onrender.com';
export const base = 'http://192.168.1.99:5000';

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.99:5000/api' }),
  endpoints: (builder) => ({})
});