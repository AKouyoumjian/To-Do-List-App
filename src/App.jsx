import { useEffect } from "react";
import { useState } from "react";
import { NewTodo } from "./NewTodo";
import "./styles.css";
import { TodoList } from "./TodoList";

export default function App() {

  // check local storage.
  const [todos, setTodos] = useState(() => {
    const localSaved = localStorage.getItem("ITEMS")

    // if localStorage is empty aka null, return []
    if (localSaved == null) {
      return [];
    } else { // otherwise parse it and return that
      return JSON.parse(localSaved);
    }
  });

  // every time todos change, this is run setting the items in local storage
  // to the todo.
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  })

  // this function adds a todo to the list
  function addTodo(title) {
    // sets the todos
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  // function to toggle todo's checkbox
  function toggleTodo(id, completed) {
    // since we cannot mutate a todo, we (reset) set all todos again
    setTodos(currentTodos => {
      // map through each todo
      return currentTodos.map(todo => {
        // for each todo, if the id matches to the one clicked, we make the change
        if (todo.id === id) {
          // cannot mutate the state since it is immutable, so much make new todo
          return {...todo, completed}
        }
        // if doesnt match, return todo as is
        return todo
      })
    })
  }

  // function to delete a todo
  function deleteTodo(id) {
    setTodos(currentTodos => {
      // go through each todo and filter, only keeping those that !== id
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    //passing in broken up components
    //fragment used to return multiple elements for component
    <>
      <NewTodo addTodo={addTodo} />

      <h1 className="header"> Todo List </h1>

      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
