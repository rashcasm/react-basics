import { useState } from "react";
export default function App(){
  const [count, setCount] = useState(0);

  function CustomButton(props){
    function onClickHandler(){
      setCount(count + 1);
    }
    return (
      <button onClick={onClickHandler}>
        Counter {props.count}
      </button>
    )
  }

  return (
      <div>
        <CustomButton count={count} setCount={setCount}></CustomButton>
      </div>
  )
}