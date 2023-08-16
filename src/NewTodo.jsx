import { useState } from "react";

export function NewTodo({addTodo}) {
  // new item and function to update new item
  const [newItem, setNewItem] = useState("")

  // function to handle submission of new todo
  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;


    // this function is passed in the function, addTodo, from App.jsx
    // this is a passed down prop.
    addTodo(newItem);


    // now that a todo has been submitted, clear the newItem box
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item"> New Item</label>
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
