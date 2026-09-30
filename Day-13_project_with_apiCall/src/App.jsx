import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { ProductStore } from "./context/ProductStore";
import Navbar from "./components/Navbar";
import ProductsCard from "./components/ProductsCards";
import CartScreen from "./pages/CartScreen";
import { Toaster } from "sonner";
// import { mockData } from "./data/mockData";

const App = () => {
  const { isCartOpen, cartItems } = useContext(ProductStore);

  const [products, setProducts] = useState([]);
  console.log(products);

  // useEffect(() => {
  //   setProducts(mockData);
  // }, []);

  console.log("cartItems:", cartItems);

  const getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="bg-[#f3f6f4] min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <Navbar />
      {isCartOpen ? (
        <div className="">
          <CartScreen />
        </div>
      ) : (
        <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((elem) => {
            let isInCart = cartItems.find((val) => val.id === elem.id);

            return (
              <ProductsCard key={elem.id} product={elem} isInCart={isInCart} />
            );
          })}
        </div>
      )}
      <Toaster
        position="top-right"
        expand={false}
        richColors={false}
        closeButton={false}
      />
    </div>
  );
};

export default App;
