import { mainApi } from "../../app/mainApi";

const reviewApi = mainApi.injectEndpoints({

  endpoints: (builder) => ({


    createReview: builder.mutation({
      query: (data) => ({
        url: '/reviews',
        method: 'POST',
        headers: {
          Authorization: data.token
        },
        body: data.body
      }),
      invalidatesTags: ['Review']
    }),



  })
});


export const { useCreateReviewMutation } = reviewApi;