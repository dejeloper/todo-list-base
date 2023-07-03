import "./TodoItem.css";

export const TodoItem = ({ text, completed, onComplete, onDelete }) => {
  return (
    <li className="li-todo-item">
      <div className="content-todo-item">
        <span
          className={`check ${completed ? "c-completed" : ""}`}
          onClick={onComplete}
        >
          ✔
        </span>
        <p className={`p-todo-item ${completed ? "p-completed" : ""}`}>
          {text}
        </p>
      </div>
      <span className="close" onClick={onDelete}>
        ✖
      </span>
    </li>
  );
};
