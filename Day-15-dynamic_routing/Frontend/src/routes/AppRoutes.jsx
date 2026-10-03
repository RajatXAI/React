import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/about"
        element={
          <ProtectedRoutes>
            <About />
          </ProtectedRoutes>
        }
      />
      <Route path="/products" element={<Products />} />
      <Route path="/detail/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default AppRoutes;
