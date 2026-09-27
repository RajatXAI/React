import axios from "axios";
import Navbar from "./components/Navbar";
import ProductsCards from "./components/ProductsCards";
import { useEffect, useState } from "react";

const App = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        if (isMounted) setProductsData(res.data);
      })
      .catch(() => {
        if (isMounted)
          setError("We couldn't load the products. Please try again.");
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f3f6f4] text-[#172b2b]">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-7 flex flex-wrap items-end justify-between gap-3 border-b border-[#d9e2df] pb-5">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#39766c]">
              The collection
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Latest products
            </h1>
          </div>
          {!isLoading && !error && (
            <p className="text-sm text-[#59706c]">
              {productsData.length} products
            </p>
          )}
        </header>

        {isLoading ? (
          <p className="py-16 text-center text-[#59706c]" role="status">
            Loading products...
          </p>
        ) : error ? (
          <p className="py-16 text-center text-[#a43d32]" role="alert">
            {error}
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {productsData.map((product) => (
              <ProductsCards key={product.id} products={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
