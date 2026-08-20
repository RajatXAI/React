const Navbar = ({ setToggle }) => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800/80 border border-gray-700 rounded-xl shadow-lg backdrop-blur-md">

      {/* Profile */}
      <div className="flex items-center gap-3">
        <img
          className="w-10 h-10 rounded-full object-cover border-2 border-gray-600"
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlc3xlbnwwfHwwfHx8Mg%3D%3D"
          alt="User"
        />

        <div className="hidden sm:block">
          <h2 className="text-sm font-semibold text-white">
            User Manager
          </h2>

          <p className="text-xs text-gray-400">
            Dashboard
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">

        <p
          onClick={() => setToggle(false)}
          className="cursor-pointer hover:text-blue-400 transition"
        >
          Home
        </p>

        <p
          className="cursor-pointer hover:text-blue-400 transition"
        >
          About
        </p>

        <p
          onClick={() => setToggle(true)}
          className="cursor-pointer hover:text-blue-400 transition"
        >
          Users
        </p>

      </div>

      {/* Create User */}
      <button
        onClick={() => setToggle(false)}
        className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 active:scale-95 rounded-lg text-sm font-medium text-white shadow-md shadow-blue-600/20 transition-all duration-200 cursor-pointer"
      >
        + Create User
      </button>

    </nav>
  );
};

export default Navbar;