import React, { useState, useContext } from 'react';
import { Plus, Minus } from 'lucide-react';
import Product2 from '../../assets/images/product-desc1.png'
import Product3 from '../../assets/images/product-desc1.png'
import Product4 from '../../assets/images/product-desc1.png'
import { IoMdStar } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CartContext } from '@/context/CartContext';
import { Heart } from 'phosphor-react';
import { Link } from 'react-router-dom';


export default function Dummy({product, accent, img}) {

    const { addToCart } = useContext(CartContext);
    const [selectedWeight, setSelectedWeight] = useState('100 ml');
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    const images = [
        img,
        Product2,
        Product3,
        Product4
    ];

    const qty = 2;
    const decreaseQty = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const increaseQty = () => {
        setQuantity(quantity + 1);
    };

    const priceData = {
        "100 ml": { price: 695, mrp: 999 },
        // "200 ml": { price: 499, mrp: 1299 }
    };

    return (
        <div className=" p-4 md:p-6 mt-5 pt-5 ">
            <div className="max-w-6xl mx-auto    overflow-hidden">
                <div className="grid md:grid-cols-2 gap-12  md:p-10">
                    {/* Left Side - Images */}
                    <div className="space-y-4">
                        <div>
                            <p className='product-dec-tag'><Link to="/"> Home  </Link> <span>/ {product.name}</span></p>
                        </div>
                        <div className="overflow-hidden">
                            <img
                                src={images[selectedImage]}
                                alt="Hygiene"
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
                                        alt={`hygiene ${idx + 1}`}
                                        className="w-full h-20 object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Product Details */}
                    <div className="space-y-4 mt-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 product-dec-title">
                            {product.name}
                        </h1>
                        <p className="text-gray-600 mb-3 product-dec-sub-title">
                            Experience soothing, long-lasting comfort with our gentle Pre-Diaper Oil, formulated to protect delicate skin before wearing diapers or pads.                            </p>
                        <div className='product-dec-sub-rating'>
                            <p className='desc-rate'>
                                <IoMdStar />
                            </p>
                            <p > 3.5 <span className='review' > (225 Reviews) </span></p>
                        </div>
                        <div>
                            <p className='mb-2'>Net Weight</p>
                            <div className="flex gap-3">
                                {['100 ml'].map((weight) => (
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

                        {/* Action Buttons */}
                        <div className="flex gap-4  justify-baseline">
                            <button
                                onClick={() => addToCart(p)}
                                className={`flex align-items-center justify-content-center  btn-buy items-center  text-white font-semibold transition-colors `} style={{backgroundColor:accent.primary}}>
                                {(qty > 0) ?
                                    <>
                                        <p className='mb-0 text-xl mr-3'>Add To Cart </ p>
                                        <p >< MdOutlineShoppingCart style={{ fontSize: "25px" }} /></p>
                                    </>
                                    : <p className='mb-0 text-xl'>Notify me</p>}
                            </button>
                        </div>
                        <div className="flex gap-4   justify-baseline">
                            <button className="flex align-items-center justify-content-center  btn-buy-wishlist items-center  font-semibold transition-colors" style={{border: `1px solid ${accent.primary}`}}>
                                {(qty > 0) ?
                                    <>
                                        <p className='mb-0 text-xl mr-3' style={{color: accent.primary}}>Add To Wishlist </ p>
                                        <p >< Heart size={26} color={`${accent.primary}`}/></p>
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