import React from "react";
import SingleTodo from "./SingleTodo";

const TodoList = ({ tasks, setTasks }) => {
  return (
    <div className="task-container">
      <ul className="task-list">
        <SingleTodo tasks={tasks} setTasks={setTasks} />
      </ul>
    </div>
  );
};

export default TodoList;
