import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Custom.css';
import { products } from '../../constants/slice'
import ProductCard from './ProductCard';




function FeaturedProducts() {


return (
<>
  <section  className="slider-container  pt-5   pb-5    ">

    <div  className="container">
      <h1 className="text-center  seller-hd fs-1 "  >BEST SELLER</h1>
      <p  className="text-center  seller-desc     "  >EXCEPTEUR SINT OCCAECAT</p> 

    <div className="best-product-slider row  g-3">
     
     {products.map((product, index) => (
     <ProductCard
          key={index}
          product ={product}
      />
    ))}
    </div>    
    </div>

</section>
</>
     
)
}
export default FeaturedProducts
