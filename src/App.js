import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

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
      />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
