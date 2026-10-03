import { Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router";

const ProductCard = ({ productsData }) => {
  let navigate = useNavigate();
  return (
    <article
      className="
    group flex h-full min-w-0 flex-col overflow-hidden
    rounded-lg border border-[#e0e7e4] bg-white
    shadow-sm transition duration-200
    hover:-translate-y-0.5 hover:shadow-md
    mb-5
  "
    >
      {/* Product Image */}
      <div
        onClick={() => navigate(`/detail/${productsData.id}`)}
        className="
      relative flex cursor-pointer items-center justify-center
      bg-[#f8faf9]

      h-44 p-4
      sm:h-52 sm:p-5
      md:h-56 md:p-6
      lg:h-64 lg:p-7
    "
      >
        <img
          src={productsData.image}
          alt={productsData.title}
          className="
        h-full w-full object-contain
        transition-transform duration-200
        group-hover:scale-105
      "
        />

        {/* Category */}
        <span
          className="
        absolute left-2 top-2
        rounded-sm bg-[#e2efeb]
        px-2 py-1
        text-[10px] font-medium capitalize text-[#28594f]

        sm:left-3 sm:top-3
        sm:px-2.5 sm:text-xs
      "
        >
          {productsData?.category}
        </span>
      </div>

      {/* Product Content */}
      <div
        className="
      flex flex-1 flex-col

      p-3
      sm:p-4
      md:p-4
      lg:p-5
    "
      >
        {/* Title */}
        <h2
          className="
        line-clamp-2
        min-h-10
        text-xs font-semibold
        leading-5 text-[#203532]

        sm:min-h-12
        sm:text-sm
        sm:leading-6

        lg:text-base
      "
        >
          {productsData?.title}
        </h2>

        {/* Rating */}
        <div
          className="
        mt-2 flex flex-wrap items-center gap-1.5
        sm:mt-3 sm:gap-2
      "
        >
          <span
            className="
          rounded-sm bg-[#2f725e]
          px-1.5 py-1
          text-[10px] font-semibold text-white

          sm:px-2 sm:text-xs
        "
          >
            {productsData?.rating?.rate} ★
          </span>

          <span
            className="
          text-[10px] text-[#687a75]
          sm:text-xs
        "
          >
            {productsData?.rating?.count} reviews
          </span>
        </div>

        {/* Bottom Section */}
        <div
          className="
        mt-auto flex flex-col gap-3 pt-4

        sm:flex-row
        sm:items-center
        sm:justify-between

        md:flex-col
        md:items-stretch

        lg:flex-row
        lg:items-center
        lg:justify-between
      "
        >
          {/* Price */}
          <span
            className="
          text-lg font-semibold text-[#203532]
          sm:text-xl
          lg:text-2xl
        "
          >
            ${productsData?.price?.toFixed(2)}
          </span>

          {/* Actions */}
          <div
            className="
          flex flex-wrap items-center gap-2

          md:justify-between
          lg:justify-end
        "
          >
            {/* Quantity */}
            <div
              className="
            flex h-9 items-center
            rounded-md border border-[#d9e2df]
            bg-[#f8faf9]

            sm:h-10
          "
            >
              <button
                onClick={() => decrementQuantity(productsData.id)}
                className="
              grid size-8 cursor-pointer place-items-center
              rounded-l-md text-[#40534e]
              transition-colors

              hover:bg-[#e8f1ec]

              focus-visible:outline-2
              focus-visible:outline-[#39766c]

              sm:size-9
            "
              >
                <Minus size={16} className="sm:size-[18px]" />
              </button>

              <span
                className="
              w-7 text-center
              text-xs font-semibold
              tabular-nums text-[#203532]

              sm:w-9 sm:text-sm
            "
              >
                {productsData?.quantity ?? 1}
              </span>

              <button
                onClick={() => incrementQuantity(productsData.id)}
                className="
              grid size-8 cursor-pointer place-items-center
              rounded-r-md text-[#40534e]
              transition-colors

              hover:bg-[#e8f1ec]

              focus-visible:outline-2
              focus-visible:outline-[#39766c]

              sm:size-9
            "
              >
                <Plus size={16} className="sm:size-[18px]" />
              </button>
            </div>

            {/* Add to Cart */}
            <button
              // onClick={addToCart}
              type="button"
              className="
            flex-1 cursor-pointer
            rounded-md bg-[#28594f]
            px-3 py-2
            text-xs font-medium text-white
            transition-colors

            hover:bg-[#173f37]
            active:scale-98

            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-[#39766c]

            sm:flex-none
            sm:px-4
          "
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
