import React, { useState } from 'react'
import { Check, Plus, User } from 'lucide-react'
import Edit from '../../assets/icons/pencil-line.svg'
import Address from '../Cart/Address'
import AutoCarouselProduct from '../Home/AutoCarouselProduct'
// import Product from '../../assets/images/onion.png'
import Product from '../../assets/images/product-desc2.png'

const AccountHome = () => {

    const [activeTab, setActiveTab] = useState("tab1");
    const [edit, setEdit] = useState(true);
    const [address, setAddress] = useState(false);


    const addressList = [
        { place: "Home", name: "Anand", phone: "987654322", address: "No. 4/19, Second Cross Street, Kasturibai Nagar, Adyar, Chennai, Tamil Nadu - 600020" },
        { place: "Work", name: "Sheik ", phone: "987654322", address: "No. 4/19, Second Cross Street, Kasturibai Nagar, Adyar, Chennai, Tamil Nadu - 600020" },
    ];

    return (
        <>
            <section className='bg-[#F8F8F8] pb-5'>
                <div className="bg-white">
                    <div className='mt-15 pt-15'>
                        <h1 className="products-title">My Account</h1>
                        <p className="text-muted mb-4 text-center products-sub">Explore your details</p>
                    </div>
                    <div className="max-w-6xl  mx-auto">
                        <div className="flex items-center justify-between py-3 px-3">
                            <div>
                                <p className='font-bold mb-1 sm:text-md'>Mirakle account</p>
                                <p className='sm:text-md'>User Name: <span className='font-bold' >user3234</span> </p>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 rounded-5  bg-red-100 text-red-600">
                                <User size={18} />
                                <p className='mb-0'>Sign Out</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" bg-[#F0F0F0] ">
                    <div className="flex items-center gap-4 max-w-6xl mx-auto  py-4">
                        <button
                            onClick={() => setActiveTab('tab1')}
                            className={`${activeTab == 'tab1' ? 'border-1 border-[#3B5875] bg-[#3B58751A] px-3 py-1 rounded-5' : 'bg-transparent  px-3 py-1'} `}>
                            <p>My Profile</p>
                        </button>

                        <button onClick={() => setActiveTab('tab2')} className={`${activeTab == 'tab2' ? 'border-1 border-[#3B5875] bg-[#3B58751A] px-3 py-1 rounded-5' : 'bg-transparent  px-3 py-1'}`}>
                            <p> Order History</p>
                        </button>
                    </div>
                </div>
                <div className=" max-w-6xl  mx-auto py-3  px-3">


                    {activeTab == 'tab1'
                        ?
                        <>
                            <div className="my-3">
                                <div className="flex items-center justify-between">
                                    <p className='font-bold md:text-xl text-md'>Personal Information</p>

                                    {edit
                                        ? <button onClick={() => setEdit(!edit)} className='flex  items-center gap-1 border-1 border-black px-3 py-1 rounded-4'>
                                            <p className='text-sm'>Edit</p>
                                            <img src={Edit} alt="Edit" className='w-5 h-5' />
                                        </button>
                                        : <button onClick={() => setEdit(!edit)} className='flex  items-center gap-1 bg-blue-900 text-white  px-3 py-1 rounded-4'>
                                            <p className='text-sm'>Save</p>
                                            <Check />
                                        </button>}

                                </div>
                            </div>
                            <div className='grid md:grid-cols-3 gap-3 my-1'>
                                <div className="mb-2">
                                    <label htmlFor="name" className='block text-sm text-gray-500 mb-1'>
                                        Name
                                    </label>
                                    <input
                                        name='name'
                                        type="text"
                                        placeholder=''
                                        className='bg-white w-full py-2 px-3 rounded-lg focus:outline-none focus:border-blue-800 transition-colors'
                                    />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="email" className='block text-sm text-gray-500 mb-1'>
                                        Email
                                    </label>
                                    <input
                                        name='email'
                                        type="email"
                                        placeholder=''
                                        className='bg-white w-full py-2 px-3 rounded-lg focus:outline-none focus:border-blue-800 transition-colors'
                                    />
                                </div>
                            </div>
                            <div className="my-3">
                                <div className="flex items-center justify-between">
                                    <p className='font-bold md:text-xl text-md'>Address</p>
                                    <button onClick={() => setAddress(true)} className='flex  items-center gap-1 border-1 border-black px-3 py-1 rounded-4'>
                                        <p className='text-sm'>Add New Address </p> <Plus size={16} />

                                    </button>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-3 my-1">
                                {addressList.map((a, idx) => (
                                    <div key={idx}>
                                        <div className="flex items-center justify-between bg-white py-2 px-3 rounded-3 mb-2">
                                            <p className='font-bold'>{a.place}</p>
                                            <button onClick={() => setAddress(true)} className='flex  items-center gap-1 border-1 border-black px-2 py-1 rounded-4'>
                                                <p className='text-xs'>Edit</p>
                                                <img src={Edit} alt="Edit" className='w-4 h-4' />
                                            </button>
                                        </div>
                                        <div className="bg-white p-3 rounded-3">
                                            <p className='font-bold'>{a.name}</p>
                                            <p className='font-bold my-1 text-sm'>{a.phone}</p>
                                            <p className='text-gray-400'>{a.address}</p>
                                        </div>

                                    </div>
                                ))}
                            </div>
                            {/* {edit && (
                                <>
                                    <div className="my-3">
                                        <div className="flex items-center justify-between">
                                            <p className='font-bold md:text-xl text-md'>Personal Information</p>
                                            <button onClick={() => setEdit(false)} className='flex  items-center gap-1 bg-blue-800 text-white  px-3 py-1 rounded-4'>
                                                <p className='text-sm'>Save</p>
                                                <Check/>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='grid md:grid-cols-3 gap-3 my-1'>
                                        <div className="mb-2">
                                            <label htmlFor="name" className='block text-sm text-gray-500 mb-1'>
                                                Name
                                            </label>
                                            <input
                                                name='name'
                                                type="text"
                                                placeholder=''
                                                className='bg-white w-full py-2 px-3 rounded-lg focus:outline-none focus:border-blue-800 transition-colors'
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="email" className='block text-sm text-gray-500 mb-1'>
                                                Email
                                            </label>
                                            <input
                                                name='email'
                                                type="email"
                                                placeholder=''
                                                className='bg-white w-full py-2 px-3 rounded-lg focus:outline-none focus:border-blue-800 transition-colors'
                                            />
                                        </div>
                                    </div>
                                </>
                            )} */}


                        </>
                        :
                        <>
                            <div className="mt-4">
                                <div className="flex items-center gap-3 border relative p-3 bg-white my-2 rounded-3">
                                    <div className="shrink-0">
                                        <img
                                            src={Product}
                                            alt="product"
                                            className='h-26 w-26 sm:h-28 sm:w-28 md:h-34 md:w-34 object-cover rounded-3'
                                        />
                                    </div>
                                    <div className='flex-1'>
                                        <p className='font-bold md:text-xl text-sm mb-1  '>Born Care Pre Diaper Oil</p>
                                        <p className='text-gray-500 mb-1 md:text-md text-sm'>Order ID : #MIRKL1234</p>
                                        <p className='text-gray-500 mb-2 md:text-md text-sm'>Ordered on : 07/11/2025</p>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                            {/* Price - Mobile below status, Desktop on right */}
                                           
                                            <p className='inline-block border px-3 py-1.5  w-fit rounded-full bg-[#E6E9EC] text-[#3B5875] text-xs sm:text-sm font-medium'>
                                                Arriving on 07 Jul 2025
                                            </p>
                                             <p className='text-[#3B5875] text-md sm:text-2xl font-bold'>
                                                ₹2,999.25
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 border relative p-3 bg-white my-2 rounded-3">
                                    <div className="shrink-0">
                                        <img
                                            src={Product}
                                            alt="product"
                                            className='h-26 w-26 sm:h-28 sm:w-28 md:h-34 md:w-34 object-cover rounded-3'
                                        />
                                    </div>
                                    <div className='flex-1'>
                                        <p className='font-bold md:text-xl text-sm mb-1  '>Born Care Pre Diaper Oil</p>
                                        <p className='text-gray-500 mb-1 md:text-md text-sm'>Order ID : #MIRKL1234</p>
                                        <p className='text-gray-500 mb-2 md:text-md text-sm'>Ordered on : 07/11/2025</p>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                            {/* Price - Mobile below status, Desktop on right */}
                                           
                                            <p className='inline-block border px-3 py-1.5  w-fit rounded-full bg-[#3B5875] text-[#E6E9EC] text-xs sm:text-sm font-medium'>
                                                Delivered on 04 Jul 2025
                                            </p>
                                             <p className='text-[#3B5875] text-md sm:text-2xl font-bold'>
                                                ₹2,249.25
                                            </p>

                                        </div>
                                    </div>
                                </div>




                            </div>
                        </>
                    }
                </div>

            </section>
            {address &&
                <div className="fixed inset-0  z-50  ">
                    <Address onClose={() => setAddress(false)} />
                </div>
            }

            <AutoCarouselProduct />

        </>
    )
}

export default AccountHome
