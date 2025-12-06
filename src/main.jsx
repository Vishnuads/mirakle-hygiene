import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext';
import  HomeContext from './context/HomeContext';


createRoot(document.getElementById('root')).render(

  <HomeContext>
  <CartProvider>
    <App />
  </CartProvider>
  </HomeContext>,
)
