import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filterTasks, setFilterTasks] = useState([]);
  const [animate, setAnimate] = useState(false);

  return (
    <AppContext.Provider
      value={{
        inputText,
        setInputText,
        tasks,
        setTasks,
        filter,
        setFilter,
        filterTasks,
        setFilterTasks,
        animate,
        setAnimate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
