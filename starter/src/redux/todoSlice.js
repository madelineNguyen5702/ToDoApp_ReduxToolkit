import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, title: "Todo1", completed: false },
    { id: 2, title: "Todo2", completed: true },
    { id: 3, title: "Todo3", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const index=state.findIndex((todo)=>todo.id===action.payload.id)
      state[index].completed=action.payload.completed
    },
  },
});

export const { 
  addTodo,
  toggleComplete, 
} = todoSlice.actions;

export default todoSlice.reducer;