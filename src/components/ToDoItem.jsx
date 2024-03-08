export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li className={`todo-li ${completed ? "completed-chore" : ""}`}>
      <label className="checkbox-label">
        <input
          type="checkbox"
          className="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />{" "}
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="button card-button">
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  );
}
