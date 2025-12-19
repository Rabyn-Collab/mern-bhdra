import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "../features/news/newsApi";




export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer
  },


  //caching, polling, invalidation
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    newsApi.middleware
  ]),

})