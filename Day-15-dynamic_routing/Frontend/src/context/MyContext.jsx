import { MyStore } from "../context/MyStore";
import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';


const ContextProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);

    let getProductsData = async ()=>{
    try {
      let res = await axios.get('http://localhost:3000/products');
      setProductsData(res.data.data);
    } catch (error) {
      console.log("Error in API", error);
    }
  }

  useEffect(()=>{
    getProductsData();
  },[]);

  return (
    <MyStore.Provider value={{ productsData, setProductsData }}>
      {children}
    </MyStore.Provider>
  );
};

export default ContextProvider;
