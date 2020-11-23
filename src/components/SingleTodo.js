import React, { useState } from "react";
import { CSSTransitionGroup } from "react-transition-group";

const SingleTodo = ({ tasks, setTasks, filterTasks, animate, setAnimate }) => {
  const removeHandler = (id) => {
    setAnimate(true);
    //remove task from list
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const checkHandler = (id) => {
    setAnimate(false);
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
    <CSSTransitionGroup
      transitionName="example"
      transitionEnter={false}
      transitionLeave={animate}
      transitionLeaveTimeout={300}
    >
      {filterTasks.map((task) => {
        const { id, text, completed } = task;
        return (
          <div key={id} className={`task ${completed ? "completed" : ""}`}>
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
    </CSSTransitionGroup>
  );
};

export default SingleTodo;
