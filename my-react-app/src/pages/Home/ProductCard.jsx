import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Custom.css';
import { useCart } from "../../CartContext";

function ProductCard({ product }) {
  console.log(product);

  const { addToCart } = useCart();

  return (
    <div className="slider-card">
      <div className="product-image">
        <a href="#">
          <div className="product-img-wrapper">
            <img className="img-fluid" src={product.img} alt={product.title} />
          </div>
        </a>

        <div className="tm-social">
          <div className="sc-wrapper dir-row sc-size-40">
            <ul className="sc-list ">
             
               <li className="sc-item mx-2" title="Add to favorite">
                 <button type="button" onClick={() => {
                   console.log("ADD TO CART", product);
                   addToCart(product);
                   }}
                   className="sc-link bg-transparent border-0 d-flex justify-content-center align-items-center"
                  >
                  <i className="fa-solid fa-bag-shopping text-white fs-5"></i>
                 </button>
                 </li>


              <li className="sc-item mx-2" title="Add to favorite">
                <button
                  type="button"
                  className="sc-link bg-transparent border-0 d-flex justify-content-center align-items-center"
                >
                  <i className="fa-regular fa-heart sc-icon"></i>
                </button>
              </li>

              <li className="sc-item mx-2" title="View">
                <button
                  type="button"
                  className="sc-link sc-link bg-transparent border-0 d-flex justify-content-center align-items-center"
                >
                  <i className="fa-regular fa-eye sc-icon"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="tm-details  text-center">
        <a className="tm-link " href="#">
          <h6 className="desc tm-name text-center">{product.name}</h6>
        </a>
        <span className="price tm-role text-center">{product.price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
