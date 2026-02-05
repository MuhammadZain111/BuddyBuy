import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home'

import { CartProvider } from "./CartContext";


function App() {
 
  const [count, setCount] = useState(0)

  
  return (
    
    <>
      <CartProvider>
       <Home />
       </CartProvider>

    </>
  )
}

export default App
