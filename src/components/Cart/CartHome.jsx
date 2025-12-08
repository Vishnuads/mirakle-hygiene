import { LucideSquareArrowOutUpRight, PlusCircle, Trash2 } from 'lucide-react'
import React, { useState, useContext } from 'react'
import CartCard from './CartCard'
import { Link } from 'react-router-dom'
import Address from '../Cart/Address'
import { CartContext } from '@/context/CartContext'
import AutoCarouselProduct from '../Home/AutoCarouselProduct'


const CartHome = () => {

    const [checked, setChecked] = useState(false);
    const [address, setAddress] = useState(false);

    const { cartItems, removeProduct, total, updateQty, removeAll, toggleFav, isFavorite } = useContext(CartContext);

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



    return (
        <>
            <section className='bg-gray-100 min-h-screen relative '>
                <div style={{ paddingTop: "60px" }}>
                    <h1 className="products-title">My Cart</h1>
                    <p className="text-muted mb-5 text-center products-sub">Explore the Products of Mirakle</p>
                </div>

                {!cartItems.length == 0 ? (
                    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5 max-w-6xl mx-auto py-5 px-2 relative">
                        <div className="col-span-2 md:mb-0 mb-3">
                            <div className="flex items-center justify-between px-3  bg-white rounded-4 py-3 mb-3">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" className='w-5 h-5 accent-green-800' />
                                    <p className='mb-0'>Select All</p>
                                </div>
                                <button
                                    onClick={removeAll}
                                    className="flex items-center gap-2 px-3 py-2 rounded-5  bg-red-100 text-red-600">
                                    <Trash2 size={20} />
                                    <p className='mb-0'>Delete All</p>
                                </button>
                            </div>

                            {cartItems.map((item, idx) => (

                                <CartCard
                                    key={idx}
                                    name={item.title}
                                    // tag={item.tags[1]}
                                    price={item.price}
                                    image={item.img}
                                    click={() => removeProduct(idx)}
                                    inQty={() => increaseQty(item, idx)}
                                    deQty={() => decreaseQty(item, idx)}
                                    qty={item.qty}
                                    isFav={isFavorite(item.id)}
                                    addFav={() => toggleFav(item, item.id)}

                                />
                                //  console.log(idx)
                            ))}
                            {console.log(cartItems)}
                        </div>

                        <div className="relative">
                            <div className='w-full my-0 px-2 sticky top-24 right-0'>
                                <p className='mb-2'>Choose an Address for Delivery</p>
                                <div className={`flex items-start  gap-2 ${checked ? `bg-[#DFE6EB]` : `bg-white `} rounded-4 p-2`}>
                                    <input type="checkbox"
                                        checked={checked}
                                        onChange={() => setChecked(!checked)}
                                        className='accent-bule-800 w-5  h-5 m-1 ' />
                                    <div>
                                        <p className='mb-1 font-bold text-sm '>Name    <span>| Number</span> </p>
                                        <p className='mb-1 font-bold text-sm '>Home</p>
                                        <p className='text-sm mb-0'>No. 4/19, Second Cross Street, Kasturibai Nagar, Adyar, Chennai, Tamil Nadu - 600020</p>
                                    </div>

                                </div>

                                <button onClick={() => setAddress(true)} className='flex items-center justify-center w-full border border-black py-2 px-3 bg-white rounded-4 my-2'>
                                    <p className='mb-0 flex items-center gap-2'><span> <PlusCircle size={18} /> </span> Add New Address</p>
                                </button>

                                <div className="bg-white my-3  p-3 rounded-4   w-full">
                                    <div className="flex items-center justify-between mb-1 text-sm">
                                        <p>Subtotal</p>
                                        <p className='text-gray-400'>₹ {total}</p>
                                    </div>
                                    <div className="flex items-center justify-between mb-2 text-sm">
                                        <p>Shipping</p>
                                        <p className='text-gray-400'>Free</p>
                                    </div>
                                    <div className="flex items-center justify-between text-xl font-bold">
                                        <p>Total</p>
                                        <p>₹ {total}</p>
                                    </div>
                                    <div className='flex items-center justify-center text-white py-2 px-3 bg-[#3B5875] rounded-3 my-2'>
                                        <p > Prceed to Checkout</p>
                                    </div>
                                    <Link to="/shop">
                                        <div className='flex items-center justify-center border border-black py-2 px-3 bg-white rounded-3 my-2'>
                                            <p className='text-black'> Continue Shopping</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='min-h-[60vh] flex  justify-center items-center py-3 '>
                        <div className='text-center '>
                            <p className='text-xl text-gray-500  py-6 '>Your Cart is Empty</p>
                            {/* <div className='h-10 w-[1px] bg-black/50 hidden md:block'></div>
                            <Link to="/shop">
                                <p className='flex items-center gap-3 underline text-xl font-bold text-black rounded-3'>Countinue Shoping <LucideSquareArrowOutUpRight /> </p>
                            </Link> */}
                        </div>
                    </div>
                )}

            </section>
            {address &&
                <div className="md:fixed absolute inset-0  z-50 ">
                    <Address onClose={() => setAddress(false)} />
                </div>
            }
            <AutoCarouselProduct/>
        </>
    )
}

export default CartHome
