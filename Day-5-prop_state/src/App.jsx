import React, { useState } from "react";
import Products from "./Components/Products";
import { mockData } from "./data/mockData";

const App = () => {

  const [productsData, setProductsData] = useState(mockData);

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
