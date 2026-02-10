import React, { useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";
import { useCart,useFav } from "../../CartContext";
import {NavLink} from  "react-router-dom"



function MiniCart({ setIsCartOpen, cartIconRef })
 {
  const { cart, removeFromCart } = useCart();
  
   const {fav ,removeFromFav } = useFav();

  const cartRef = useRef(null);

  
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target) &&
        cartIconRef.current &&
        !cartIconRef.current.contains(event.target)
      ) {
        setIsCartOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsCartOpen, cartIconRef]);

  return (
    <div
      ref={cartRef}
      className="position-absolute end-0 mt-3 bg-white shadow-lg rounded p-3"
      style={{ width: "380px", zIndex: 1050 }}
    >
      <div className="cart-arrow"></div>

      {/* Items */}
      <div className="mb-3">
        {cart.length === 0 && (
          <p className="text-center text-muted">Your cart is empty</p>
        )}

        {cart.map((item) => (
          <div
            key={item.id}
            className="d-flex align-items-start gap-3 mb-4"
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "64px", height: "64px", objectFit: "cover" }}
            />

            <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-start  ">
              <p className="fw-semibold mb-1 text-secondary">
                {item.name}
              </p>
              <p className="fw-bold mb-1">€ {item.price},00</p>
              <small className="text-muted">
                Qty: {item.quantity}
              </small>
            </div>

            <button
              className="text-decoration-none btn btn-link text-danger fs-4 p-0"
              onClick={() => removeFromCart(item.id)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      <hr />

  
      <div className="d-flex justify-content-between mb-3">
        <span className="fw-semibold text-muted">Sub Total</span>
        <span className="fs-5 fw-bold">€ {subtotal},00</span>
      </div>

      <div className="d-flex gap-2">
        <NavLink  to="/cart"  className="btn btn-outline-dark rounded-pill w-100 py-2 fw-semibold">VIEW CART
        </NavLink>
        <NavLink  to="/checkout" className="btn   rounded-pill w-100 py-2 fw-semibold">
          CHECKOUT
        </NavLink>
      </div>
    </div>
  );
}

export default MiniCart;
