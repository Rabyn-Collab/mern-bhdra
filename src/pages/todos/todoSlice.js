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
    },
    //
    removeTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
      setTodosToLocal(state.todos);
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo);
      setTodosToLocal(state.todos);
    },



  }


});


export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;





