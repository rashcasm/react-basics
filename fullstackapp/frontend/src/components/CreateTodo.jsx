import { useState } from "react";

export function CreateTodo({ onTodoAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function clickHandler() {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: { "Content-type": "application/json" },
    }).then(async function (res) {
      const json = await res.json();
      alert("Todo Added");
      onTodoAdded(json);  // Update the todos list
    });
  }

  return (
    <div>
      <input
        style={{ padding: 5, margin: 5 }}
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        style={{ padding: 5, margin: 5 }}
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button style={{ padding: 5, margin: 5 }} onClick={clickHandler}>
        Create
      </button>
    </div>
  );
}