import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);


console.log(cart);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      console.log("🟢 addToCart called with:", product);

      if (existing) {
        console.log("🟢 addToCart Sucessfully:", product);
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } :item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };





  // UPDATE QUANTITY
  const updateQty = (id, amount) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  // REMOVE ITEM
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQty, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
