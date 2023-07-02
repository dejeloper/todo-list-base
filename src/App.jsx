import { useState } from "react";
import {
  CreateTodoButton,
  TodoCounter,
  TodoItem,
  TodoList,
  TodoSearch,
} from "./components";

import { defaultTodos } from "./services/todos";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");

  const completeTodos = todos.filter((todo) => todo.completed).length;
  const allTodos = todos.length;

  const searchTodos = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();

    return todoText.includes(searchText);
  });

  console.log(searchValue);
  return (
    <>
      <h1 style={{ fontSize: 28, textAlign: "center", margin: 0, padding: 24 }}>
        Todo List
      </h1>
      <TodoCounter completed={completeTodos} total={allTodos} />

      <div className="section-todo">
        <TodoSearch search={searchValue} setSearch={setSearchValue} />
        <CreateTodoButton />
        <TodoList>
          {searchTodos &&
            searchTodos.map(({ text, completed }) => (
              <TodoItem key={text} text={text} completed={completed} />
            ))}
        </TodoList>
      </div>
    </>
  );
}

export default App;
