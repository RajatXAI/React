const Usercard = ({ user, deleteUser, updateUser, id }) => {
  return (
    <div className="group w-full overflow-hidden rounded-2xl border border-gray-700/70 bg-gray-800/70 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 hover:bg-gray-800">

      {/* User Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          src={user.image}
          alt={user.name}
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

        {/* User Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            User
          </span>
        </div>
      </div>

      {/* User Information */}
      <div className="flex flex-col gap-4 p-4">

        <div className="min-w-0">
          <h2 className="truncate text-lg font-semibold text-white">
            {user.name}
          </h2>

          <p className="mt-1 truncate text-sm text-gray-400">
            Email : {user.email}
          </p>

          <p className="mt-1 text-sm text-gray-400">
            Contact : +91 {user.mobile}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 border-t border-gray-700/70 pt-4">

          <button
            onClick={() => updateUser(id)}
            className="flex-1 rounded-lg border border-yellow-500/90 bg-yellow-500/10 px-3 py-2 text-sm font-medium text-yellow-400 transition hover:bg-yellow-500 hover:text-white active:scale-95 cursor-pointer"
          >
            Update
          </button>

          <button
            onClick={() => deleteUser(id)}
            className="flex-1 rounded-lg border border-red-500/90 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500 hover:text-white active:scale-95 cursor-pointer"
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  );
};

export default Usercard;