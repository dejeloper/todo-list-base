import "./TodoItem.css";

export const TodoItem = ({ text, completed }) => {
  return (
    <li className="li-todo-item">
      <div className="content-todo-item">
        <span className={`check ${completed ? "c-completed" : ""}`}>✔</span>
        <p className={`p-todo-item ${completed ? "p-completed" : ""}`}>
          {text}
        </p>
      </div>
      <span className="close">✖</span>
    </li>
  );
};
