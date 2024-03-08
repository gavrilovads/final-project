import { useEffect, useState } from "react";
import { NewTodoForm } from "../components/ToDoForm";
import { TodoList } from "../components/ToDoList";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

export default function ToDoPage() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <Header />
      <div className="to-do-page single-page">
        <NewTodoForm onSumbit={addTodo} />
        <div className="section-header cinzel-decorative-bold">
          Wedding Planning Checklist
        </div>
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
      <img
        src="./src/assets/greenery-2.svg"
        alt="greenery"
        className="greenery-right"
      />
      <Footer />
    </>
  );
}
