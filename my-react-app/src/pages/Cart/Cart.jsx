import React from 'react'
import {useState } from'react'

import "../Home/Custom.css";

import { useCart } from "../../CartContext";



function Cart() {


const { cart, updateQty, removeFromCart } = useCart();


  return (
     <div className="cart-container">
      

      <div className="cart-hero">
        <h1>Cart</h1>
        <p>Welcome to Cart Section</p>
      </div>

    
        <table className="cart-table">
          <thead>
            <tr>
              <th>Images</th>
              <th>Products</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tbody>
           {cart.map((item) => (
          <tr key={item.id}>
            <td><img src={item.image} width="80" /></td>
            <td>{item.name}</td>
            <td>${item.price}</td>

            <td>
              <button onClick={() => updateQty(item.id, 1)}>+</button>
              {item.quantity}
              <button onClick={() => updateQty(item.id, -1)}>-</button>
            </td>

            <td>${item.price * item.quantity}</td>

            <td>
              <button onClick={() => removeFromCart(item.id)}>×</button>
            </td>
          </tr>
        ))}
      </tbody>

        </table>
    
    </div>
  );
}
export default Cart
