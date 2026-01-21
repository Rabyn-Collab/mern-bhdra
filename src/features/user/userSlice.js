import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocal, setUserToLocal } from "../local/local.js";





export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: getUserFromLocal()
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      setUserToLocal(state.user);
    }
  }
});

export const { setUser } = userSlice.actions;