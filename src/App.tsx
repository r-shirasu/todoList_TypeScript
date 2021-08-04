import React, { useState } from "react";
import "./App.scss";

interface Todo {
  description: string;
}

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState("");

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const newToDo: Todo = {
    description: task,
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([newToDo, ...todos]);
  };

  return (
    <div className="main">
      <h1>TO-DO LIST</h1>
      <form onSubmit={handleSubmit} id="add">
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
              <label>{todo.description}</label>
            </li>
          ))}
        </ul>
        <p>Clear</p>
      </div>
    </div>
  );
};
