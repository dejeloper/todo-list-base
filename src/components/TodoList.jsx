import "./TodoList.css";

export const TodoList = ({ children }) => {
  return (
    <div className="div-todo-list">
      <ul className="ul-todo-list">{children}</ul>
    </div>
  );
};
