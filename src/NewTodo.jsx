// This component makes a new Todo item, handling the submission and adding it to the list.
import { useState } from "react";

export function NewTodo({ addTodo }) {
  // new item and function to update new item
  const [newItem, setNewItem] = useState("");

  // function to handle submission of new todo
  function handleSubmission(e) {
    e.preventDefault();

    // if there is no new item yet, just return
    if (newItem === "") {
      return;
    }

    // this function is passed in the function, addTodo, from App.jsx
    // this is a passed down prop.
    addTodo(newItem);

    // now that a todo has been submitted, clear the newItem box
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmission} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item"> Enter New Item</label>
        <input
          value={newItem}
          // update the value of input to be whats typed
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn"> Add </button>
    </form>
  );
}
