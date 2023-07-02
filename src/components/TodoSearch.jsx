import "./TodoSearch.css";

export const TodoSearch = ({ search, setSearch }) => {
  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <>
      <input
        className="input-text-todo"
        type="text"
        value={search}
        placeholder="Buscar en Tareas"
        onChange={handleChange}
      />
    </>
  );
};
