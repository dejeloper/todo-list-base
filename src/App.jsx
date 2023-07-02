import {
  CreateTodoButton,
  TodoCounter,
  TodoItem,
  TodoList,
  TodoSearch,
} from "./components";
import "./App.css";
import { useState } from "react";

const defaultTodos = [
  { text: "Lista 1", completed: true },
  { text: "Lista 2", completed: true },
  { text: "Lista 3", completed: true },
  { text: "Lista 4", completed: false },
  { text: "Lista 5", completed: true },
  { text: "Lista 6", completed: false },
  { text: "Lista 7", completed: false },
  { text: "Lista 8", completed: false },
  { text: "Lista 9", completed: true },
  { text: "Lista 10", completed: false },
  { text: "Lista 11", completed: true },
  { text: "Lista 12", completed: false },
  { text: "Lista 13", completed: true },
  { text: "Lista 14", completed: false },
  { text: "Lista 15", completed: true },
  { text: "Lista 16", completed: false },
  { text: "Lista 17", completed: true },
  { text: "Lista 18", completed: false },
  { text: "Lista 19", completed: true },
  { text: "Lista 20", completed: false },
  { text: "Lista 21", completed: true },
  { text: "Lista 22", completed: false },
  { text: "Lista 23", completed: true },
  { text: "Lista 24", completed: true },
];

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
