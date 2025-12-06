import React, { useState, useContext } from 'react';
import { Heart, Plus, Minus } from 'lucide-react';
import Product from '../../assets/images/product-desc2.png'
import Product2 from '../../assets/images/product-desc1.png'
import Product3 from '../../assets/images/product-desc1.png'
import Product4 from '../../assets/images/product-desc1.png'
import { IoMdStar } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CartContext } from '@/context/CartContext';


export default function Dummy() {

    const { addToCart } = useContext(CartContext);

    const [selectedWeight, setSelectedWeight] = useState('100 ml');
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    const images = [
        Product,
        Product2,
        Product3,
        Product4,
        Product2,
        // { name: "Product 1", url: Product },
        // { name: "Product 2", url: Product },
        // { name: "Product 3", url: Product },
    ];

    const qty = 2;
    const decreaseQty = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const increaseQty = () => {
        setQuantity(quantity + 1);
    };

    const priceData = {
        "100 ml": { price: 170, mrp: 999 },
        "200 ml": { price: 299, mrp: 1299 }
    };


    return (
        <div className=" p-4 md:p-6 mt-5 pt-5 ">
            <div className="max-w-6xl mx-auto  rounded-2xl  overflow-hidden">
                <div className="grid md:grid-cols-2 gap-12  md:p-10">
                    {/* Left Side - Images */}
                    <div className="space-y-4">
                        <div>
                            <p className='product-dec-tag'>Home / Born Care</p>
                        </div>
                        <div className="overflow-hidden">
                            <img
                                src={images[selectedImage]}
                                alt="Garlic Powder"
                                className="md:w-full  md:h-100 product-dec-img  object-cover"
                            />
                        </div>

                        <div className="grid grid-cols-5 md:gap-4 gap-2 px-1">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    style={{ borderRadius: "5px" }}
                                    className={`transition-all overflow-hidden ${selectedImage === idx ? 'ring-2 ring-[#5D90B9]' : 'hover:ring-2 ring-gray-300'
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt={`Garlic Powder view ${idx + 1}`}
                                        className="w-full h-20 object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Product Details */}
                    <div className="space-y-4 mt-4">
                        {/* <div className='mt-3'>
                            <p className="inline-block px-4 py-2  border-2 border-[#56750A] text-[#56750A] rounded-4 font-semibold text-sm ">
                                Spices & Seasonings
                            </p>
                        </div> */}
                        {/* <div> */}
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 product-dec-title">
                            Born Care
                        </h1>
                        {/* </div> */}
                        {/* <div> */}
                        <p className="text-gray-600 mb-3 product-dec-sub-title">
                            Experience soothing, long-lasting comfort with our gentle Pre-Diaper Oil, formulated to protect delicate skin before wearing diapers or pads.                            </p>
                        {/* </div> */}
                        <div className='product-dec-sub-rating'>
                            <p className='desc-rate'>
                                <IoMdStar />
                            </p>
                            <p > 3.5 <span className='review' > (225 Reviews) </span></p>
                        </div>
                        <div>
                            <p className='mb-2'>Net Weight</p>

                            <div className="flex gap-3">
                                {['100 ml', '200 ml'].map((weight) => (
                                    <button
                                        key={weight}
                                        onClick={() => setSelectedWeight(weight)}
                                        className={`px-4 py-1 font-medium transition-all product-dec-sub-rating ${selectedWeight === weight
                                            ? "text"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            }`}
                                        style={
                                            selectedWeight === weight
                                                ? { border: "1px solid #5D90B9", color: "#5D90B9", borderRadius: "10px" }
                                                : { borderRadius: "10px" }
                                        }
                                    >
                                        {weight}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity Selector */}


                        <p className='mb-2'>Quantity</p>

                        <div className="flex items-center gap-4 product-dec-quantity">

                            <div className="border border-gray-200 flex items-center rounded-2 overflow-hidden">
                                <button
                                    onClick={decreaseQty}
                                    className="w-10 h-10  border-r border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
                                >
                                    <Minus className="w-5 h-5 text-gray-600" />
                                </button>

                                <input
                                    type="text"
                                    value={quantity}
                                    readOnly
                                    className="w-15 h-10 text-center text-xl font-semibold  rounded-lg"
                                />

                                <button
                                    onClick={increaseQty}
                                    className="w-10 h-10  border-l border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
                                >
                                    <Plus className="w-5 h-5 text-gray-600" />
                                </button>
                            </div>
                            {
                                (qty > 0)
                                    ? <span className="text-green-600 font-semibold " >
                                        Available In stock!
                                    </span>
                                    : <span className="text-red-600 font-semibold ">
                                        Out of stock!
                                    </span>
                            }
                        </div>

                        {/* PRICE SECTION */}
                        <div className='product-dec-prices'>
                            <p className="product-dec-price font-bold text-gray-900 mr-3">
                                ₹{priceData[selectedWeight].price.toFixed(2)}

                            </p>

                            <p className="product-dec-price-discount text-gray-900">
                                ₹{priceData[selectedWeight].mrp.toFixed(2)}
                            </p>
                        </div>

                        {/* Weight Selection */}




                        {/* Action Buttons */}
                        <div className="flex gap-4  justify-baseline">
                            <button 
                            // onClick={() => addToCart(p)}
                            className="flex align-items-center justify-content-center  btn-buy items-center  text-white font-semibold transition-colors">
                                {(qty > 0) ?
                                    <>
                                        <p className='mb-0 text-xl mr-3'>Add To Cart </ p>
                                        <p >< MdOutlineShoppingCart style={{ fontSize: "25px" }} /></p>
                                    </>
                                    : <p className='mb-0 text-xl'>Notify me</p>}
                            </button>


                            {/* <button className="w-14 h-14 border-2  border-gray-300 rounded-5 flex items-center justify-center hover:bg-gray-100 transition-colors group">
                                <Heart className="w-6 h-6 text-gray-600 group-hover:text-red-500 transition-colors" />
                            </button> */}
                        </div>
                        <div className="flex gap-4   justify-baseline">
                            <button className="flex align-items-center justify-content-center  btn-buy-wishlist items-center  font-semibold transition-colors">
                                {(qty > 0) ?
                                    <>
                                        <p className='mb-0 text-xl mr-3'>Add To Wishlist </ p>
                                        <p >< Heart /></p>
                                    </>
                                    : <p className='mb-0 text-xl'>Notify me</p>}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}