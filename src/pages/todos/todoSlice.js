import { createSlice } from "@reduxjs/toolkit";
import { getTodosFromLocal, setTodosToLocal } from "../../local/local";





export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: {
    todos: getTodosFromLocal()
  },

  reducers: {

    addTodo: (state, action) => {
      state.todos.push(action.payload);
      setTodosToLocal(state.todos);
    }



  }


});


export const { addTodo } = todoSlice.actions;





