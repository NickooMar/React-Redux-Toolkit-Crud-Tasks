import "./App.css";

import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TasksList />}></Route>
          <Route path="/create-task" element={<TaskForm />}></Route>
          <Route path="/edit-task/:id" element={<TaskForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
