import { useState } from "react";

const Register = ({ setToggle, setUsers }) => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    url: ""
  });

  console.log(formData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]:value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers( prev => [...prev, formData]);
    setFormData({
      username: "",
      email: "",
      password: "", 
      url: ""
    }); // Reset the form after submission, jese hi form submit ho jaye to form ke andar ka data reset ho jaye, aur empty ho jaye
  } 

  return (
    <div className="bg-white w-90 p-6 rounded-xl flex flex-col gap-4">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          required
          value={formData.username || ""} // two way binding, isme value tag add ho jata hai or phir react ke pass control aa jata hai or yehi controlled component kehlata hai, isme value tag ke andar formData.username ka value aa jata hai, or jab bhi user input deta hai to handleChange function call hota hai, or formData ke andar ka value update ho jata hai, or yehi two way binding kehlata hai
          name="username"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Username"
        />
        <input
          required
          value={formData.email || ""} 
          name="email"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="email"
          placeholder="Email"
        />
        <input
          required
          value={formData.password || ""}
          name="password"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="password"
          placeholder="Password"
        />
        <input
          required
          value={formData.url || ""}
          name="url"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="url"
          placeholder="URL"
        />
        <button className="p-2 bg-blue-600 text-white rounded cursor-pointer">
          Register
        </button>
      </form>
      <p>
        Already have an Account?{" "}
        <span
          onClick={() => setToggle((prev) => !prev)}
          className="text-blue-500 cursor-pointer"
        >
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;

// State Lifting Up ka concept yaha aase pura ho raha hai jo user hai voh ish register form se set karke APP me bheja ja raha hai or APP ushi user ko userCard ko bhej raha raha hai or props hamesa parent-child relation me hote hai isliye setUser APP ko diya or register se data leke Card me bhej diya 