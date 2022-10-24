import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 Description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 Description",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "taks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      //Podrá ser llamado en cualquiera parte de la aplicación
      console.log(state, action.payload);
      state.push(action.payload);
      
    },
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
