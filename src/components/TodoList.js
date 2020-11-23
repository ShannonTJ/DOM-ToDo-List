import React from "react";
import SingleTodo from "./SingleTodo";

const TodoList = ({ tasks, setTasks, filterTasks }) => {
  return (
    <div className="task-container">
      <ul className="task-list">
        <SingleTodo
          tasks={tasks}
          setTasks={setTasks}
          filterTasks={filterTasks}
        />
      </ul>
    </div>
  );
};

export default TodoList;
