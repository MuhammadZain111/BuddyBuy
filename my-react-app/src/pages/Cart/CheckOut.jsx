import React from "react";
import { useCart } from "../../CartContext";
import {NavLink } from "react-router-dom";
import  "./cart.css"


const Checkout = () => {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-5">
      <div className="row g-4">

    
        <div className="col-12 col-md-7">
          <div className="card border-0 shadow-sm p-4 h-100">
            <h4 className="mb-4">Billing Details</h4>

            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>

              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>

              <div className="col-12">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                />
              </div>

              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Shipping Address"
                />
              </div>

              <div className="col-md-6">
                <input required
                  type="text"
                  className="form-control"
                  placeholder="City"
                />
              </div>

              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ZIP Code"
                  required
                />
              </div>
            </div>
          </div>
        </div>

    
        <div className="col-12 col-md-5">
          <div className="card border-0 shadow-sm p-4 h-100">
            <h4 className="mb-4">Your Order</h4>

            {cart.length === 0 ? (
              <p className="text-muted">Your cart is empty</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex justify-content-between align-items-center mb-3"
                  >
                
                    <div className="d-flex align-items-center">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="img-fluid rounded me-3"
                        style={{ width: "60px", height: "60px", objectFit: "cover" }}
                      />
                      <div>
                        <h6 className="mb-0">{item.name}</h6>
                        <small className="text-muted">Qty: {item.quantity}</small>
                      </div>
                    </div>

                    
                    <span>${item.price * item.quantity}</span>
                  </div>
                ))}

                <hr />

             
                <div className="d-flex justify-content-between fw-bold fs-5">
                  <span>Total</span>
                  <span>${subtotal}</span>
                </div>

                <NavLink to="/orderconfirmed" className="nav-btn mt-4">
                  Place Order
                </NavLink>
              </>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
