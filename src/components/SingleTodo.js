import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import { useGlobalContext } from "../context";

const SingleTodo = () => {
  const {
    tasks,
    setTasks,
    filterTasks,
    animate,
    setAnimate,
  } = useGlobalContext();

  //remove task from list
  const removeHandler = (id) => {
    setAnimate(true);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle "completed" task value
  const checkHandler = (id) => {
    setAnimate(false);
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
