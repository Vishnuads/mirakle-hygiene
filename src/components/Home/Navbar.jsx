import React, { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from '../../assets/images/logo-main.png'
import { Link, NavLink, useLocation } from "react-router-dom";
import Heart1 from '../../assets/icons/heart.svg'
import { Heart } from 'phosphor-react'
import Login from "@/components/Login/Login";
import { CartContext } from "@/context/CartContext";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Dropdown from "../ui/Dropdown";
import { AiOutlineUser } from "react-icons/ai";


function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartItems } = useContext(CartContext);
  const location = useLocation();
  const isActive = location.pathname === "/wishlist";

  const options = [
    { label: 'Born care', value: '/products/born-care' },
    { label: 'He care', value: '/products/he-care' },
    { label: 'She care', value: '/products/she-care' },
    { label: 'Granny care', value: '/products/granny-care' },
  ];

  const handleOptionSelect = (option) => {
    // console.log('Selected:', option);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [showLogin, setShowLogin] = useState(false);
  const loggedin = false

  return (
    <>
      <nav className="nav-main shadow-lg w-full fixed top-0 backdrop-blur-sm  z-50 ">
        {/* Desktop & Mobile Container */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="shrink-0">
              <Link to="/" className="flex items-center">
                <img
                  src={Logo}
                  alt="Mirakle"
                  className="h-8 md:h-14 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold" + " "
                    : "text-white font-medium"
                }
                style={({ isActive }) =>
                  isActive ? { color: "#C48C4B" } : {}
                }
              >
                <p>Home</p>
              </NavLink>

              <Dropdown
                options={options}
                onSelect={handleOptionSelect}
                placeholder="Products"
              />
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold" + " "
                    : "text-white font-medium"
                }
                style={({ isActive }) =>
                  isActive ? { color: "#C48C4B" } : {}
                }
              >
                <p>Contact</p>
              </NavLink>
            </div>

            {/* Desktop Search & Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center justify-center gap-3">

                <Link to="/wishlist">
                  <button className="p-2 text-white border border-[#25D366] rounded-full" style={{ borderRadius: "50%" }}>
                    {isActive
                      ? <Heart size={24} color="#eb0000" weight="fill" className="transition-transform w-5 h-5" />
                      : <Heart size={24} color="#fff" className="transition-transform w-5 h-5 " />}
                  </button>
                </Link>


                <Link to={'/cart'}>
                  <button className="text-black border border-gray-300 rounded-full  hover:text-green-100 transition-colors relative" style={{ borderRadius: "50%", padding: "8px" }}>
                    <MdOutlineShoppingCart className="w-5 h-5 text-white" />
                    {cartItems.length > 0 &&
                      <span className="absolute -top-1 right-1 bg-white text-black text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                        {cartItems.length}
                      </span>}
                  </button>

                </Link>
                <Link>
                  <button className="p-2 border border-[#25D366] rounded-full  flex items-center justify-center" style={{ borderRadius: "50%" }}>
                    <FaWhatsapp className="w-5 h-5 text-white" />
                  </button>
                </Link>

                {loggedin ?
                  <Link to="/account">
                    <button className="text-white p-2 border border-gray-300 rounded-full hover:border-green-400  transition-colors flex items-center justify-center" style={{ borderRadius: "25px", padding: "5px 15px" }}>
                      <AiOutlineUser className="w-6 h-6" /> Login
                    </button>
                  </Link>
                  :
                  <button className="text-white  border border-gray-300 rounded-full hover:border-green-400  transition-colors flex items-center justify-center" style={{ borderRadius: "25px", padding: "5px 15px" }}
                    onClick={() => setShowLogin(true)}
                  >

                    <AiOutlineUser className="w-5 h-5 mr-1" /> <span>Login</span>
                  </button>
                }
              </div>
            </div>

            {/* Mobile Icons & Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <Link to="/cart" >
                <button className="text-white p-2 border border-gray-300 rounded-full hover:border-green-400  transition-colors flex items-center justify-center" style={{ borderRadius: "50%" }}>
                  <MdOutlineShoppingCart className="w-4 h-4 text-white" />
                  {cartItems.length > 0 &&
                    <span style={{ top: "15px", right: "121px", backgroundColor: "#fff" }} className="absolute  text-black text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                      {cartItems.length}
                    </span>}
                </button>
              </Link>
              {loggedin ?
                <Link to="/account" >
                  <button className="text-white p-2 border border-gray-300 rounded-full hover:border-green-400  transition-colors flex items-center justify-center" style={{ borderRadius: "50%" }}>
                    {/* <img src={User} alt="user" className="w-6 h-6" /> */}
                    <AiOutlineUser className="w-4 h-4" />
                  </button>
                </Link>
                :
                <button className="text-white p-2 border border-gray-300 rounded-full hover:border-green-400  transition-colors flex items-center justify-center" style={{ borderRadius: "50%" }}
                  onClick={() => setShowLogin(true)}>
                  {/* <img src={User} alt="user" className="w-6 h-6 color-white" /> */}
                  <AiOutlineUser className="w-4 h-4" />
                </button>
              }
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-green-100 transition-colors p-1"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-[height] bg-white duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-1/2" : "max-h-0"
            }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-4  ">
            <div>
             <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-bold" : "text-black font-medium"
              }
              style={({ isActive }) => (isActive ? { color: "#C48C4B" } : {})}
            >
              <p>Home</p>
            </NavLink></div>

            {options.map((option, idx) => (
              <div key={idx}>
                <NavLink
                  to={option.value}
                  className={({ isActive }) =>
                    isActive ? "font-bold" : "text-black font-medium mb-5"
                  }
                  style={({ isActive }) => (isActive ? { color: "#C48C4B" } : {})}
                >
                  <p>{option.label}</p>
                </NavLink>
                </div>
            ))}
           <div>
           <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "font-bold" : "text-black font-medium"
              }
              style={({ isActive }) => (isActive ? { color: "#C48C4B" } : {})}
            >
              <p>Contact</p>
            </NavLink>
            </div>

            {/* Bottom Icons */}
            <div className="flex items-center justify-around pt-4 border-t border-black">
              <Link to="/wishlist">
                <button className="flex flex-col items-center">
                  <img src={Heart1} alt="heart" className="w-6 h-6" />
                  <span className="text-xs mt-1">Wishlist</span>
                </button>
              </Link>

              <Link>
                <button className="flex flex-col items-center">
                  <FaWhatsapp className="w-6 h-6 text-black" />
                  <span className="text-xs mt-1">Whatsapp</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

      </nav>

      {showLogin &&
        <div className="fixed inset-0 z-50 ">

          <Login close={() => setShowLogin(false)} />
        </div>
      }


    </>

  );
}

export default NavBar;