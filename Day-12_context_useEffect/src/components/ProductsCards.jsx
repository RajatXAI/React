// import React from "react";

const ProductsCards = ({ products }) => {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-lg border border-[#e0e7e4] bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative flex h-56 items-center justify-center bg-[#f8faf9] p-6">
        <img
          src={products.image}
          alt={products.title}
          className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-sm bg-[#e2efeb] px-2.5 py-1 text-xs font-medium capitalize text-[#28594f]">
          {products.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h2 className="line-clamp-2 min-h-12 text-sm font-semibold leading-6 text-[#203532]">
          {products.title}
        </h2>
        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-sm bg-[#2f725e] px-2 py-1 text-xs font-semibold text-white">
            {products.rating.rate} ★
          </span>
          <span className="text-xs text-[#687a75]">
            {products.rating.count} reviews
          </span>
        </div>
        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <span className="text-xl font-semibold text-[#203532]">
            ${products.price.toFixed(2)}
          </span>
          <button
            type="button"
            className="rounded-md bg-[#173f37] px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-[#28594f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39766c]"
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductsCards;
