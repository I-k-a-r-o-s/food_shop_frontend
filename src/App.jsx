import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import PlaceOrder from "./pages/PlaceOrder";

const App = () => {
  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Navbar />
      <div className="h-16" aria-hidden="true" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
