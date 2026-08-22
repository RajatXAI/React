import { useContext } from "react";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import { mockData } from "./data/mockData";
import Cart from "./components/Cart";
import { MyStore } from "./context/MyStore";

const App = () => {
  const { isCartOpen} = useContext(MyStore);
  const products = mockData;

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <Navbar />
      <div className="mx-auto max-w-7xl">
        {isCartOpen ? (
          <div>
            <Cart />
          </div>
        ) : (
          <>
            <h1 className="mb-8 text-3xl font-bold text-gray-900 mt-2">
              Products
            </h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
