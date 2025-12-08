import React, { useState } from 'react'
import NavBar from '../Home/Navbar'
import SectionBanner from '../SectionBanner'
import Footer from '../Home/Footer'
import { Eye, EyeOff } from 'lucide-react';


const ChangePassword = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <>
            <NavBar />
            <SectionBanner title="Set Password" />
            <section className='max-w-6xl mx-auto flex justify-center items-center py-10 min-h-screen'>
                <div className='p-3 w-full md:w-lg '>
                   {/* <h1>Change </h1> */}
                    <form >
                        {/* Password */}
                        <div className="mb-2">
                            <label htmlFor="pwd" className='block text-md text-gray-600 mb-2'>
                                Enter Your Password
                            </label>
                            <div className="relative">
                                <input
                                    id='pwd'
                                    name='pwd'
                                    type={showPassword ? "text" : "password"}
                                    // value={signupData.pwd}
                                    // onChange={signupChange}
                                    placeholder='New Password'
                                    className='bg-white py-2 px-3 w-full rounded-lg border border-gray-200 focus:outline-none focus:border-green-600 transition-colors pr-12'
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                            {/* {errors.pwd && <p className='text-red-400 mt-1 ps-1 text-xs'>{errors.pwd}</p>} */}
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-4">
                            <label htmlFor="cpassword" className='block text-md text-gray-600 mb-2'>
                                Re-Enter Your Password
                            </label>
                            <div className="relative">
                                <input
                                    id='confirmPassword'
                                    name='cpassword'
                                    type={showConfirmPassword ? "text" : "password"}
                                    // value={signupData.cpassword}
                                    // onChange={signupChange}
                                    placeholder='Confirm New Password'
                                    className='bg-white w-full py-2 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-600 transition-colors pr-12'
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                            {/* {errors.cpassword && <p className='text-red-400 mt-1 ps-1 text-xs'>{errors.cpassword}</p>} */}
                        </div>
                        <button
                            type="submit"
                            className="bg-[#3B5875] text-white px-4 py-2 my-3 rounded w-full"
                        >
                            <p> Change Password</p>
                        </button>
                    </form>

                </div>
            </section>
            <Footer />

        </>

    )
}

export default ChangePassword
