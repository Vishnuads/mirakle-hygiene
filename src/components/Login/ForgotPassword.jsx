import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo-main.png'
import { X } from 'lucide-react';


const ForgotPassword = ({ onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trigger sending verification link for `email`
    console.log('Send verification link to', email);
  };

  return (
    <>
      <div className="bg-black/70 flex items-center justify-center min-h-screen" onClick={onClose}>

        <div className="bg-white p-6 w-xl rounded-lg relative" onClick={(e)=>e.stopPropagation() }>
          <div className="absolute top-5 right-5">
            <button onClick={onClose} className='border-1 text-red-600  border-red-600 rounded-5 p-1 '>
              <X size={18} />
            </button>
          </div>
          <div className="flex items-center justify-center">
            <img src={Logo} alt="Logo" className='w-32' />
          </div>
          <p className='font-bold'>Enter your Email to get verification link</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="border p-2 rounded w-full my-3 "
            />

            <Link to="/change">
              <button
                type="submit"
                className="bg-[#56750A] text-white px-4 py-2 rounded w-full"
              >
                <p> Send Link</p>
              </button>
            </Link>
          </form>
        </div>

      </div>

    </>
  );
};

export default ForgotPassword;
