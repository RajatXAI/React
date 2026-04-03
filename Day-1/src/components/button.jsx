import {useState} from "react"


let Counter = () => {

    const [count, setCount] = useState(0);

    const increase = () =>{
        setCount(prev => prev + 1)
    }

    const decrease = () =>{
        setCount(prev => prev - 1)
    }

  return (
    <>
      <h1>{count}</h1>  
      <button onClick = {increase}>Increase</button>
      <button onClick = {decrease}>decrease</button>
    </>
  );
};

export default Counter