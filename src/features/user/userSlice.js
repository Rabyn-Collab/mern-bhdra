import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocal, setUserToLocal } from "../local/local";




export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: getUserFromLocal(),
  },
  reducers: {

    setUser: (state, action) => {
      state.user = action.payload;
      setUserToLocal(action.payload);
    },

  }
})