import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./product.css";
import { useCart } from "../../CartContext";
import {Link} from 'react-router-dom'




function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="slider-item">
      <div className="product-card">

        <div className="product-img-wrapper">
          <img
            src={product.img}
            alt={product.name}
            className="product-img"
          />
        </div>

    
    
        <div className="product-actions mt-5  ">
          <button
            className="icon-btn"
            onClick={() => addToCart(product)}
          >
            <i className="fa-solid fa-bag-shopping"></i>
          </button>

          <button className="icon-btn">
            <i className="fa-regular fa-heart"></i>
          </button>

          <Link to={`/product/${product.id}`} className="icon-btn">
            <i className="fa-regular fa-eye"></i>
          </Link>
        </div>


        <h6 className="product-title">{product.name}</h6>
        <div className="product-price">${product.price}</div>

      </div>
    </div>
  );
}

export default ProductCard;
