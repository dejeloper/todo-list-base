import "./TodoCounter.css";

export const TodoCounter = ({ total, completed }) => {
  return (
    <div className="content-todo-counter">
      {completed === total ? (
        <>
          <h2 className="title-todo-counter">
            Felicitaciones!
            <br />
            Completaste tus {total} TODOs 🥳 🎉🎉
          </h2>
        </>
      ) : (
        <h2 className="title-todo-counter">
          Has completado <span>{completed}</span> de <span>{total}</span> tareas
        </h2>
      )}
    </div>
  );
};
