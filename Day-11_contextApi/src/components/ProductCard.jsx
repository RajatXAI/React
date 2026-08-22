import { useContext } from "react";
import { MyStore } from "../context/MyStore";

const ProductCard = ({ product }) => {

  let {setCartItems} = useContext(MyStore);
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Product Image */}
      <div className="relative h-60 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur">
          {product.category}
        </span>

        {/* Wishlist Button */}
        <button
          type="button"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg shadow-sm backdrop-blur transition hover:bg-white"
        >
          ♡
        </button>
      </div>

      {/* Product Details */}
      <div className="p-5">
        <h2 className="truncate text-lg font-bold text-gray-900">
          {product.name}
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          {product.category}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            {product.price}
          </span>

          <button
            onClick={()=> setCartItems((prev) => [...prev, product])}
            type="button"
            className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;