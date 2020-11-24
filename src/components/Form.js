import React from "react";
import { useGlobalContext } from "../context";

const Form = () => {
  const {
    tasks,
    setTasks,
    inputText,
    setInputText,
    setFilter,
    setAnimate,
  } = useGlobalContext();

  //handle new items submitted to the list
  const submitHandler = (event) => {
    event.preventDefault();

    if (inputText !== "") {
      setTasks([
        ...tasks,
        {
          id: new Date().getTime().toString(),
          text: inputText,
          completed: false,
        },
      ]);
    }
    setInputText("");
  };

  //handle dropdown selection
  const selectHandler = (event) => {
    setAnimate(false);
    setFilter(event.target.value);
  };

  return (
    <form>
      <input
        type="text"
        className="task-input"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <button className="task-button" type="submit" onClick={submitHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="tasks" className="filter-task" onChange={selectHandler}>
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
