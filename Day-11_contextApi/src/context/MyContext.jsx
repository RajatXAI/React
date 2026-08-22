import { useState } from "react";
import { MyStore } from "./MyStore";

const ContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false); // toggle here
  const [cartItems, setCartItems] = useState([]);

  return (
    <MyStore.Provider
      value={{ isCartOpen, setIsCartOpen, cartItems, setCartItems }}
    >
      {children}
    </MyStore.Provider>
  );
};

export default ContextProvider;
