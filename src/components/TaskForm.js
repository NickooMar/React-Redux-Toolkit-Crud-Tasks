import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux"; //useDispatch se usa para llamar a una funcion en redux
import { addTask, editTask } from "../features/tasks/taskSlice";

import { v4 as uuid } from "uuid";

import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
  const [task, setTask] = useState({ title: "", description: "" });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  function handleChange(event) {
    setTask({ ...task, [event.target.name]: event.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask(task))
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      ); //Ingreso a la función addTaks definida en taskSlice pasandole task que seria la tarea de que se ingreso en este formulario
    }

    navigate("/");
  }

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id); //Cargo el estado con la información del task obtenida gracias al selector.
      setTask(taskFound);
    }
  }, [params.id, tasks]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={task.title}
      />
      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={task.description}
      />
      <button>Save</button>
    </form>
  );
};

export default TaskForm;
