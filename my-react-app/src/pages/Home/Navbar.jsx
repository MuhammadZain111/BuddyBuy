import React from 'react'
import "./Custom.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MiniCart from './MiniCart';
import { useState,useRef } from 'react';

import { useCart } from "../../CartContext";




function Navbar() {
  
  

const [isCartOpen, setIsCartOpen] = useState(false);

const cartIconRef = useRef(null);
 
const { cart } = useCart();


const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  
  
    return (
 

 <div>
    <nav className="navbar navbar-expand-lg  pt-4 pb-4 fixed-top " id="navbar">

        <div className="container  d-flex justify-content-between align-item-center">
         
            <a href="#">
			<img src="/images/logo.png" width="75" height="40" alt=" logo"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        
    
            <div className="collapse navbar-collapse" id="navbarNav">
        
                <ul className="navbar-nav mx-auto">
        
                    <li className="nav-item">
                        <a className="nav-link" href="/"><span className="circle-logo px-2 "><i
                                    className="circle fa-solid fa-circle"></i></span>Home</a>
                    </li>
        
                    <li className="nav-item">
                        <a className="nav-link" href="/about"><span className="circle-logo px-2 "><i className="circle fa-solid fa-circle"></i></span>About Us</a>
                    </li>
        
           
                    <li className="nav-item">
                        <a className="nav-link" href="/about"><span className="circle-logo px-2 "><i className="circle fa-solid fa-circle"></i></span>Products</a>
                    </li>
    
                    <li className="nav-item">
                        <a className="nav-link" href="/about"><span className="circle-logo px-2 "><i
                                    className="circle fa-solid fa-circle"></i></span>Shop Now</a>
                    </li>
    
            
        
        
                    <li className="nav-item">
                        <a className="nav-link" href="/contact"><span className="circle-logo px-2 "><i
                                    className="circle fa-solid fa-circle"></i></span>Contact Us</a>
                    </li>
                </ul>

                <div className="gap-4 align-items-center d-flex">

                    <form action="#" className=" findme  rounded py-2 pl-6 px-4 d-none d-lg-flex ">
                     <input type="text" placeholder="Search anything" className="findme-input  bg-transparent  pr-4 font-semibold " name="topic"/>
                     <button type="submit" className="search-icon bg-transparent f-flex flex-row align-items-center justify-center-center px-3 border-transparent mr-1">
                        <i className="searchitem-btn fa-solid fa-magnifying-glass"></i>
                  </button>
              </form>
                
                <div className="d-flex align-items-center g-4">

                 <a href="#">
                    <div className="position-relative mx-3">
                        <i className="favourite-icon  fa-regular fa-heart"></i>

                        <span classNameName="favourite-items    position-absolute left-[1.1rem] top-0 right-0 bg-[#B18B5E]  rounded-full text-white text-xs flex items-center justify-center"></span>
                    </div>
                        </a>
                        
                  <div className="position-relative mx-2" ref={cartIconRef} >
                     <button
                        type="button"
                          className="btn p-0"
                            onClick={(e) =>{
                             e.stopPropagation();
                            setIsCartOpen(prev => !prev)}} >
                        
                        <svg
                         className="cart-icon"
                            xmlns="http://www.w3.org/2000/svg"
                           width="24"
                          height="24"
                          viewBox="0 0 24 24" >
                        <path
                        fill="white"
                          d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1"
                         />
                           </svg>

                    {totalItems > 0 && (
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning ">{totalItems}
                         </span>)}
  </button>

  {isCartOpen && 
  <MiniCart setIsCartOpen={setIsCartOpen} cartIconRef={cartIconRef} />}
</div>












                    </div>
                </div>
            </div>
            <div>
            </div>
    
        </div>
        </nav>
 </div>
  )
}

export default Navbar
