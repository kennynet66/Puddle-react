import Landing from "./Components/Landing/landing";
import Login from "./Components/Login/login";
import Navbar from "./Navbar";
import Products from "./Components/Products/products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup/signup";
import Notfound from "./Components/notFound/notFound";
import SingleProduct from "./Components/Singleproduct/singleProduct";

function App() {
  return (
    <>
    <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="products" element={<Products />} />
          <Route path = "product/:id" element={<SingleProduct/>}/> 
          <Route path="*" element={< Notfound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
