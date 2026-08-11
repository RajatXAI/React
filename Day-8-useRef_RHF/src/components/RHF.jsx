import React from "react";
import { useForm } from "react-hook-form";

const RHF = () => {

    console.log("Rhf rendering")
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formData = (data) =>{

    console.log(data)
  }

  return (
    <div className="w-80 h-screen">
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(formData)} className="flex flex-col gap-4 bg-white p-4 rounded-md shadow-md">
        <input
          {...register("productName")}
          className="p-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="Product name"
        />
        <input
          {...register("price")}
          className="p-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="Price"
        />
        <input
          {...register("category")}
          className="p-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="Category"
        />
        <input
          {...register("image")}
          className="p-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="Image URL"
        />
        <button className="p-2 text-white bg-blue-500 rounded-md cursor-pointer hover:scale-96 transition-all ease-in">
          Create
        </button>
      </form>
    </div>
  );
};

export default RHF;
