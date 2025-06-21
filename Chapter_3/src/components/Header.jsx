import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleLoginBtn = () => [setClick((prev) => !prev)];
  return (
    <>
      <nav className="navbar flex items-center justify-between pl-2 pr-2">
        <div className="navbar-left flex items-center">
          <h1 className="text-2xl font-bold">Bhookha</h1>
        </div>
        <div className="navbar-right w-[50%] flex items-center justify-evenly ">
          <Link
            className="inline-flex items-center gap-x-2 text-shadow-md font-medium rounded-lg text-gray-800 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-white/70 dark:focus:text-white/70"
            to="/"
          >
            Home
          </Link>
          <Link
            className="inline-flex items-center gap-x-2 text-shadow-md font-medium rounded-lg text-gray-800 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-white/70 dark:focus:text-white/70"
            to="/about"
          >
            About
          </Link>
          <Link
            className="inline-flex items-center gap-x-2 text-shadow-md font-medium rounded-lg text-gray-800 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-white/70 dark:focus:text-white/70"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="inline-flex items-center gap-x-2 text-shadow-md font-medium rounded-lg text-gray-800 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-white/70 dark:focus:text-white/70"
            to="/grocery"
          >
            Grocery
          </Link>
          <Link
            to="/cart"
            className="py-2.5 px-5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Cart
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m5 11 4-7"></path>
              <path d="m19 11-4-7"></path>
              <path d="M2 11h20"></path>
              <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4"></path>
              <path d="m9 11 1 9"></path>
              <path d="M4.5 15.5h15"></path>
              <path d="m15 11-1 9"></path>
            </svg>
          </Link>
          <button
            className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer"
            onClick={handleLoginBtn}
          >
            {click === true ? "Login" : "Logout"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
