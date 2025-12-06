import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'swiper/css';
import ProductPage from './pages/ProductPage';
import ScrollToTop from './pages/ScrollTop';
import Cart from './pages/Cart';
import Address from './components/Cart/Address';
import Account from './pages/Account';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import AddToCart from './components/Cart/AddToCart';
import ChangePassword from './components/Login/ChangePassword';
import ProductList from './pages/ProductList';
import FavouriteWhislist from './pages/FavouriteWhislist';

function AppLayout() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/cart/address' element={<Address />} />
        <Route path='/products/:name' element={<ProductPage />} />
        <Route path='/account' element={<Account />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/wishlist' element={<FavouriteWhislist />} />
        <Route path='/change' element={<ChangePassword />} />
      </Routes>
      <AddToCart />
    </>
  )
}


export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout />
    </Router>
  );
}