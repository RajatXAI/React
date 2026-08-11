import React from "react";
import { useRef ,useState } from "react";

const Form = () => {

  const [products, setProducts] = useState({})
  console.log(products)
   
  const formRef = useRef({})
  console.log(formRef)

  const handleSubmit = (e)=>{

    e.preventDefault();

    let formData ={

      productName: formRef.current.productName.value,
      price: formRef.current.price.value,
      category: formRef.current.category.value,
      image: formRef.current.imageURL.value,
    }

    setProducts(formData);
  }


  return (
    <div className="w-80 h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-4 rounded-md shadow-md">
        <input
          ref={(e) => formRef.current.productName = e}
          className="p-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="Product name"
        />
        <input
          ref={(e) => formRef.current.price = e}
          className="p-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="Price"
        />
        <span>Select category: </span>
        <select
          ref={(e) => formRef.current.category = e}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="MENS">Mens</option>
          <option value="WOMENS">Womens</option>
          <option value="KIDS">Kids</option>
        </select>
        <input
          ref={(e) => formRef.current.imageURL = e}
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

export default Form;
