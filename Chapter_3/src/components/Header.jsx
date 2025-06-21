import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleLoginBtn = () => [setClick((prev) => !prev)];
  return (
    <>
      <nav className="navbar flex items-center justify-between pl-2 pr-2">
        <div className="navbar-left">
          <img  src={LOGO_URL} alt="Logo" className="navbar-logo size-16 rounded-md" />
        </div>
        <div className="navbar-right w-[50%] flex items-center justify-evenly ">
          <Link to="/" className="nav-a">
            Home
          </Link>
          <Link to="/about" className="nav-a">
            About
          </Link>
          <Link to="/contact" className="nav-a">
            Contact
          </Link>
          <Link to="/grocery" >
            Grocery
          </Link>
          <a to="/cart" className="nav-a">
            Cart
          </a>
          <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={handleLoginBtn}>
            {click === true ? "Login" : "Logout"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
