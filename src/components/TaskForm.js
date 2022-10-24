import React, { useState } from "react";

import { useDispatch } from "react-redux"; //useDispatch se usa para llamar a una funcion en redux
import { addTask } from "../features/tasks/taskSlice";

import { v4 as uuid } from "uuid";

const TaskForm = () => {
  const [task, setTask] = useState({ title: "", description: "" });

  const dispatch = useDispatch();

  function handleChange(event) {
    setTask({ ...task, [event.target.name]: event.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      addTask({
        ...task,
        id: uuid(),
      })
    ); //Ingreso a la función addTaks definida en taskSlice pasandole task que seria la tarea de que se ingreso en este formulario
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
      />
      <button>Save</button>
    </form>
  );
};

export default TaskForm;
