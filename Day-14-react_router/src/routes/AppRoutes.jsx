import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Details from "../pages/Details";
import NestedAbout from "../pages/NestedAbout";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}> // routes ke andar routes ko access karne ke liye hame ek container ki need hoti hai jisme childs aa sake or uska name hai |Outlet| component| ishe hame parent routes ke andar call karna hota hai jisse child routes access ho sake
          <Route path="details" element={<Details/>} />
        </Route>
        <Route path="/about" element={<About />}>
          <Route path="nested" element={<NestedAbout/>}/>
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
