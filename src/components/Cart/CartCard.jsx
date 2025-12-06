import React from 'react';
import { Minus, Plus, Trash2, Heart } from 'lucide-react';
import { CartContext } from '@/context/CartContext';


const CartCard = ({name, image, tag, click, price, inQty, deQty, qty, addFav, isFav }) => {


  return (
    <div className="flex  border-gray-200 rounded-xl lg:p-3 p-3 bg-white  hover:shadow-lg transition-shadow mb-3">
      {/* Left Section - Checkbox & Image */}
      <div className="flex items-start gap-2 ">
        <input
          type="checkbox"
          // checked={isChecked}
          // onChange={(e) => setIsChecked(e.target.checked)}
          className="w-3 h-3 md:w-5 md:h-5 mt-1 cursor-pointer accent-green-800"
        />
        <img
          src={image}
          alt={name}
          className="md:w-32 md:h-32 w-24 h-24  object-contain rounded-lg"
        />
      </div>

      {/* Right Section - Product Details */}
      <div className="flex-1 md:mx-4 ml-3">
        {/* Product Name & Actions */}
        <div className="flex items-center justify-between my-3 ">
          
           {/* Product Tag */}
        {/* <div className=" mb-2">
          <p className="inline-blockm mb-0 w-fit px-2 py-[2px] text-xs border-[1px] border-[#56750A] text-[#56750A] rounded-3 ">
            {tag}
          </p>
        </div> */}
         <p className="md:text-xl text-sm font-semibold text-black line-clamp-2 mb-2">{name}</p>

          <div className="flex items-center gap-2">
            <button
              onClick={click}
              className="p-2 border  hover:bg-gray-100 rounded-5 transition-colors"
              aria-label="Delete item"
            >
              <Trash2 className="md:w-5 md:h-5 w-3 h-3 text-gray-900" />
            </button>
            <button
              onClick={addFav}
              className="p-2 border hover:bg-gray-100 rounded-5 transition-colors"
              aria-label="Add to wishlist"
            >
              {isFav 
              ? <Heart className="md:w-5 md:h-5 w-3 h-3 text-red-500 fill-red-500" />
              : <Heart className="md:w-5 md:h-5 w-3 h-3 text-gray-900" />
              }
              {/* {console.log(isFav)} */}
            </button>
          </div>
        </div>
       

       
        {/* Quantity Controls & Price */}
        <div className="flex items-center justify-between gap-2">
          {/* Quantity Controls */}
          <div className="flex items-center  overflow-hidden border border-gray-300 rounded-5 bg-white">
            <button
              onClick={deQty}
              className="md:w-10 md:h-8 w-8 h-5 border-gray-300  flex items-center justify-center hover:bg-gray-50 transition-colors border-r "
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 md:w-5 md:h-5 h-4 text-gray-600" />
            </button>
            <input
              type="text"
              value={qty.toString().padStart(2, '0')}
              readOnly
              className="md:w-14 md:h-8 w-10 h-6  qty text-center text-lg font-semibold text-gray-800 bg-white outline-none"
            />
            <button
              onClick={inQty}
              className="md:w-10 md:h-8 w-8 h-5 flex  border-gray-300  items-center justify-center hover:bg-gray-50 transition-colors border-l "
              aria-label="Increase quantity"
            >
              <Plus className="w-4 md:w-5 md:h-5 text-gray-600" />
            </button>
          </div>

          {/* Price */}
          <div className="text-right">
            <p className="md:text-2xl text-lg font-bold text-[#3B5875] mb-0">₹{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;