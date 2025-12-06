import React, { useState, createContext } from 'react'

export const CartContext = createContext();

export function CartProvider({ children }) {

  const [overlayVisiable, setOverlayVisiable] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setFavItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prev => [...prev, { ...item, qty: 1  }]);
    setOverlayVisiable(true);
  }

  const toggleFav= (item, itemId)=>{
    setFavItems(prev =>{

      const existingIndex = prev.findIndex(favItem => favItem.id === itemId);
      // console.log("ex",existingIndex);

      if (existingIndex !== -1){
        return prev.filter((_,i)=> i !== existingIndex);
      }
      else{
       return [...prev, { ...item}]
      }
    });
  }

  const isFavorite = (itemId) => {
    return favItems.some(item => item.id === itemId);
    
  }
  // console.log(isFavorite)

  const hideOverlay = () => {
    setOverlayVisiable(false);
  }
  const removeAll = () => {
    setCartItems([]);
    // console.log("remveredws")
  }

  const removeProduct = (idx) => {
    setCartItems(prev => prev.filter((item, index) => index !== idx));
    // console.log("Removed item with id:", id);
    // console.log(item.id);
  }
  const updateQty = (index, qty) => {
    setCartItems(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, qty } : item
      )
    );
  };

  const total = cartItems.reduce((sum, item) => {
    const price = item.price || 0;
    const qnty = item.qty || 1;
    return sum + (price * qnty);
  }, 0)


  return (
    <CartContext.Provider value={{ overlayVisiable, total,removeAll, addToCart, cartItems, hideOverlay, updateQty, removeProduct, toggleFav, favItems, isFavorite }}>
      {children}
    </CartContext.Provider>

  )
}

