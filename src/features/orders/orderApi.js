import { mainApi } from "../../app/mainApi.js";




const orderApi = mainApi.injectEndpoints({

  endpoints: (builder) => ({

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


export const { useCreateOrderMutation } = orderApi;