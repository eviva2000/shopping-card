import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container">
      <nav className="nav-wrapper">
        <ul className="right">
          <li>
            <Link to="/">shopping</Link>
          </li>
          <li>
            <Link to="/cart">My cart</Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="material-icons">shopping_cart</i>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
