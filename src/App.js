import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filterTasks, setFilterTasks] = useState([]);

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

  //app refreshes when tasks are submitted and the dropdown is changed
  useEffect(() => {
    filterHandler();
  }, [tasks, filter]);

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
      />
      <TodoList tasks={tasks} setTasks={setTasks} filterTasks={filterTasks} />
    </div>
  );
}

export default App;
