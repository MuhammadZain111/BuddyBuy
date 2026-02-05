import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import FeaturedProducts from './FeaturedProducts'
import Footer from './Footer'
import Cart from '../Cart/Cart'
import MainProducts from './MainProducts'





function Home() {
 

  return (
  <>

   <Navbar />
   <Hero />
   <MainProducts/>
   <FeaturedProducts />
  <Cart />
   <Footer />
  </>
 
  )
}

export default Home
