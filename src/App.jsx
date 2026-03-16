import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Register from "./pages/Register";

const App = () => {
  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Navbar />
      <div className="h-16" aria-hidden="true" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
};
export default App;
