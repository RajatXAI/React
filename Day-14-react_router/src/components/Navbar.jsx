import { NavLink, Navigate } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between m-4">
      <h1>Logo</h1>
      <div className="flex items-center gap-6 justify-between">
        <NavLink to={"/"}>Home</NavLink>

        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "text-black"
          }
        >
          About
        </NavLink>

        <NavLink to={"/contact"}>Contact</NavLink>
      </div>
      <button>Login</button>
    </nav>
  );
};

export default Navbar;
