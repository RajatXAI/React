import { useForm } from "react-hook-form";

const Form = ({
  setUsers,
  setToggle,
  users,
  editUser,
  setEditUser,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",

    defaultValues:
      editUser !== null
        ? users[editUser]
        : {
            name: "",
            email: "",
            mobile: "",
            image: "",
          },
  });

  const formSubmit = (data) => {
    if (editUser === null) {
      setUsers((prev) => [...prev, data]);
    } else {
      setUsers((prev) =>
        prev.map((user, index) =>
          index === editUser ? data : user
        )
      );
    }

    reset();
    setEditUser(null);
    setToggle(true);
  };

  return (
    <div className="w-full max-w-md">

      {/* Form Header */}
      <div className="mb-5 text-center">
        <p className="text-sm font-medium text-blue-400">
          {editUser === null ? "New User" : "Edit User"}
        </p>

        <h1 className="mt-1 text-2xl font-bold text-white">
          {editUser === null ? "Create User" : "Update User"}
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          {editUser === null
            ? "Add a new user to your dashboard."
            : "Update the user's information below."}
        </p>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex flex-col gap-5 rounded-2xl border border-gray-700/70 bg-gray-800/80 p-6 shadow-2xl shadow-black/30 backdrop-blur-md"
      >

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-200">
            Name
          </label>

          <input
            {...register("name", {
              required: "Name is required",
            })}
            className={`w-full rounded-lg border bg-gray-900/70 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-gray-500 ${
              errors.name
                ? "border-red-500 focus:border-red-500"
                : "border-gray-700 focus:border-blue-500"
            }`}
            type="text"
            placeholder="Enter user name"
          />

          {errors.name && (
            <p className="text-xs text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-200">
            Email
          </label>

          <input
            {...register("email", {
              required: "Email is required",

              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email",
              },
            })}
            className={`w-full rounded-lg border bg-gray-900/70 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-gray-500 ${
              errors.email
                ? "border-red-500 focus:border-red-500"
                : "border-gray-700 focus:border-blue-500"
            }`}
            type="email"
            placeholder="Enter email address"
          />

          {errors.email && (
            <p className="text-xs text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Mobile */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-200">
            Mobile
          </label>

          <input
            {...register("mobile", {
              required: "Mobile is required",

              minLength: {
                value: 10,
                message: "Minimum 10 digits are required",
              },

              maxLength: {
                value: 10,
                message: "Maximum 10 digits are required",
              },
            })}
            className={`w-full rounded-lg border bg-gray-900/70 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-gray-500 ${
              errors.mobile
                ? "border-red-500 focus:border-red-500"
                : "border-gray-700 focus:border-blue-500"
            }`}
            type="tel"
            placeholder="Enter mobile number"
          />

          {errors.mobile && (
            <p className="text-xs text-red-400">
              {errors.mobile.message}
            </p>
          )}
        </div>

        {/* Image */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-200">
            Profile Image
          </label>

          <input
            {...register("image", {
              required: "Image URL is required",
            })}
            className={`w-full rounded-lg border bg-gray-900/70 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-gray-500 ${
              errors.image
                ? "border-red-500 focus:border-red-500"
                : "border-gray-700 focus:border-blue-500"
            }`}
            type="url"
            placeholder="Paste image URL"
          />

          {errors.image && (
            <p className="text-xs text-red-400">
              {errors.image.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-1 w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 active:scale-[0.98] cursor-pointer"
        >
          {editUser === null ? "Add User" : "Update User"}
        </button>

      </form>
    </div>
  );
};

export default Form;