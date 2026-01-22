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
    updateUser: builder.mutation({
      query: (data) => ({
        url: '/users/profile',
        method: 'PATCH',
        body: data.body,
        headers: {
          Authorization: data.token
        }
      })
    })



  }),
})


export const { useGetUserQuery, useUpdateUserMutation } = userApi;