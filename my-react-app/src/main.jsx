import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {RouterProvider} from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import FeaturedProducts from './pages/Home/FeaturedProducts.jsx';
import { CartProvider } from "./CartContext";

import  Cart from './pages/Cart/Cart.jsx'
import Products from './pages/Products/Products.jsx'


const router =createBrowserRouter ([
{
  path :"/",
  element: <Layout /> ,
  children:[
    {
    index:true,
    element : <Home />
    },
    {
     path:"about",
     element: <About />
    },
    {
    path:"featuredproducts",
    element:<FeaturedProducts />
  },
   {
    path:"cart",
    element:<Cart />
  },
  {
    path:"product",
    element:<Products />
  }





  ] 
}
])



createRoot(document.getElementById('root')).render(


<StrictMode>

    <CartProvider>
       <RouterProvider router={router} />
      </CartProvider>   
  </StrictMode>,
)
