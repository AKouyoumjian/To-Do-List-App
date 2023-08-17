import { ListItem } from "./ListItem";

// makes the todo list being given the todos,
// and the toggle and delete todo functions
export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {
        // short-circuiting, if lenght===0, displays "No Todos"
        todos.length === 0 && "No Todos"
      }

      {todos.map((todo) => {
        return (
          <ListItem
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
