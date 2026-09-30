import { useContext } from "react";
import { ProductStore } from "../context/ProductStore";
import { Minus, Plus } from "lucide-react";
import { toast } from "sonner";

const ProductsCards = ({ product, isInCart }) => {
  const { setCartItems, incrementQuantity, decrementQuantity,setIsCartOpen } =
    useContext(ProductStore);

  const addToCart = () => {
    setCartItems((prevItems) => [
      ...prevItems,
      {
        ...product,
        quantity: 1,
      },
    ]);

    // Show toast notification (pop-up)
    toast.custom(
      (t) => (
        <div className="flex w-[360px] items-center gap-3 rounded-2xl border border-[#dce8e3] bg-white p-3 shadow-[0_12px_35px_rgba(32,53,50,0.14)]">
          {/* Product Image */}
          <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#f4f8f6]">
            <img
              src={product.image}
              alt={product.title}
              className="size-full object-contain p-1.5"
            />
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="grid size-4 place-items-center rounded-full bg-[#28594f] text-[10px] text-white">
                ✓
              </span>

              <p className="text-xs font-semibold text-[#28594f]">
                Added to cart
              </p>
            </div>

            <p className="mt-1 truncate text-sm font-medium text-[#203532]">
              {product.title}
            </p>

            <button
              onClick={() => setIsCartOpen(true)}
              className="mt-1.5 cursor-pointer text-xs font-semibold text-[#28594f] hover:text-[#173f37]"
            >
              View cart →
            </button>
          </div>

          {/* Close */}
          <button
            onClick={() => toast.dismiss(t)}
            className="grid size-7 shrink-0 cursor-pointer place-items-center rounded-full text-[#8a9994] hover:bg-[#eef4f1] hover:text-[#40534e]"
          >
            ×
          </button>
        </div>
      ),
      {
        duration: 1000,
        position: "top-right",
      },
    );
  };

  return (
    <article className="group  flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-[#e0e7e4] bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative flex h-56 items-center justify-center bg-[#f8faf9] p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-sm bg-[#e2efeb] px-2.5 py-1 text-xs font-medium capitalize text-[#28594f]">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h2 className="line-clamp-2 min-h-12 text-sm font-semibold leading-6 text-[#203532]">
          {product.title}
        </h2>
        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-sm bg-[#2f725e] px-2 py-1 text-xs font-semibold text-white">
            {product.rating.rate} ★
          </span>
          <span className="text-xs text-[#687a75]">
            {product.rating.count} reviews
          </span>
        </div>
        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <span className="text-xl font-semibold text-[#203532]">
            ${product.price.toFixed(2)}
          </span>
          {isInCart ? (
            <div className="flex h-10 items-center rounded-md border border-[#d9e2df] bg-[#f8faf9]">
              <button
                onClick={() => decrementQuantity(product.id)}
                className="grid size-9 place-items-center rounded-l-md text-[#40534e] transition-colors hover:bg-[#e8f1ec] focus-visible:outline-2 focus-visible:outline-[#39766c]"
              >
                <Minus size={18} />
              </button>

              <span className="w-9 text-center text-sm font-semibold tabular-nums text-[#203532]">
                {/* {product.quantity} */}
                {isInCart.quantity}
              </span>

              <button
                onClick={() => incrementQuantity(product.id)}
                className="grid size-9 place-items-center rounded-r-md text-[#40534e] transition-colors hover:bg-[#e8f1ec] focus-visible:outline-2 focus-visible:outline-[#39766c]"
              >
                <Plus size={18} />
              </button>
            </div>
          ) : (
            <button
              onClick={addToCart}
              type="button"
              className="rounded-md bg-[#28594f] px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-[#173f37] active:scale-98 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39766c] cursor-pointer "
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductsCards;
