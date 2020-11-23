import React from "react";

const Form = () => {
  return (
    <form>
      <input type="text" className="task-input" />
      <button className="task-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="tasks" className="filter-task">
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
