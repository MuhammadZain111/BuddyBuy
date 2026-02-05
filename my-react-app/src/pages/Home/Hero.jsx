import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Custom.css';

import img1 from '../../assets/images/img01.jpg'



function Hero() {
  return (
   
<div className="container-fluid pt-5 mt-5" >

    <div class="h-100 d-flex  "   >
  
    <div className="container d-flex flex-column align-items-start justify-content-start h-100 pt-5 pb-5 w-50"  >
     <h1 className="heading-one  mt-5  ">LIGNTING</h1>
     <h2 className="heading-two  ">PENDANT LAMPS</h2>
     <p className="description mt-1 " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, explicabo!</p>
     <a className="mt-5  link"  >SHOP NOW</a>

   </div>

    <div className="h-100 w-50 bg-center
    bg-no-repeat bg-contain "    > 
    <img src={img1} className="img-fluid"  />
      </div>


    </div>
    
   
    {/* <div class="herosection-slider  slide2  h-100"   >
   
        <div class="container  "> 
            
            <div class="sub-section   mt-5 mb-5 float-right "   >
            <h1 class="heading-fa  fs-1 text-center mt-5">LAUNGE CHAIRS</h1>
            <h2  class="heading-two  text-center"   >SW DAYBED</h2>

            <p class="description mt-1 text-center  px-5 " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, explicabo!</p>
            <a class=" link   mt-5  d-flex align-items-center justify-content-center"  >SHOP NOW</a>
    
            </div>

        </div>
       
        

    </div> */}
    
    {/* <div class="herosection-slider slide3  ">

        <div class="container     "> 
           
            <div class="    sub-section mt-5 float-left ">
            <h1 class="heading-fa fs-1 text-center mt-5">CARDBOARD</h1>
            <h2  class="heading-two  text-center"   >Sofas And Armchairs</h2>

            <p class="description mt-1 text-center " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, explicabo!</p>
            
            <a class=" link  mt-5 d-flex align-items-center justify-content-center "  >SHOP NOW</a>
    
            </div>

        </div>




    </div> */}


</div>
  )
}

export default Hero
