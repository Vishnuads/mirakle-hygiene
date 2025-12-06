import { Minus, Plus, ShoppingCart, X } from 'phosphor-react'
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'

const AddToCart = () => {

    const { cartItems, overlayVisiable, hideOverlay, removeProduct, updateQty, total } = useContext(CartContext);

    const increaseQty = (item, index) => {
        updateQty(index, item.qty + 1);
        // onQuantityChange?.(product.id, newQty);
    };

    const decreaseQty = (item, index) => {
        if (item.qty > 1) {
            updateQty(index, item.qty - 1);
            // onQuantityChange?.(product.id, newQty);
        }
    };
    const navigate = useNavigate()
    const cartPage = () => {
        navigate('/cart')
    }


    if (!overlayVisiable) return null;
    return (
        <>
            <div className="fixed inset-0 z-50 ">
                <div className="bg-black/70 min-h-screen  flex items-center justify-end" onClick={hideOverlay}>
                    <div className="bg-white h-screen md:w-1/3 w-70 flex flex-col relative " onClick={overlayVisiable ? (e) => e.stopPropagation() : null}>
                        <div className="flex items-center justify-between my-3 px-3">
                            <div className="flex items-center text-xl gap-2">
                                <ShoppingCart />
                                <p className='font-bold'>Your Cart</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className='text-gray-500'>{cartItems.length} items</p>
                                <button onClick={hideOverlay} className='text-black px-2 py-2 border rounded-5'><X /></button>
                            </div>
                        </div>

                        <div className="flex-1 bg-gray-100 rounded-t-lg p-3 overflow-y-auto mx-3 ">
                            {cartItems.map((item, idx) => (
                                <div className="flex gap-2 border-b border-black/20 py-3" key={idx}>
                                    <div className='flex items-start '>
                                        <img src={item.img} alt="product" className='w-20 h-20 object-contain rounded-3' />
                                    </div>
                                    <div className="flex-1  ">
                                        <div className="flex items-center  justify-between">
                                            {/* {items.tags.map((tag, idx) => ( */}
                                            {/* <p key={idx} className='text-xs text-[#56750A] font-semibold'>{item.tags[1]}</p> */}
                                            {/* ))} */}
                                            <p>{item.title}</p>
                                            <p className='text-lg font-bold'>₹{item.price.toFixed(2)}</p>
                                        </div>
                                        <p className='font-bold md:text-lg text-sm my-2'>{item.name}</p>

                                        <div className="flex items-center justify-between">
                                            <div className=''>
                                                <div className="flex items-center  overflow-hidden border border-gray-500 rounded-5 ">
                                                    <button
                                                        onClick={() => decreaseQty(item, idx)}
                                                        className=" w-6 h-5 border-gray-300  flex items-center justify-center hover:bg-gray-50 transition-colors border-r "
                                                        aria-label="Decrease quantity"
                                                    >
                                                        <Minus className="w-3   text-gray-600" />
                                                    </button>
                                                    <input
                                                        type="text"
                                                        value={String(item.qty).padStart(2, '0')}
                                                        readOnly
                                                        style={{ fontSize: '12px' }}
                                                        className=" w-8 h-5  qty text-center text-xs  text-gray-800  outline-none"
                                                    />
                                                    <button
                                                        onClick={() => increaseQty(item, idx)}
                                                        className=" w-6 h-5 flex  border-gray-300  items-center justify-center hover:bg-gray-50 transition-colors border-l "
                                                        aria-label="Increase quantity"
                                                    >
                                                        <Plus className="w-3  text-gray-600" />
                                                    </button>
                                                </div>
                                            </div>
                                            <button className='text-gray-500' onClick={() => removeProduct(idx)} ><p className='text-xs'>Remove</p> </button>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white  shadow-lg p-3" >
                            <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                                <p>Sub Total</p>
                                <p>1800</p>
                            </div>
                            <div className="flex items-center justify-between text-md text-gray-400 mb-2">
                                <p>Shipping</p>
                                <p>Free Delivery</p>
                            </div>
                            <div className="flex items-center justify-between text-xl text-gray-800 mb-3 font-bold">
                                <p>Total</p>
                                <p>₹{total}</p>
                            </div>

                            <div className=''>
                                <Link to="/cart">
                                    <button
                                        onClick={hideOverlay}
                                        className='border border-black text-black w-full rounded-5 py-2 mb-2' >
                                        <p>View Cart</p>
                                    </button>
                                </Link>
                                <button className='border w-full rounded-5 py-2 bg-[#3B5875] text-white'>
                                    <p>Proceed To Checkout</p>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddToCart
