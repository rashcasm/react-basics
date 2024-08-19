export function Todos({ todosarray, onComplete }) {
    return (
      <div>
        {todosarray.map((todo) => (
          <div key={todo.id}>
            <p>{todo.title} - {todo.description}</p>
            <button onClick={() => onComplete(todo.id)}>
              {todo.completed ? "Completed" : "Mark as completed"}
            </button>
          </div>
        ))}
      </div>
    );
  }