// //* useState Understanding program logic how to values destructure and how they print values and also update value for each click

// let globalState;

// function useState(initialValue) {
//   //* initial setup
//   if (globalState === undefined) {
//     globalState = initialValue;
//   }

//   //* update function
//   function setState(updateFn) {
//     //* 🔥 important: function run karke new value nikalte hain
//     globalState = updateFn(globalState);
//   }

//   return [globalState, setState];
// }

// //* Component simulate kar rahe hain
// function Component() {
//   const [count, setCount] = useState(0);

//   console.log("Render:", count);

//   return {
//     click: () => {
//       //* 🔥 function form (prev)
//       setCount(prev => prev + 1);

//       //* re-render simulate
//       Component();
//     }
//   };
// }

// //* app run
// const app = Component();

// app.click(); // Render: 1
// app.click(); // Render: 2
// app.click(); // Render: 3
// app.click(); // Render: 4


// let incBtn = document.querySelector(".increment")
// let decBtn = document.querySelector(".decrement")
// let resetBtn = document.querySelector(".reset")
// let count = document.querySelector(".counter")


// function updateCount(){

//   let countVaule = 0

//   return{

//     increment:() =>{
//       return ++countVaule
//     },
//     decrement:() =>{
//       return --countVaule
//     },
//     reset:() =>{
//       return countVaule = 0
//     }
//   }
// }

// let counter = updateCount()

// incBtn.addEventListener("click",()=>{
//   count.textContent = counter.increment() 
// })
// decBtn.addEventListener("click",()=>{
//   count.textContent = counter.decrement() 
// })
// resetBtn.addEventListener("click",()=>{
//   count.textContent = counter.reset() 
// })




  
    // let incBtn = document.querySelector(".increment")
    // let decBtn = document.querySelector(".decrement")
    // let resetBtn = document.querySelector(".reset")
    // let countEl = document.querySelector(".counter")

    // function createCounter(onChange) {
    //   let countValue = 0

    //   function notify() {
    //     onChange(countValue)
    //   }

    //   return {
    //     increment: () => {
    //       countValue++
    //       notify()
    //     },
    //     decrement: () => {
    //       countValue--
    //       notify()
    //     },
    //     reset: () => {
    //       countValue = 0
    //       notify()
    //     }
    //   }
    // }

    // // 🔥 UI auto update system
    // let counter = createCounter(function (value){
    //   countEl.textContent = value

    // })

    // // 🎯 Events
    // incBtn.addEventListener("click", () => {
    //   counter.increment()
    // })

    // decBtn.addEventListener("click", () => {
    //   counter.decrement()
    // })

    // resetBtn.addEventListener("click", () => {
    //   counter.reset()
    // })


    // function App() {
    //   const [count, setCount] = React.useState(0)

    //   return (
    //     <>
    //       <h1>{count}</h1>

    //       <button onClick={() => setCount(count + 1)}>+</button>
    //       <button onClick={() => setCount(count - 1)}>-</button>
    //       <button onClick={() => setCount(0)}>Reset</button>
    //     </>
    //   )
    // }

    // ReactDOM.createRoot(document.getElementById("root")).render(<App />)


// function App() {
//   const [count, setCount] = React.useState(0)

//   console.log("Render hua")

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => {
//         setCount(count + 1)
//         setCount(count + 1)
//       }}>
//         Click
//       </button>
//     </>
//   )
// }

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = React.useState(false)

//   return (
//     <>
//       <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//         Toggle
//       </button>

//       {isLoggedIn ? (
//         <h1>Welcome Back 🔥</h1>
//       ) : (
//         <h1>Please Login</h1>
//       )}
//     </>
//   )
// }



// function App() {
//   const [inputValue, setInputValue] = React.useState("");
//   const [items, setItems] = React.useState([]);

//   const handleAdd = () => {
//     if (inputValue.trim() === "") return;

//     setItems([...items, inputValue]); // add to array
//     setInputValue(""); // clear input
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />

//       <button onClick={handleAdd}>Add</button>

//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//     </div>
//   );
// }



function App() {
  return (
    <div className="card_container">
      <Card name="Alex" url="https://images.unsplash.com/photo-1709004915865-38bc70f4cb78?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D" />
      <Card name="John" url="https://images.unsplash.com/photo-1722019567841-fa4d11c8bab7?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card name="Lovis" url="https://plus.unsplash.com/premium_photo-1661320855864-83c4abaf87ae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVsJTIwbWFufGVufDB8fDB8fHww" />
      <Card name="Lorendo" url="https://images.unsplash.com/photo-1618001789159-ffffe6f96ef2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwbWFufGVufDB8fDB8fHww" />
      <Card name="Tornado" url="https://images.unsplash.com/photo-1723538494462-23f317794d7b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsJTIwbWFufGVufDB8fDB8fHww" />
      <Card name="Lona" url="https://images.unsplash.com/photo-1649650892732-3563cd59dfb2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsJTIwbWFufGVufDB8fDB8fHww" />
    </div>
  );
}

function Card({ name, url }) {
  return (
    <div className="card">
      <img src={url} alt={name} />
      <div className="bottom">
        <h2>{name}</h2>
        </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

