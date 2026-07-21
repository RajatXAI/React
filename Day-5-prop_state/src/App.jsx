import React, { useState } from "react";
import Products from "./Components/Products";

const App = () => {

  const [productsData, setProductsData] = useState([
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      name: "Nike Air Max",
      category: "Shoes",
      price: "₹4,999",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      name: "Rolex Classic",
      category: "Watch",
      price: "₹12,499",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
      name: "iPhone 15 Pro",
      category: "Mobile",
      price: "₹1,29,999",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      name: "Sony WH-1000XM5",
      category: "Headphones",
      price: "₹29,999",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500",
      name: "Adidas Runner",
      category: "Shoes",
      price: "₹5,499",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
      name: "RayBan Aviator",
      category: "Sunglasses",
      price: "₹8,499",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
      name: "Apple Watch",
      category: "Smart Watch",
      price: "₹42,999",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500",
      name: "Canon EOS M50",
      category: "Camera",
      price: "₹58,999",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=500",
      name: "MacBook Air",
      category: "Laptop",
      price: "₹99,999",
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500",
      name: "Mechanical Keyboard",
      category: "Accessories",
      price: "₹6,999",
    },
    {
      id: 11,
      image:
        "https://images.unsplash.com/photo-1585386959984-a41552231658?w=500",
      name: "Gaming Mouse",
      category: "Accessories",
      price: "₹2,999",
    },
    {
      id: 12,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
      name: "Puma Hoodie",
      category: "Clothing",
      price: "₹2,499",
    },
    {
      id: 13,
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500",
      name: "Levi's Jacket",
      category: "Clothing",
      price: "₹4,299",
    },
    {
      id: 14,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500",
      name: "Backpack Pro",
      category: "Bags",
      price: "₹3,499",
    },
    {
      id: 15,
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500",
      name: "Leather Wallet",
      category: "Accessories",
      price: "₹1,899",
    },
    {
      id: 16,
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: "₹4,999",
    },
    {
      id: 17,
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500",
      name: "Gaming Chair",
      category: "Furniture",
      price: "₹11,999",
    },
    {
      id: 18,
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?w=500",
      name: "Study Lamp",
      category: "Home Decor",
      price: "₹1,599",
    },
    {
      id: 19,
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
      name: "DSLR Camera",
      category: "Camera",
      price: "₹74,999",
    },
    {
      id: 20,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      name: "Running Shoes",
      category: "Shoes",
      price: "₹3,999",
    },
  ])

  const deleteProduct = (id) =>{

    let products = productsData.filter((elem) => elem.id !== id);

    setProductsData(products)
  }

  console.log(productsData);
  return (
    <div className="product">
      {productsData.map((elem) => {
        return <Products key={elem.id} products={elem} del={deleteProduct}/>;
      })}
    </div>
  );
};

export default App;
