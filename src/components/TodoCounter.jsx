import "./TodoCounter.css";

export const TodoCounter = ({ total, completed }) => {
  return (
    <div className="content-todo-counter">
      <h2 className="title-todo-counter">
        Has completado <span>{completed}</span> de <span>{total}</span> tareas
      </h2>
    </div>
  );
};
