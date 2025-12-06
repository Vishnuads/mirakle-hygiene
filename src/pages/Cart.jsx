import CartHome from '@/components/Cart/CartHome'
import Footer from '@/components/Home/Footer'
import NavBar from '@/components/Home/Navbar'
import SectionBanner from '@/components/SectionBanner'
import React from 'react'

const Cart = () => {
  return (
    <>
      <NavBar/>
      <SectionBanner title="My Cart"/>
      <CartHome />
      
      {/* <ProductBg/> */}
      <Footer/>
    </>
  )
}

export default Cart
