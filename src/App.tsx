import React, { useState } from "react";
import "./App.scss";

interface Todo {
  description: string;
}

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState("");
  const [isShowAlertMessage, setIsShowMessage] = useState(false);

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const newToDo: Todo = {
    description: task,
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (task === "") {
      setIsShowMessage(true);
      return;
    }

    setIsShowMessage(false);
    setTodos([newToDo, ...todos]);
    setTask("");
  };

  const clearAllTodos = () => {
    setTodos([]);
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
      {isShowAlertMessage && (
        <div className="alertMessage">Todoを入力してください</div>
      )}
      <div className="tasksBoard">
        <ul id="todo-list">
          {todos.map((todo, index) => (
            <li key={`${todo}${index}`}>
              <span>×</span>
              <label>{todo.description}</label>
            </li>
          ))}
        </ul>
        <p onClick={clearAllTodos}>Clear</p>
      </div>
    </div>
  );
};
