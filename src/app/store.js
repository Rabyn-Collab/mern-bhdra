import { configureStore } from "@reduxjs/toolkit";
import { drinkApi } from "../features/drinks/drinkApi";



export const store = configureStore({
  reducer: {
    [drinkApi.reducerPath]: drinkApi.reducer
  },


  //caching, polling, invalidation
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    drinkApi.middleware
  ]),
  devTools: true

})