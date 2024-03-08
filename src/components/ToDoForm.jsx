import { useState } from "react";

export function NewTodoForm({ onSumbit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;
    onSumbit(newItem);

    setNewItem("");
  }

  return (
    <>
      <div className="new-item-form-wrapper">
        <form onSubmit={handleSubmit} className="new-item-form">
          <div className="todo-form-row">
            {/* <label htmlFor="item">New chore</label> */}
            <input
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              type="text"
              id="item"
              className="form-input todo-input"
              placeholder="New chore"
            />
          </div>
          <button className="button primary-button">Add chore</button>
        </form>
      </div>
    </>
  );
}
