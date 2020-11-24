import React, { useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useGlobalContext } from "./context";

function App() {
  const { tasks, setTasks, filter, setFilterTasks } = useGlobalContext();

  //filter tasks based on completion
  const filterHandler = () => {
    switch (filter) {
      case "complete":
        setFilterTasks(tasks.filter((task) => task.completed === true));
        break;
      case "incomplete":
        setFilterTasks(tasks.filter((task) => task.completed === false));
        break;
      default:
        setFilterTasks(tasks);
        break;
    }
  };
  useEffect(() => {
    getFromLocal();
  }, []);

  //app refreshes when tasks are submitted and the dropdown is changed
  useEffect(() => {
    filterHandler();
    saveToLocal();
  }, [tasks, filter]);

  //load from local storage
  const getFromLocal = () => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      setTasks(JSON.parse(localStorage.getItem("tasks")));
    }
  };

  //save to local storage
  const saveToLocal = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
