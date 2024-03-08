import { TodoItem } from "./ToDoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.length === 0 && (
        <div className="no-todos">
          You either never startded or the most efficient wedding planner
        </div>
      )}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
