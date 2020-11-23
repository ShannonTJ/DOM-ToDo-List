import React from "react";

const Form = ({ tasks, setTasks, inputText, setInputText, setFilter }) => {
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

  const selectHandler = (event) => {
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
