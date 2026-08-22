import { useContext } from "react";
import { MyStore } from "../context/MyStore";

const Cart = () => {


  let {cartItems} = useContext(MyStore);

  const subtotal = cartItems.reduce((total, product) => {
    const price = Number(product.price.replace(/[₹,]/g, ""));

    return total + price;
  }, 0);

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>

          <p className="mt-1 text-md font-semibold text-gray-500">
            {cartItems.length} {cartItems.length === 1 ? "product" : "products"}
          </p>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="rounded-2xl bg-white p-16 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            Your cart is empty
          </h2>

          <p className="mt-2 text-gray-500">Add some products to your cart.</p>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Products */}
          <div className="space-y-4 lg:col-span-2">
            {cartItems.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="flex gap-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                {/* Image */}
                <div className="h-32 w-32 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">
                        {product.name}
                      </h2>

                      <p className="mt-1 text-sm text-gray-500">
                        {product.category}
                      </p>
                    </div>

                    <button className="text-sm font-medium text-red-500 hover:text-red-700">
                      Remove
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Products</span>

                <span className="font-medium text-gray-900">
                  {cartItems.length}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>

                <span className="font-medium text-gray-900">
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Delivery</span>

                <span className="font-medium text-green-600">Free</span>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Total</span>

                  <span className="text-xl font-bold text-gray-900">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>

            <button className="mt-6 w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
