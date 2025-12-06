import React, { useState } from 'react'
import { Progress } from "@/components/ui/progress"
import ReviewList from './ReviewList'
import AddReview from './AddReview'
import { IoMdStar } from "react-icons/io";
import image from "../../assets/images/product-desc2.png"

const Tabs = () => {

    const [activeTab, setActiveTab] = useState('tab1');
    const [review, setReview] = useState(false);

    const ratings = ['85', '70', '65', '50', '10'];

    return (
        <>
            <section>
                <div className="max-w-6xl mx-auto mt-8 p-4  ">
                    {/* Tabs */}
                    <div className="flex gap-4">
                        {/* <button
                            className={`flex py-2 text-center ${activeTab === "tab1"
                                ? "border-b-2 border-black font-semibold text-black"
                                : "text-gray-500"
                                }`}
                            onClick={() => setActiveTab("tab1")}
                        >
                            <p className='md:text-xl text-md mb-0'>Description</p>
                        </button> */}
                        {/* <button
                            className={`flex py-2 text-center ${activeTab === "tab2"
                                ? "border-b-2 border-black font-semibold text-black"
                                : "text-gray-500"
                                }`}
                            onClick={() => setActiveTab("tab2")}
                        > */}
                        <p className='md:text-xl text-md mb-0 product-des-reviews-h'> Reviews</p>
                        {/* </button> */}
                    </div>

                    {/* Content */}
                    <div>
                        {/* {activeTab === "tab1" ?
                            <div>
                                <h1 className="text-lg font-bold mb-2">Mirakle Garlic Powder</h1>
                                <p className='font-bold'>Pure Flavor. Every Pinch.</p>
                                <p className='text-gray-500'>Bring your dishes to life with Mirakle Garlic Powder, made from premium, sun-dried garlic cloves that are finely ground to preserve their rich aroma and bold flavor. Whether you’re cooking up pasta, seasoning roasted veggies, or marinating meat, just a sprinkle adds a burst of authentic garlic goodness. <br />
                                    Crafted for convenience without compromise, this all-natural seasoning blends effortlessly into any dish, giving you the essence of fresh garlic minus the peeling and chopping.</p>
                                <div className='mt-4'>
                                    <p className='font-bold text-xl'>Key Highlights</p>
                                    <div className="grid md:grid-cols-4 grid-cols-1 gap-4 ">
                                        {points.map((point, id) => (
                                            <div key={id} className='flex items-center justify-center border gap-3 rounded-4 px-3 py-3'>
                                                <img src={Icon1} alt="seal check" className='w-8' />
                                                <p className='mb-0 text-sm'>{point.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            : */}
                        <div className='row'>
                            <div className=' pb-3 col-md-6'>
                                <ReviewList />
                            </div>

                            <div className=' pb-3 col-md-6'>
                                <div>
                                    {/* <div className='md:border-r text-center '>
                                        <p className=' font-bold mb-1 md:text-[70px] text-[40px]' >4.7</p>
                                        <div className="flex items-center justify-center gap-2 md:mb-3">
                                            {[1, 2, 3, 4, 5].map((id) => (
                                                <Star key={id} size={18} className="text-yellow-500" />
                                            ))}
                                        </div>
                                        <p className='mb-0 text-gray-400'>1.2k Reviews</p>

                                    </div> */}
                                    <div className="product-review-add-rating px-4" >
                                        <div style={{ display: "flex", gap: "4px" }} >
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <IoMdStar key={i} />
                                            ))}
                                        </div>
                                        <div>
                                            <p>5.0</p>
                                        </div>
                                    </div>

                                    <div className='px-4 product-review-sec'>

                                        <div>


                                            {ratings.map((id, idx) => (
                                                <div key={id} className='md:mb-2  flex justify-between items-center '>
                                                    <p className='mb-0 pr-3' style={{ color: "#999999" }}>{5 - idx}</p>
                                                    <Progress value={(id)} />
                                                    <p className='mb-0 ps-3'>{id}</p>
                                                </div>

                                            ))}
                                        </div>
                                    </div>
                                    <div className='product-des-review-product md:border-l mt-3 md:mt-0 col-span-2 md:col-span-1 flex items-center justify-between text-center'>
                                        <div>
                                            <img src={image} alt="" width={100} />
                                        </div>
                                        <div>
                                            <h3 className='mb-1'>Review This Product</h3>
                                            <p className=' text-gray-500 mb-2'>Share your thoughts with other customers</p>
                                            <button
                                                onClick={() => setReview(!review)}
                                                className='border border-black'
                                            >
                                                <p>Write a customer review</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            {review &&
                                <div className="my-4">
                                    <AddReview />
                                </div>
                            }

                            {/* <div className='text-center show-all-reviews'>
                                <p>Show All Reviews</p>
                            </div> */}

                        </div>
                        {/* } */}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Tabs
