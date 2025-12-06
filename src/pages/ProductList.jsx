import AutoCarouselProduct from '@/components/Home/AutoCarouselProduct'
import Footer from '@/components/Home/Footer'
import NavBar from '@/components/Home/Navbar'
import ProductCategory from '@/components/Product/ProductCategory'
import React from 'react'

export default function ProductList() {
  return (
   <>
   <NavBar />
   <ProductCategory />
   <AutoCarouselProduct />
   <Footer />
   </>
  )
}
