import { MyStore } from "../context/MyStore";
import { useContext } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { productsData } = useContext(MyStore);

  console.log(productsData);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {productsData.map((elem) => {
        return <ProductCard key={elem.id} productsData={elem} />;
      })}
    </div>
  );
};

export default Products;
