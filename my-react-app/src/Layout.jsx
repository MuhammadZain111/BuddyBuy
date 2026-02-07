import React from 'react'
import { Outlet } from  "react-router-dom";
import Navbar from './pages/Home/Navbar'
import Footer from './pages/Home/Footer';


function Layout() {
  return (
    <>
       <Navbar />
       <Outlet />
       <Footer />    
    </>
  )
}

export default Layout
