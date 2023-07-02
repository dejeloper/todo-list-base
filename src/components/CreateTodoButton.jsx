import "./CreateTodoButton.css";

export const CreateTodoButton = ({ params }) => {
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <div className="content-create-item">
      <button className="btn-create-item" onClick={handleClick}>
        Nueva Tarea
      </button>
    </div>
  );
};
