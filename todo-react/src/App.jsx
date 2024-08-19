import { useState } from "react";

function App() {
  function addtododo(){
    setTodos([...todosarray, {
      title: "new todo",
      desc: "new desc",
      done: false
    }]);
  }
  const [todosarray, setTodos] = useState([
    {
      title: "gym",
      desc: "go there",
      done: false
    },
    {
      title: "eat",
      desc: "stuff it",
      done: true
    }
  ]);

  return(
    <>
      {todosarray.map(function(todo){
        return <Todo title={todo.title} desc={todo.desc} done={todo.done} />
      })}
      <button onClick={addtododo}>Add a todo</button>
    </>
  );

}

function Todo(props){
  return (
    <div>
      <p>{props.title}</p>
      <span>{props.desc} </span>
      <button>{props.done ? "Done" : "Not Done"}</button>
    </div>
  )
}



export default App;
