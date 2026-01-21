import { mainApi } from "../../app/mainApi.js";





const userApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({


    getUser: builder.query({
      query: (token) => ({
        url: '/users/profile',
        method: 'GET',
        headers: {
          Authorization: token
        }
      })
    }),



  }),
})


export const { useGetUserQuery } = userApi;