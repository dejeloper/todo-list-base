import {
  CreateTodoButton,
  TodoCounter,
  TodoItem,
  TodoList,
  TodoSearch,
} from "./components";
import "./App.css";

const defaultTodos = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    completed: true,
  },
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
  { text: "Lista 10", completed: false },
  { text: "Lista 21", completed: true },
  { text: "Lista 22", completed: false },
  { text: "Lista 23", completed: true },
  { text: "Lista 24", completed: true },
];

function App() {
  return (
    <>
      <h1 style={{ fontSize: 28, textAlign: "center", margin: 0, padding: 24 }}>
        Todo List
      </h1>
      <TodoCounter completed={3} total={10} />

      <div className="section-todo">
        <TodoSearch />
        <CreateTodoButton />
        <TodoList>
          {defaultTodos &&
            defaultTodos.map(({ text, completed }) => (
              <TodoItem key={text} text={text} completed={completed} />
            ))}
        </TodoList>
      </div>
    </>
  );
}

export default App;
