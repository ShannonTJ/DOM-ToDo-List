import React from "react";
import SingleTodo from "./SingleTodo";

const TodoList = () => {
  return (
    <div className="task-container">
      <ul className="task-list">
        <SingleTodo />
      </ul>
    </div>
  );
};

export default TodoList;
