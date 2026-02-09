import React from "react";
import { useCart } from "../../CartContext";
import { Link } from "react-router-dom";

import "./cart.css";


const OrderConfirmation = () => {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-5">
      <div className="text-center">
        <h2 className="display-5 fw-bold text-black mb-3">
          Thank you for your order!
        </h2>
        <p className="text-muted mb-4">
          Your order has been successfully placed. We will send a confirmation email shortly.
        </p>     

        <p className="mb-4">
          <strong>Order Number:</strong> #12345
        </p>

    
        <div className="card border-0 shadow-sm p-4 mx-auto" style={{ maxWidth: "500px" }}>
          <h5 className="mb-3">Order Summary</h5>
          {cart.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-between align-items-center mb-2"
            >
              <div className="d-flex align-items-center">
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  className="rounded me-2"
                />
                <span>{item.name} (x{item.quantity})</span>
              </div>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}

          <hr />

          <div className="d-flex justify-content-between fw-bold fs-5">
            <span>Total</span>
            <span>${subtotal}</span>
          </div>

          <Link to="/" className="btn btn-dark w-100 mt-4 p-2">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
