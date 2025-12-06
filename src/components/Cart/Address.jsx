import React, { useState } from 'react'
import useForm from '@/hooks/useForm';
import Validation from '@/Vallidations/Validation';
import Back from '../../assets/icons/arrow-bend-up-left.svg'

const Address = ({ onClose }) => {
    const { addressData, errors, handleChange, handleSubmit } = useForm(Validation);

    return (
        <>
            <div className='bg-black/60 min-h-screen flex items-center justify-center overflow-y-scroll' onClick={onClose}>

                <form onSubmit={handleSubmit}>
                    <div className="max-w-4xl bg-[#F6F6F6]  py-3 px-4 md:rounded-lg rounded-none m-4  overflow-y-scroll h-screen md:h-fit addtocart" onClick={(e) => e.stopPropagation()}>
                        <h1 className='text-3xl font-bold text-gray-900'>Add a new Address</h1>
                        <p className='text-sm text-gray-600'>Enter your new Address where you can be contacted</p>
                        <div className="my-2 flex items-center">
                            <label htmlFor="title" className='block text-sm text-gray-500 pr-3 '>
                                Title
                            </label>
                            <input
                                name='title'
                                type="text"
                                value={addressData.title}
                                onChange={handleChange}
                                placeholder='Home, Work, ...'
                                className='bg-white  py-2 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-600 transition-colors'
                            />
                           
                        </div>
                         {errors.title && <p className='text-red-400 mt-1 ps-1 text-sm'>{errors.title}</p>}
                        <div className='grid md:grid-cols-3 gap-2 my-1'>
                            <div className="mb-2">
                                <label htmlFor="cname" className='block text-sm text-gray-400 mb-1'>
                                    Receiver's Name
                                </label>
                                <input
                                    name='cname'
                                    type="text"
                                    placeholder=''
                                    value={addressData.cname}
                                    onChange={handleChange}
                                    className='bg-white w-full py-2 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-600 transition-colors'
                                />
                                {errors.cname && <p className='text-red-400 mt-1 ps-1 text-sm'>{errors.cname}</p>}
                            </div>
                            <div className="mb-2">
                                <label htmlFor="contact1" className='block text-sm text-gray-400 mb-1'>
                                    Contact Number
                                </label>
                                <input
                                    name='contact1'
                                    type="number"
                                    placeholder=''
                                    value={addressData.number1}
                                    onChange={handleChange}
                                    className='bg-white w-full py-2 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-600 transition-colors'
                                />
                                {errors.number1 && <p className='text-red-400 mt-1 ps-1 text-sm'>{errors.number1}</p>}
                            </div>
                            <div className="mb-2">
                                <label htmlFor="contact2" className='block text-sm text-gray-400 mb-1'>
                                    Alternative Number
                                </label>
                                <input
                                    name='contact2'
                                    type="number"
                                    value={addressData.number2}
                                    onChange={handleChange}
                                    placeholder=''
                                    className='bg-white w-full py-2 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-600 transition-colors'
                                />
                                {errors.number2 && <p className='text-red-400 mt-1 ps-1 text-sm'>{errors.number2}</p>}
                            </div>

                        </div>
                        <div className=" grid md:grid-cols-3 grid-cols-1 gap-2 my-1">
                            <div className="mb-2">
                                <label htmlFor="door" className='block text-sm text-gray-400 mb-1'>
                                    Door no
                                </label>
                                <input
                                    name='door'
                                    type="text"
                                    placeholder=' '
                                    value={addressData.door}
                                    onChange={handleChange}
                                    className='bg-white w-full py-2 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-600 transition-colors pr-12'
                                />
                                {errors.door && <p className='text-red-400 mt-1 ps-1 text-sm'>{errors.door}</p>}
                            </div>

                            <div className="mb-2">
                                <label htmlFor="street" className='block text-sm text-gray-400 mb-1'>
                                    Street
                                </label>
                                <input
                                    name='street'
                                    type="text"
                                    placeholder=' '
                                    value={addressData.street}
                                    onChange={handleChange}
                                    className='bg-white w-full py-2 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-600 transition-colors pr-12'
                                />
                                {errors.street && <p className='text-red-400 mt-1 ps-1 text-sm'>{errors.street}</p>}
                            </div>
                            <div className="mb-2">
                                <label htmlFor="area" className='block text-sm text-gray-400 mb-1'>
                                    Area
                                </label>
                                <input
                                    name='area'
                                    type="text"
                                    placeholder=' '
                                    value={addressData.area}
                                    onChange={handleChange}
                                    className='bg-white w-full py-2 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-600 transition-colors pr-12'
                                />
                                {errors.area && <p className='text-red-400 mt-1 ps-1 text-sm'>{errors.area}</p>}
                            </div>

                        </div>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-2 my-1">
                            <div className="mb-2">
                                <label htmlFor="city" className='block text-sm text-gray-400 mb-1'>
                                    City
                                </label>
                                <input
                                    name='city'
                                    type="text"
                                    placeholder=' '
                                    value={addressData.city}
                                    onChange={handleChange}
                                    className='bg-white w-full py-2 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-600 transition-colors pr-12'
                                />
                                {errors.city && <p className='text-red-400 mt-1 ps-1 text-sm'>{errors.city}</p>}
                            </div>
                            <div className="mb-2">
                                <label htmlFor="state" className='block text-sm text-gray-400 mb-1'>
                                    State
                                </label>
                                <input
                                    name='state'
                                    type="text"
                                    placeholder=' '
                                    value={addressData.state}
                                    onChange={handleChange}
                                    className='bg-white w-full py-2 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-600 transition-colors pr-12'
                                />
                                {errors.state && <p className='text-red-400 mt-1 ps-1 text-sm'>{errors.state}</p>}
                            </div>
                            <div className="mb-2">
                                <label htmlFor="pincode" className='block text-sm text-gray-400 mb-1'>
                                    Pincode
                                </label>
                                <input
                                    name='pincode'
                                    type="number"
                                    placeholder=' '
                                    value={addressData.pincode}
                                    onChange={handleChange}
                                    className='bg-white w-full py-2 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-600 transition-colors pr-12'
                                />
                                {errors.pincode && <p className='text-red-400 mt-1 ps-1 text-sm'>{errors.pincode}</p>}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-2 ">
                            <button onClick={onClose} className='flex items-center justify-center border border-black py-2 px-3 bg-white rounded-3 my-2'>
                                <p className='flex items-center gap-2' > <img src={Back} alt="Icon" className='w-5 h-5' /> Back </p>
                            </button>
                            <button type='submit' className='flex items-center justify-center text-white py-2 px-3 bg-[#3B5875] rounded-3 my-2'>
                                <p >Save Address</p>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Address
