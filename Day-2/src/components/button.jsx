import { useState } from "react";


const Button = () =>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

   const handleSubmit = (e) =>{
       e.preventDefault(); 
       console.log(name, email)
   };

    return(

        <form onSubmit={handleSubmit}>
            <input
             type="text" 
             placeholder="Please Enter name"
             onChange={(e) => setName(e.target.value)}
             />

             <input 
             type="email"
             placeholder="Enter your Email"
             onChange={(e) => setEmail(e.target.value)}
             />

             <button type="submit">Submit</button>

        </form>
    )
}

export default Button