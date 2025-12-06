import React, { useState } from 'react';
import { Eye, EyeOff, X } from 'lucide-react';
import LoginImg from '../../assets/images/product-desc2.png';
import Logo from '../../assets/images/logo-main.png';
import loginValidation from '@/Vallidations/loginValidation';
import signupValidation from '@/Vallidations/signupValidation';
import useForm from '@/hooks/useForm';
import ForgotPassword from './ForgotPassword';
import ChangePassword from './ChangePassword';
import { Link } from 'react-router-dom';


const Login = ({ close }) => {
    const [login, setLogin] = useState(false);
    const [loading, setLoading] = useState(false);
    const [forgotPwd, setForgotPwd] = useState(false);

    // Signup Password visibility & form data
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Login Password visibility & form data
    const [loginPassword, setLoginPassword] = useState(false);

    const {
        loginData, signupData, errors, loginChange, signupChange, handleLoginSubmit, handleSignupSubmit } = useForm(
            () => ({}),           // Dummy function for address validation (not used)
            loginValidation,
            signupValidation
        );

    const forgotPassword = () => {
        setForgotPwd(true);
        setLogin(false);
    }


    return (
        <>
            {!forgotPwd ? (
                !login ?
                    <>
                        <section className='min-h-screen bg-black/70 flex items-center justify-center p-4' >
                            <div className='max-w-4xl  w-full relative login-form' >
                                <div className="absolute top-5 right-5 z-10">
                                    <button onClick={close} className='border-1 text-red-600  border-red-600 rounded-5 p-1 '>
                                        <X size={18} />
                                    </button>
                                </div>
                                <div className="grid md:grid-cols-2 rounded-lg overflow-hidden ">
                                    <div className='hidden md:block '>
                                        <img
                                            src={LoginImg}
                                            className='w-full h-full object-cover '
                                        />
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <div className="bg-[#F6F6F6] px-8  ">
                                            <div className=" bg-[#3B5875] w-fit mx-auto py-2 px-3 mb-3 rounded-b-2xl flex items-center justify-center">
                                                <img src={Logo} alt="Logo" className='w-32' />
                                            </div>

                                            <h1 className='text-3xl font-bold text-gray-900'>Welcome Back !</h1>
                                            <p className='text-sm text-gray-600 mb-3'>Login to explore all the products and offers of our platform and see what’s new</p>

                                            <form onSubmit={handleLoginSubmit}>
                                                {/* Email */}
                                                <div className="mb-2">
                                                    <label htmlFor="email" className='block text-sm text-gray-400 mb-1'>
                                                        Enter Your Email Address
                                                    </label>
                                                    <input
                                                        id='email'
                                                        name='email'
                                                        type="email"
                                                        value={loginData.email}
                                                        onChange={loginChange}
                                                        placeholder=''
                                                        className='bg-white w-full py-2 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-600 transition-colors'
                                                    />
                                                    {errors.email && <p className='text-red-400 mt-1 ps-1 text-xs'>{errors.email}</p>}
                                                </div>

                                                {/* Password */}
                                                <div className="mb-2">
                                                    <label htmlFor="password2" className='block text-sm text-gray-400 mb-1'>
                                                        Enter Your Password
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            id='password'
                                                            name='password'
                                                            type={loginPassword ? "text" : "password"}
                                                            value={loginData.password}
                                                            onChange={loginChange}
                                                            placeholder=''
                                                            className='bg-white w-full py-2 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-600 transition-colors pr-12'
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => setLoginPassword(!loginPassword)}
                                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                                        >
                                                            {loginPassword ? (
                                                                <EyeOff className="w-5 h-5" />
                                                            ) : (
                                                                <Eye className="w-5 h-5" />
                                                            )}
                                                        </button>
                                                    </div>
                                                    {errors.password && <p className='text-red-400 mt-1 ps-1 text-xs'>{errors.password}</p>}
                                                </div>

                                                <div className="flex items-center justify-between my-3">
                                                    <div className='flex items-center gap-2 text-xs text-gray-400'>
                                                        <input type="checkbox" id='remember' name='remember' />
                                                        <label htmlFor="remember"> Remember Me</label>
                                                    </div>
                                                    <button type='button' className='' onClick={forgotPassword}>
                                                        <p className='mb-0 text-xs text-gray-600 underline'>Forgot Password?</p>
                                                    </button>
                                                </div>
                                                <Link to='/account'>
                                                    <button
                                                        // type='submit'
                                                        className='w-full bg-[#3B5875] hover:bg-blue-900 text-white font-semibold py-3 rounded-3 transition-colors duration-200'
                                                    >
                                                        <p className='mb-0'>Login</p>
                                                    </button>
                                                </Link>
                                            </form>
                                            <p className='text-center mb-3 mt-4 text-gray-700 '>
                                                Don’t have an account?{' '}
                                                <button
                                                    type="button"
                                                    onClick={() => setLogin(!login)}
                                                    className='text-[#3B5875] font-semibold underline'
                                                >
                                                    Register Now
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                    :
                    <>
                        <section className='min-h-screen bg-black/70 flex items-center justify-center p-4' >
                            <div className='max-w-4xl mx-auto w-full relative sign-form ' >
                                <div className="absolute top-5 right-5">
                                    <button onClick={close} className='border-1 text-red-600  border-red-600 rounded-5 p-1 '>
                                        <X size={18} />
                                    </button>
                                </div>
                                <div className="grid md:grid-cols-2 rounded-lg overflow-hidden ">
                                    <div className='hidden md:block '>
                                        <img
                                            src={LoginImg}
                                            className='w-full h-full object-cover '
                                        />
                                    </div>
                                    <div className='bg-[#F6F6F6]'>
                                        <div className="px-8 py-6">
                                            <h1 className='text-4xl font-bold mb-6 text-gray-900'>Sign Up</h1>
                                            <form onSubmit={handleSignupSubmit}>
                                                {/* First Name and Last Name */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2 mb-2">
                                                    <div>
                                                        <label htmlFor="fname" className='block text-sm text-gray-600 mb-1'>
                                                            First Name
                                                        </label>
                                                        <input
                                                            id='firstName'
                                                            name='fname'
                                                            type="text"
                                                            value={signupData.fname}
                                                            onChange={signupChange}
                                                            placeholder=''
                                                            className='bg-white w-full py-2 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-600 transition-colors'
                                                        />
                                                        {errors.fname && <p className='text-red-400 mt-1 ps-1 text-xs'>{errors.fname}</p>}
                                                    </div>
                                                    <div>
                                                        <label htmlFor="lname" className='block text-sm text-gray-600 mb-1'>
                                                            Last Name
                                                        </label>
                                                        <input
                                                            id='lastName'
                                                            name='lname'
                                                            type="text"
                                                            value={signupData.lname}
                                                            onChange={signupChange}
                                                            placeholder=''
                                                            className='bg-white w-full py-2 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-600 transition-colors'
                                                        />
                                                        {errors.lname && <p className='text-red-400 mt-1 ps-1 text-xs'>{errors.lname}</p>}
                                                    </div>
                                                </div>

                                                {/* Email */}
                                                <div className="mb-2">
                                                    <label htmlFor="mail" className='block text-sm text-gray-600 mb-1'>
                                                        Enter Your Email Address
                                                    </label>
                                                    <input
                                                        id='mail'
                                                        name='mail'
                                                        type="text"
                                                        value={signupData.mail}
                                                        onChange={signupChange}
                                                        placeholder=''
                                                        className='bg-white w-full py-2 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-600 transition-colors'
                                                    />
                                                    {errors.mail && <p className='text-red-400 mt-1 ps-1 text-xs'>{errors.mail}</p>}
                                                </div>

                                                {/* Password */}
                                                <div className="mb-2">
                                                    <label htmlFor="pwd" className='block text-sm text-gray-600 mb-1'>
                                                        Enter Your Password
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            id='pwd'
                                                            name='pwd'
                                                            type={showPassword ? "text" : "password"}
                                                            value={signupData.pwd}
                                                            onChange={signupChange}
                                                            placeholder=''
                                                            className='bg-white w-full py-2 px-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-600 transition-colors pr-12'
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
                                                    {errors.pwd && <p className='text-red-400 mt-1 ps-1 text-xs'>{errors.pwd}</p>}
                                                </div>

                                                {/* Confirm Password */}
                                                <div className="mb-4">
                                                    <label htmlFor="cpassword" className='block text-sm text-gray-600 mb-1'>
                                                        Re-Enter Your Password
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            id='confirmPassword'
                                                            name='cpassword'
                                                            type={showConfirmPassword ? "text" : "password"}
                                                            value={signupData.cpassword}
                                                            onChange={signupChange}
                                                            placeholder=''
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
                                                    {errors.cpassword && <p className='text-red-400 mt-1 ps-1 text-xs'>{errors.cpassword}</p>}
                                                </div>

                                                {/* Sign Up Button */}

                                                <button
                                                    type='submit'
                                                    className='w-full bg-[#3B5875] hover:bg-blue-900 text-white font-semibold py-3 rounded-3 transition-colors duration-200'
                                                >
                                                    Sign Up
                                                </button>
                                            </form>
                                            {/* Login Link */}
                                            <p className='text-center mb-0 mt-4 text-gray-700'>
                                                Already Have An Account?{' '}
                                                <button
                                                    type="button"
                                                    onClick={() => setLogin(!login)}
                                                    className='text-[#3B5875] font-semibold underline'
                                                >
                                                    Login
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
            )
                :
                <ForgotPassword onClose={close} />

            }
        </>
    );
};

export default Login;