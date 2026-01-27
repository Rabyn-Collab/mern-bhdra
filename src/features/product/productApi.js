import { mainApi } from "../../app/mainApi.js";





const productApi = mainApi.injectEndpoints({

  endpoints: (builder) => ({


    getProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET'
      }),
      providesTags: ['Product']
    }),

    createProduct: builder.mutation({
      query: (data) => ({
        url: '/products',
        method: 'POST',
        body: data.body,
        headers: {
          Authorization: data.token
        }
      }),
      invalidatesTags: ['Product']
    }),

    removeProduct: builder.mutation({
      query: (data) => ({
        url: `/products/${data.id}`,
        method: 'DELETE',
        headers: {
          Authorization: data.token
        }
      }),
      invalidatesTags: ['Product']
    }),


  })

})


export const { useGetProductsQuery, useCreateProductMutation, useRemoveProductMutation } = productApi;