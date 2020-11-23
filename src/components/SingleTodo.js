import React from "react";

const SingleTodo = ({ tasks, setTasks }) => {
  const removeHandler = (id) => {
    //remove task from list
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const checkHandler = (id) => {
    //toggle "completed" task value
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  return (
    <>
      {tasks.map((task) => {
        const { id, text, completed } = task;
        return (
          <div key={id} className={`task ${task.completed ? "completed" : ""}`}>
            <li className="task-item">{text}</li>
            <button className="complete-btn" onClick={() => checkHandler(id)}>
              <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={() => removeHandler(id)}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        );
      })}
    </>
  );
};

export default SingleTodo;
