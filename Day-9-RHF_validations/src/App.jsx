import { useState } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);

  const [editUser, setEditUser] = useState(null);

  const deleteUser = (id) => {
    let cards = users.filter((_, userId) => userId !== id);

    setUsers(cards);
  };

  const updateUser = (id) => {
    setEditUser(id);
    setToggle(false);
  };

  return (
    <div className="min-h-screen bg-[#0b1120] text-white p-4 sm:p-6">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex flex-col gap-6">

        {/* Navbar */}
        <Navbar setToggle={setToggle} />

        {/* Content */}
        {toggle ? (

          <section className="flex flex-col gap-6">

            {/* Heading */}
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm text-blue-400 font-medium">
                  Dashboard
                </p>

                <h1 className="text-2xl sm:text-3xl font-bold mt-1">
                  Users
                </h1>

                <p className="text-sm text-gray-400 mt-1">
                  Manage your users from one place.
                </p>
              </div>

              <div className="hidden sm:block px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg">
                <p className="text-xs text-gray-400">
                  Total Users
                </p>

                <p className="text-lg font-semibold text-white">
                  {users.length}
                </p>
              </div>
            </div>

            {/* Users Grid */}
            {users.length > 0 ? (

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {users.map((elem, index) => {
                  return (
                    <Usercard
                      key={index}
                      user={elem}
                      deleteUser={deleteUser}
                      updateUser={updateUser}
                      id={index}
                    />
                  );
                })}
              </div>

            ) : (

              /* Empty State */
              <div className="flex flex-col items-center justify-center min-h-[60vh] border border-dashed border-gray-700 rounded-2xl bg-gray-900/40">

                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gray-800 border border-gray-700 mb-4">
                  <span className="text-2xl">
                    👤
                  </span>
                </div>

                <h2 className="text-lg font-semibold">
                  No users yet
                </h2>

                <p className="text-sm text-gray-400 mt-1">
                  Create your first user to get started.
                </p>

                <button
                  onClick={() => setToggle(false)}
                  className="mt-5 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition cursor-pointer"
                >
                  + Create User
                </button>

              </div>
            )}

          </section>

        ) : (

          /* Form Section */
          <section className="min-h-[75vh] flex items-center justify-center">

            <Form
              key={editUser}
              setUsers={setUsers}
              setToggle={setToggle}
              users={users}
              editUser={editUser}
              setEditUser={setEditUser}
            />

          </section>

        )}

      </div>

    </div>
  );
};

export default App;