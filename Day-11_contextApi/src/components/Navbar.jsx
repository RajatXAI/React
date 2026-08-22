import { useContext } from "react";
import { MyStore } from "../context/MyStore";

const Navbar = () => {
  let { setIsCartOpen } = useContext(MyStore);
  return (
    <div className="flex items-center justify-between  p-4 sticky z-10 text-white rounded-md inset-0 bg-[#000000b2] backdrop-blur-xl">
      <div>Logo</div>
      <div className="flex gap-10 text-xl ">
        <button
          onClick={() => setIsCartOpen(false)}
          className="cursor-pointer active:scale-98"
        >
          Home
        </button>
        <button
          onClick={() => setIsCartOpen(true)}
          className="cursor-pointer active:scale-98"
        >
          Cart
        </button>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Navbar;
