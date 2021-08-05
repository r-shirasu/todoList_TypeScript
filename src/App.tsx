import React, { useState } from "react";
import "./App.scss";

type Todo = {
  description: string;
  isChecked: boolean;
};

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState("");
  const [isShowAlertMessage, setIsShowMessage] = useState(false);

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const newToDo: Todo = {
    description: task,
    isChecked: false,
  };

  // todo追加機能
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

  // クリア機能
  const clearAllTodos = () => {
    setTodos([]);
  };

  // 特定のtodoを削除する機能
  const handleOnDelete = (index: any) => {
    const deleteArr = todos.filter((_, id) => {
      return id !== index;
    });
    setTodos(deleteArr);
  };

  // チェック機能
  const handleOnCheck = (index: any) => {
    const checkedTodos = todos.map((todo, _index) => {
      if (_index !== index) {
        return todo;
      }
      return {
        description: todo.description,
        isChecked: !todo.isChecked,
      };
    });
    setTodos(checkedTodos);
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
              <span onClick={() => handleOnDelete(index)}>×</span>
              <label className={todo.isChecked ? "checked" : ""}>
                <input
                  type="checkbox"
                  checked={todo.isChecked}
                  name="check"
                  onChange={() => handleOnCheck(index)}
                />
                {todo.description}
              </label>
            </li>
          ))}
        </ul>
        <p onClick={clearAllTodos}>Clear</p>
      </div>
    </div>
  );
};
