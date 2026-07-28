import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Usercard from "./components/Usercard";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);

  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center gap-2">
      {toggle ? (
        // <Login setToggle={setToggle} users={users} />
        users.map((elem, index) => <Usercard key={index} user={elem}/>)
      ) : (
        <Register setUsers={setUsers} setToggle={setToggle} />
      )}
    </div>
  );
};

export default App;
