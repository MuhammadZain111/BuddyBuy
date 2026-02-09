import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Custom.css';
import Hero  from "../../assets/images/img26.png"; 
import { NavLink } from "react-router-dom"


function HeroSec() {
  return (
   
<div className="container-fluid pt-2 pt-md-5 mt-md-5 bg-gray      " >

  <div class="container h-100 d-flex flex-column flex-md-row pt-5">
  
    <div className=" row h-100 pt-5 pb-5 "  >
     
     <div className="d-flex flex-column col-md-8 align-items-start justify-content-start">
     <p className="heading-one ">Elevate
        Your Home Aesthetics</p>
    
     <p className="description mt-1   " >Thoughtful furniture placement makes rooms feel open and comfortable.
Small details like plants, artwork, and fabrics add character and charm. </p>
 

      <NavLink  to="/product" className="custom-btn mt-4">SHOP NOW
      </NavLink>

    
     </div>
  
   </div>

    <div className=" hero-imag col-6 col-md-5  h-100    "> 
    <img src={Hero} className="img-fluid"  />
    </div> 

    </div>
  

</div>
  )
}

export default HeroSec
