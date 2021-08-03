import React, { useState } from "react";
import "./App.scss";

export const App: React.FC = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState<string>("");

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  return (
    <div className="main">
      <h1>TO-DO LIST</h1>
      <form id="add">
        <input
          type="text"
          placeholder="new task"
          value={task}
          onChange={(e) => onChangeForm(e)}
        />
        <input type="submit" value="ADD" />
      </form>
      <div className="tasksBoard">
        <ul id="todo-list">
          {todos.map((todo, index) => (
            <li key={`${todo}${index}`}>
              <span>×</span>
              <label>{todo.task}</label>
            </li>
          ))}
        </ul>
        <p>Clear</p>
      </div>
    </div>
  );
};
