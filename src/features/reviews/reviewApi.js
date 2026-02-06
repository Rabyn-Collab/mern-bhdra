import { mainApi } from "../../app/mainApi.js";




const reviewApi = mainApi.enhanceEndpoints({

  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => ({
        url: `/reviews/products/${id}`,
        method: 'GET'
      }),
      providesTags: ['Review']
    }),

    addReview: builder.mutation({
      query: (data) => ({
        url: `/reviews/${data.id}`,
        method: 'POST',
        body: data.body,
        headers: {
          Authorization: data.token
        }
      }),
      invalidatesTags: ['Review']
    }),
  }),
});


export const { useGetReviewsQuery, useAddReviewMutation } = reviewApi;