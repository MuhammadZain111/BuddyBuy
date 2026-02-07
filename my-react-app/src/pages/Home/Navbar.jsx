import React, { useState, useRef } from "react";
import "./Custom.css";
import MiniCart from "./MiniCart";
import { useCart } from "../../CartContext";
import {Link}  from 'react-router-dom' 


function Navbar() {
  
    const [isCartOpen, setIsCartOpen] = useState(false);
 
    const cartIconRef = useRef(null);

  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

   const navItems = [
  { item: "Home", path: "/" },
  { item: "About Us", path: "/about" },
  { item: "Products", path: "/products" },
  { item: "Shop Now", path: "/product" },
  { item: "Contact Us", path: "/contact" },
];




  return (
    <nav className="navbar navbar-expand-lg fixed-top pt-3 pb-3" id="navbar">
      <div className="container  ">

        <a className="navbar-brand" href="/">
          <img src="/images/logo.png" width="75" height="40" alt="logo" />
        </a>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navItems.map(
              ({item,path}) => (
                <li className="nav-item  fs-5 mx-md-2 " key={item}>
                  <Link className="nav-link text-white" to={path} >
                    
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Right Icons */}
          <div className="d-flex align-items-center gap-3">

            {/* Search */}
            <form className="d-none d-lg-flex findme px-3 py-1">
              <input
                type="text"
                className="findme-input bg-transparent"
                placeholder="Search anything"
              />
              <button className="btn text-white">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>

            {/* Favourite */}
            <div className="position-relative">
              <i className="fa-regular fa-heart favourite-icon"></i>
            </div>

            {/* Cart */}
            <div className="position-relative" ref={cartIconRef}>
              <button
                type="button"
                className="btn p-0 d-flex align-items-center"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsCartOpen((prev) => !prev);
                }}
              >
                <svg
                  className="cart-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M18 6H4.27l2.55 6H15l3-4a1 1 0 0 0-.82-1.6Z"
                  />
                </svg>

                {totalItems > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                    {totalItems}
                  </span>
                )}
              </button>

              {isCartOpen && (
                <MiniCart 
                  setIsCartOpen={setIsCartOpen}
                  cartIconRef={cartIconRef}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
