
import React from 'react'
import Footer from '@/components/Home/Footer'
import NavBar from '@/components/Home/Navbar'
import Dummy from '@/components/Product/Dummy1'
import Tabs from '@/components/Product/Tabs'
import HowToUse from '@/components/Product/HowToUse'
import RelatedProducts from '@/components/Product/RelatedProducts'
import WhyChoose from '@/components/Home/WhyChoose'
import Perks from '@/components/Home/Perks'
import AutoCarouselProduct from '@/components/Home/AutoCarouselProduct'

const ProductPage = () => {
    return (
        <div>
            <NavBar />
            <Dummy/>
            <HowToUse />
            <Tabs/>
            <RelatedProducts />
            <WhyChoose />
            <Perks />
            <AutoCarouselProduct />
            <Footer />
        </div>
    )
}

export default ProductPage
