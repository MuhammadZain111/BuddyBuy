import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Custom.css';

import img1 from '../../assets/images/img01.jpg'



function Hero() {
  return (
   
<div className="container-fluid pt-2 pt-md-5 mt-md-5 bg-gray      " >

  <div class="container h-100 d-flex flex-column flex-md-row pt-5">
  
    <div className=" row  h-100 pt-5 pb-5 "  >
     
     <div className=" d-flex flex-column col-md-6 align-items-start justify-content-start">
     <h1 className="heading-one  mt-5  ">LIGNTING</h1>
     <h2 className="heading-two  ">PENDANT LAMPS</h2>
     <p className="description mt-1 " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, explicabo!</p>
     <a className="mt-5  link"  >SHOP NOW</a>
     </div>
  
   </div>

    <div className="h-100 col-6 col-md-6 bg-center
    bg-no-repeat bg-cover      "> 
    <img src={img1} className="img-fluid"  />
    </div> 

    </div>
  

</div>
  )
}

export default Hero
