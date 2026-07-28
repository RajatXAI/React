import React from "react";
import { useEffect,useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  console.log("Render", count);

  useEffect(() => {
    console.log("Effect A", count);
  }, []);

  useEffect(() => {
    console.log("Effect B", count);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      click - {count}
    </button>
  );
}

export default App;