import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleLoginBtn = () => [setClick((prev) => !prev)];
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={LOGO_URL} alt="Logo" className="navbar-logo" />
        </div>
        <div className="navbar-right">
          <Link to="/" className="nav-a">
            Home
          </Link>
          <Link to="/about" className="nav-a">
            About
          </Link>
          <Link to="/contact" className="nav-a">
            Contact
          </Link>
          <a to="/cart" className="nav-a">
            Cart
          </a>
          <button onClick={handleLoginBtn}>
            {click === true ? "Login" : "Logout"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
