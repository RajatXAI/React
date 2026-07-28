import { useState } from "react";

const Register = ({ setToggle, setUsers }) => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    url: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]:value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prev) => [...prev, formData]);
    setFormData({
      username: "",
      email: "",
      password: "",
      url: ""
    });
  } 

  return (
    <div className="bg-white w-90 p-6 rounded-xl flex flex-col gap-4">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          required
          value={formData.username || ""}
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
