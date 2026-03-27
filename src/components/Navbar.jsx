import { AiOutlineHome } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import { GiChefToque, GiShoppingCart } from "react-icons/gi";
import { GrLogout, GrMenu } from "react-icons/gr";
import { LuPhoneCall, LuShoppingBag } from "react-icons/lu";
import { Link } from "react-router";
import ThemeSelector from "./ThemeSelector";
import { useContext } from "react";
import { appContext } from "../context/AppContext";
import LoginModal from "./LoginModal";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import toast from "react-hot-toast";

const Navbar = () => {
  const { itemCount, token, setToken, navigate, location } =
    useContext(appContext);

  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    toast.success("Logged Out Successsfully!");
  };

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
            <li>
              <Link to={"/"}>
                <AiOutlineHome size={20} /> Home
              </Link>
            </li>
            {location.pathname === "/" ? (
              <>
                <li>
                  <a href="#menu">
                    <BiFoodMenu size={20} /> Menu
                  </a>
                </li>
                <li>
                  <a href="#footer">
                    <LuPhoneCall size={20} /> Contact Us
                  </a>
                </li>
              </>
            ) : (
              <></>
            )}
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
          <li>
            <Link to={"/"}>
              <AiOutlineHome size={20} /> Home
            </Link>
          </li>
          {location.pathname === "/" ? (
            <>
              <li>
                <a href="#menu">
                  <BiFoodMenu size={20} /> Menu
                </a>
              </li>
              <li>
                <a href="#footer">
                  <LuPhoneCall size={20} /> Contact Us
                </a>
              </li>
            </>
          ) : (
            <></>
          )}
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
          <div
            tabIndex={0}
            role="button"
            className="btn btn-circle btn-ghost m-1"
          >
            <IoSearch size={20} />
          </div>
          <div
            tabIndex={0}
            className="dropdown-content card card-sm bg-base-100 z-1 w-64 shadow-md"
          >
            <div className="card-body">
              <label className="input">
                <IoSearch size={20} />
                <input type="search" required placeholder="Search" />
              </label>
            </div>
          </div>
        </div>
        <ThemeSelector />
        {!token ? (
          <LoginModal />
        ) : (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <FaRegUser size={20} />
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Orders
                  <span className="badge">
                    <LuShoppingBag size={20} />
                  </span>
                </a>
              </li>
              <li>
                <a className="justify-between" onClick={logOut}>
                  Logout
                  <span className="badge">
                    <GrLogout size={20} />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
