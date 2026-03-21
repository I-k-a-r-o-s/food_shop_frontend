import { AiOutlineHome } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import { GiChefToque, GiShoppingCart } from "react-icons/gi";
import { GrMenu } from "react-icons/gr";
import { LiaQuestionSolid } from "react-icons/lia";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-router";
import ThemeSelector from "./ThemeSelector";
import { useContext, useState } from "react";
import { appContext } from "../context/AppContext";
import LoginModal from "./LoginModal";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const { itemCount } = useContext(appContext);
  const [currentPage, setCurrentPage] = useState("");

  const navLinks = [
    { name: "Home", to: "/", icon: <AiOutlineHome size={20} /> },
    { name: "Menu", to: "/menu", icon: <BiFoodMenu size={20} /> },
    { name: "About", to: "/about", icon: <LiaQuestionSolid size={20} /> },
    { name: "Contact", to: "/contact", icon: <LuPhoneCall size={20} /> },
  ];
  const NavItems = ({ links }) =>
    links.map((link) => (
      <li
        key={link.name}
        className={
          currentPage === link.name
            ? "underline underline-offset-5 decoration-wavy"
            : ""
        }
        onClick={() => setCurrentPage(link.name)}
      >
        <Link to={link.to}>
          {link.icon} {link.name}
        </Link>
      </li>
    ));
  console.log(itemCount)
  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-base-100 bg-opacity-95 shadow-sm backdrop-blur-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <GrMenu size={20} />
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-3"
          >
            <NavItems links={navLinks} />
          </ul>
        </div>
        <Link to={"/"} className="group">
          <span className="btn btn-ghost text-xl">
            <GiChefToque
              size={30}
              className="transition-all group-hover:rotate-12 "
            />
            FoodShop
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavItems links={navLinks} />
        </ul>
      </div>
      <div className="navbar-end">
        <div className="px-4">
          <div className="indicator">
            <Link to={"/cart"} className="btn btn-ghost">
              <span className="indicator-item badge badge-sm badge-primary">
                {itemCount > 0 ? itemCount : "Empty"}
              </span>
              {<GiShoppingCart size={25} />}
            </Link>
          </div>
        </div>
        <div className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="btn btn-circle btn-ghost m-1">
            <IoSearch size={20}/>
          </div>
          <div
            tabIndex={0}
            className="dropdown-content card card-sm bg-base-100 z-1 w-64 shadow-md"
          >
            <div className="card-body">
              <label className="input">
                <IoSearch size={20}/>
                <input type="search" required placeholder="Search" />
              </label>
            </div>
          </div>
        </div>
        <ThemeSelector />
        <LoginModal />
      </div>
    </div>
  );
};
export default Navbar;
