import React, { useState } from "react";
import "./App.scss";

export const App: React.FC = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="main">
      <h1>TO-DO LIST</h1>
      <form id="add">
        <input type="text" placeholder="new task" />
        <input type="submit" value="ADD" />
      </form>
      <div className="tasksBoard">
        <ul id="todo-list">
          {todos.map((todo, index) => (
            <li key={`${todo}${index}`}>
              <span>×</span>
              <label>{todo}</label>
            </li>
          ))}
        </ul>
        <p>Clear</p>
      </div>
    </div>
  );
};
