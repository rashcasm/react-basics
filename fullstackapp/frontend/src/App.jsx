import { useState, useEffect } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todosarray, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      })
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  const handleTodoAdded = (newTodo) => {
    setTodos([...todosarray, newTodo]);
  };

  const handleCompleteTodo = (id) => {
    // Mark the todo as completed and update the state (you might also want to update it in the backend)
    const updatedTodos = todosarray.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <CreateTodo onTodoAdded={handleTodoAdded} />
      <h3>Added Todos</h3>
      <Todos todosarray={todosarray} onComplete={handleCompleteTodo} />
    </>
  );
}

export default App;