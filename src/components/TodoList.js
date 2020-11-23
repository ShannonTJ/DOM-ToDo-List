import React from "react";
import SingleTodo from "./SingleTodo";

const TodoList = ({ tasks, setTasks, filterTasks, animate, setAnimate }) => {
  return (
    <div className="task-container">
      <ul className="task-list">
        <SingleTodo
          tasks={tasks}
          setTasks={setTasks}
          filterTasks={filterTasks}
          animate={animate}
          setAnimate={setAnimate}
        />
      </ul>
    </div>
  );
};

export default TodoList;
