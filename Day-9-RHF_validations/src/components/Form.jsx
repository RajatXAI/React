import { useForm } from "react-hook-form";

const Form = ({ setUsers, setToggle, users, editUser, setEditUser }) => {
  const emptyUser = {
    name: "",
    email: "",
    mobile: "",
    image: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",

    defaultValues:
      editUser !== null
        ? (users.find((user) => user.id === editUser) ?? emptyUser)
        : emptyUser,
  });

  const formSubmit = (data) => {
    // CREATE USER
    if (editUser === null) {
      setUsers([...users, { id: crypto.randomUUID(), ...data  }]);
    }

    // UPDATE USER
    else {
      setUsers(
        users.map((user) =>
          user.id === editUser ? { ...data, id: editUser } : user,
        ),
      );
    }

    reset();
    setEditUser(null);
    setToggle(true);
  };

  const inp = (err) =>
    `w-full rounded-lg border bg-gray-900/70 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-gray-500 ${
      err
        ? "border-red-500 focus:border-red-500"
        : "border-gray-700 focus:border-blue-500"
    }`;

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
        autoComplete="on"
        className="flex flex-col gap-5 rounded-2xl border border-gray-700/70 bg-gray-800/80 p-6 shadow-2xl shadow-black/30 backdrop-blur-md"
      >
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-200">
            Name
          </label>

          <input
            {...register("name", {
              required: "Name is required",
            })}
            id="name"
            autoComplete="name"
            className={inp(errors.name)}
            type="text"
            placeholder="Enter user name"
          />

          {errors.name && (
            <p className="text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-200">
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
            id="email"
            autoComplete="email"
            className={inp(errors.email)}
            type="email"
            placeholder="Enter email address"
          />

          {errors.email && (
            <p className="text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>

        {/* Mobile */}
        <div className="flex flex-col gap-2">
          <label htmlFor="mobile" className="text-sm font-medium text-gray-200">
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

              pattern: {
                value: /^[0-9]+$/,
                message: "Mobile number must contain only digits",
              },
            })}
            id="mobile"
            autoComplete="tel"
            className={inp(errors.mobile)}
            type="tel"
            placeholder="Enter mobile number"
          />

          {errors.mobile && (
            <p className="text-xs text-red-400">{errors.mobile.message}</p>
          )}
        </div>

        {/* Image */}
        <div className="flex flex-col gap-2">
          <label htmlFor="image" className="text-sm font-medium text-gray-200">
            Profile Image
          </label>

          <input
            {...register("image", {
              required: "Image URL is required",
            })}
            id="image"
            autoComplete="off"
            className={inp(errors.image)}
            type="url"
            placeholder="Paste image URL"
          />

          {errors.image && (
            <p className="text-xs text-red-400">{errors.image.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-1 w-full cursor-pointer rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 active:scale-[0.98]"
        >
          {editUser === null ? "Add User" : "Update User"}
        </button>
      </form>
    </div>
  );
};

export default Form;
