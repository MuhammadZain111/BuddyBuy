
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Custom.css';

import { useCart } from "../../CartContext";


function ProductCard({product}) 
{
  console.log(product);

  const { addToCart } = useCart();
   
  return (
              
       
       <div className="slider-card   col-md-3 ">
          <div className="  product-image js-tilt ">
                <a className="tm-link">
                    <div className="overlay overlay-color">
                    </div>
                    <img className="img-fluid parallax-img" loading="lazy" src={product.img} alt="Team Member"/>
                </a>


                <div className="tm-social">
                    <div className="sc-wrapper dir-row sc-size-40">
                      <ul className="sc-list">
                        
                        <li className="sc-item mx-2" title="cart">
                        <button  type="button" onClick={() => {
                              console.log("ADD TO CART", product);
                              addToCart(product);
                              }}

                              className="sc-link bg-transparent border-0 " title="Add to cart">
                            <i className="fa-solid fa-bag-shopping text-white fs-3   "></i>
                             </button>
                            </li>


                            <li className="sc-item mx-2" title="favourite">
                             <button
                              type="button"
                              className="sc-link bg-transparent border-0" title="Add to cart">
                           <i className="fa-regular fa-heart  sc-icon "></i>    
                             </button>
                                
                            </li>

                            <li className="sc-item mx-2 " title="instagram">
                                <a className="sc-link" href="#0" title="social media icon"> 
                                <i className="fa-regular fa-eye sc-icon"></i></a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="tm-details mt-4  text-center">
                <a className="tm-link     " href="#">
                    <h6 className="desc tm-name text-center">{product.name}</h6>
                </a>
                <span className="price tm-role text-center  ">{product.price}</span>
            </div>

        </div>
        
  )
}

export default ProductCard
