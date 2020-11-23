import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filterTasks, setFilterTasks] = useState([]);
  const [animate, setAnimate] = useState(false);

  //filter tasks based on completion
  const filterHandler = () => {
    switch (filter) {
      case "all":
        setFilterTasks(tasks);
        break;
      case "complete":
        setFilterTasks(tasks.filter((task) => task.completed === true));
        break;
      case "incomplete":
        setFilterTasks(tasks.filter((task) => task.completed === false));
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
      <Form
        tasks={tasks}
        setTasks={setTasks}
        inputText={inputText}
        setInputText={setInputText}
        setFilter={setFilter}
        animate={animate}
        setAnimate={setAnimate}
      />
      <TodoList
        tasks={tasks}
        setTasks={setTasks}
        filterTasks={filterTasks}
        animate={animate}
        setAnimate={setAnimate}
      />
    </div>
  );
}

export default App;
