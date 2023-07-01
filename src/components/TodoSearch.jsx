import "./TodoSearch.css";

export const TodoSearch = ({ params }) => {
  return (
    <>
      <input
        className="input-text-todo"
        type="text"
        placeholder="Tarea pendiente"
      />
    </>
  );
};
