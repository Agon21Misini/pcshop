import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

function Header() {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const { user } = JSON.parse(localStorage.getItem("currentUser"));

  const logout = () => {
    localStorage.removeItem("currentUser");
    window.location.reload();
  };

  return (
    <div className="header">
      <nav className="navbar">
        <Link
          style={{ color: "white", textDecoration: "none" }}
          className="logo"
          to="/"
        >
          PC ONLINE SHOP
        </Link>
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            &#9776;
          </label>
          <div className="menu">
            <li>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                className="nav-links active"
                aria-current="page"
                to="/"
              >
                <FaUser /> {user.email.substring(0, user.email.length - 10)}
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                className="nav-links"
                to="/orders"
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                className="nav-links"
                to="/"
                onClick={logout}
              >
                Logout
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                className="nav-links"
                to="/cart"
              >
                <FaCartPlus /> {cartItems.length}
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
