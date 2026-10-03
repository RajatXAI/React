import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Truck,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";


const ProductDetails = () => {
  const [singleProductData, setSingleProductData] = useState({});
  let { id } = useParams();

  const getProdcut = async () => {
    try {
      let res = await axios.post(`http://localhost:3000/products/${id}`);
      console.log(res.data.data);
      setSingleProductData(res.data.data);
    } catch (error) {
      console.log("Error in Api", error);
    }
  };
  useEffect(() => {
    getProdcut();
  }, []);

  return (
    <section className="min-h-screen bg-[#f7faf8] px-4 py-8 ">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 text-sm text-[#71817c]">
          Home
          <span className="mx-2">/</span>
          {singleProductData.category}
          <span className="mx-2">/</span>
          <span className="text-[#28594f]">{singleProductData.title}</span>
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-[#e0e8e4] bg-white shadow-sm md:grid-cols-2">
          <div className="relative flex min-h-[480px] items-center justify-center bg-[#f5f8f6] p-10">
            <span className="absolute left-6 top-6 rounded-full bg-[#e2efeb] px-3 py-1.5 text-xs font-semibold text-[#28594f]">
              {singleProductData.category}
            </span>

            <img
              src={singleProductData.image}
              alt={singleProductData.title}
              className="h-[380px] w-full object-contain transition duration-500 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#72827c]">
              Premium Collection
            </p>

            <h1 className="mt-3 text-3xl font-bold leading-tight text-[#203532]">
              {singleProductData.title}
            </h1>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-md bg-[#28594f] px-2.5 py-1.5 text-sm font-semibold text-white">
                {singleProductData?.rating?.rate}
                <Star size={14} fill="currentColor" />
              </div>

              <span className="text-sm text-[#71817c]">
                {singleProductData?.rating?.count} reviews
              </span>
            </div>

            <div className="mt-7">
              <span className="text-3xl font-bold text-[#203532]">
                ₹{singleProductData?.price?.toLocaleString("en-IN")}
              </span>

              <p className="mt-1 text-xs text-[#81908b]">
                Inclusive of all taxes
              </p>
            </div>

            <div className="my-7 h-px bg-[#e5ebe8]" />

            <p className="text-[15px] leading-7 text-[#62736d]">
              {singleProductData.description}
            </p>

            <div className="mt-7">
              <p className="mb-2 text-sm font-semibold text-[#203532]">
                Quantity
              </p>

              <div className="flex h-11 w-fit items-center rounded-lg border border-[#d8e2de] bg-[#f8faf9]">
                <button
                  className="grid size-11 cursor-pointer place-items-center text-[#40534e] transition hover:bg-[#e9f1ed]"
                >
                  <Minus size={17} />
                </button>

                <span className="w-10 text-center text-sm font-semibold text-[#203532]">
                  {/* {quantity} */}
                </span>

                <button
                  className="grid size-11 cursor-pointer place-items-center text-[#40534e] transition hover:bg-[#e9f1ed]"
                >
                  <Plus size={17} />
                </button>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                className="
                  flex h-12 flex-1 cursor-pointer
                  items-center justify-center gap-2
                  rounded-lg bg-[#28594f]
                  text-sm font-semibold text-white
                  transition hover:bg-[#173f37]
                  active:scale-[0.98]
                "
              >
                <ShoppingCart size={18} />
                Add to Cart
              </button>

              <button
                className="
                  h-12 cursor-pointer rounded-lg
                  border border-[#28594f]
                  px-6 text-sm font-semibold
                  text-[#28594f]
                  transition hover:bg-[#edf5f1]
                "
              >
                Buy Now
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-[#e5ebe8] pt-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="grid size-9 place-items-center rounded-lg bg-[#edf5f1] text-[#28594f]">
                  <Truck size={17} />
                </div>

                <span className="text-[11px] font-semibold text-[#40534e]">
                  Free Shipping
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <div className="grid size-9 place-items-center rounded-lg bg-[#edf5f1] text-[#28594f]">
                  <RotateCcw size={17} />
                </div>

                <span className="text-[11px] font-semibold text-[#40534e]">
                  Easy Returns
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <div className="grid size-9 place-items-center rounded-lg bg-[#edf5f1] text-[#28594f]">
                  <ShieldCheck size={17} />
                </div>

                <span className="text-[11px] font-semibold text-[#40534e]">
                  Secure Payment
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
