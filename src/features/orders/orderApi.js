import { mainApi } from "../../app/mainApi.js";




const orderApi = mainApi.injectEndpoints({

  endpoints: (builder) => ({

    getOrders: builder.query({
      query: (token) => ({
        url: '/orders',
        method: 'GET',
        headers: {

          Authorization: token

        }
      }),
      providesTags: ['Order']
    }),

    createOrder: builder.mutation({
      query: (data) => ({
        url: '/orders',
        method: 'POST',
        body: data.body,
        headers: {
          Authorization: data.token
        }
      }),
      invalidatesTags: ['Order']
    }),

  })

})


export const { useCreateOrderMutation, useGetOrdersQuery } = orderApi;