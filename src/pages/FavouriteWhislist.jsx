import AutoCarouselProduct from '@/components/Home/AutoCarouselProduct'
import Footer from '@/components/Home/Footer'
import NavBar from '@/components/Home/Navbar'
import FavouriteProduct from '@/components/Product/FavouriteProduct'
import React from 'react'

export default function FavouriteWhislist() {
  return (
    <>
    <NavBar />
    <FavouriteProduct />
    <AutoCarouselProduct />
    <Footer />
    </>
  )
}
