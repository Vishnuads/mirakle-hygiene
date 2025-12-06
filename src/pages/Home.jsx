import React from 'react'
import Navbar from '../components/Home/Navbar'
import HomeBanner from '../components/Home/HomeBanner'
import Footer from '../components/Home/Footer'
import { CartProvider } from '../context/CartContext';
import AddToCart from '@/components/Cart/AddToCart'
import ProductHome from '@/components/Home/ProductHome'
import WhyChoose from '@/components/Home/WhyChoose'
import Testimonials from '@/components/Home/Testimonials'
import Perks from '@/components/Home/Perks'
import AutoCarouselProduct from '@/components/Home/AutoCarouselProduct'

export default function Home() {
  return (
    <>
    {/* <CartProvider> */}
      <Navbar />
      <section className='bg-[#F6F6F6]'>
      <HomeBanner />
      <ProductHome />
      <WhyChoose />
      <Testimonials />
      <Perks />
      <AutoCarouselProduct />
      </section>
      <Footer />
      {/* <AddToCart/> */}
      {/* </CartProvider> */}
    </>
  )
}
