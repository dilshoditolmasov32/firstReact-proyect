import React from "react";
import "./Navbar.css";
// import { IoSearchSharp, IoCartOutline } from "react-icons/io5";
// import { FaRegHeart } from "react-icons/fa6";

function Navbar() {
  return (
    <header className="header">
      <div className="container">
        <div className="nav">
          <div className="logo">Exclusive</div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Sign in</a>
            </li>
          </ul>
          <div className="input-links">
            <div className="search">
              <input type="text" name="text" id="text" />
              {/* <IoSearchSharp /> */}
            </div>
            <div className="like">
              <FaRegHeart />
            </div>
            <div className="cart">
              {/* <IoCartOutline className="cart-icons" /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
