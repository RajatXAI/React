import { Minus, Plus, Trash2 } from "lucide-react";
import { useContext } from "react";
import { ProductStore } from "../context/ProductStore";

const CartCard = ({ product }) => {
  const { incrementQuantity, decrementQuantity, removeFromCart } =
    useContext(ProductStore);

  return (
    <div className="group flex flex-col gap-5 rounded-lg border border-[#dfe8e3] bg-white p-4 shadow-[0_2px_10px_rgba(32,53,50,0.04)] transition duration-200 hover:border-[#c6d8cf] hover:shadow-[0_8px_24px_rgba(32,53,50,0.08)] sm:p-5 md:flex-row">
      {/* Product Image */}
      <div className="flex h-48 w-full shrink-0 items-center justify-center rounded-md bg-[#f4f7f5] p-6 sm:h-52 md:h-40 md:w-40 lg:w-44">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between ">
        <div>
          <p className="mb-2 w-fit rounded-full bg-[#e8f1ec] px-2.5 py-1 text-xs font-semibold capitalize text-[#356453]">
            {product.category}
          </p>

          <h2 className="line-clamp-2 text-base font-semibold leading-6 text-[#203532] sm:text-lg">
            {product.title}
          </h2>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#71807b]">
            {product.description}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-[#edf1ee] pt-4">
          {/* Price */}
          <div>
            <h3 className="text-2xl font-semibold text-[#28594f]">
              ${(product.price * product.quantity).toFixed(2)}
            </h3>
            <p className="mt-1 text-xs text-[#71807b]">
              ${product.price.toFixed(2)} each
            </p>
          </div>

          {/* Quantity */}
          <div className="flex h-10 items-center rounded-md border border-[#d9e2df] bg-[#f8faf9]">
            <button
              className="grid size-9 place-items-center rounded-l-md text-[#40534e] transition-colors hover:bg-[#e8f1ec] focus-visible:outline-2 focus-visible:outline-[#39766c]"
              onClick={() => decrementQuantity(product.id)}
            >
              <Minus size={18} />
            </button>

            <span className="w-9 text-center text-sm font-semibold tabular-nums text-[#203532]">
              {product.quantity}
            </span>

            <button
              className="grid size-9 place-items-center rounded-r-md text-[#40534e] transition-colors hover:bg-[#e8f1ec] focus-visible:outline-2 focus-visible:outline-[#39766c]"
              onClick={() => incrementQuantity(product.id)}
            >
              <Plus size={18} />
            </button>
          </div>

          {/* Remove */}
          <button
            className="flex items-center gap-2 rounded-md border border-[#ecd8d3] bg-[#fff9f7] px-3 py-2 text-sm font-medium text-[#a34d3d] transition-colors hover:border-[#dfb9af] hover:bg-[#fff1ed] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bd6958]"
            onClick={() => removeFromCart(product.id)}
          >
            <Trash2 size={18} />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
