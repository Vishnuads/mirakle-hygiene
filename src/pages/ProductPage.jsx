
import React from 'react'
import Footer from '@/components/Home/Footer'
import NavBar from '@/components/Home/Navbar'
import Dummy from '@/components/Product/Dummy1'
import Tabs from '@/components/Product/Tabs'
import HowToUse from '@/pages/HowToUse'
import RelatedProducts from '@/components/Product/RelatedProducts'
import WhyChoose from '@/components/Home/WhyChoose'
import Perks from '@/pages/Perks'
import AutoCarouselProduct from '@/components/Home/AutoCarouselProduct'
import { useParams } from 'react-router-dom'
import { productData } from '@/productData'

const ProductPage = () => {
    const {name} = useParams();
    // console.log(name);
    const product = productData[name];
    
    return (
        <div>
            <NavBar />
            <Dummy  product={product} accent={product.accent} img={product.images}/>
            <HowToUse use={product.use} accent={product.accent}/>
            <Tabs/>
            <RelatedProducts />
            <WhyChoose />
            <Perks perks={product.perks} />
            <AutoCarouselProduct />
            <Footer />
        </div>
    )
}

export default ProductPage
