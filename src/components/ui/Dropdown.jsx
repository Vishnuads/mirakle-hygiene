import { CaretDown } from "phosphor-react";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ options = [], onSelect, placeholder = "Select" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full md:w-auto">
      {/* Trigger Button */}
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
        className="
          flex justify-between items-center 
          w-full md:w-auto 
          rounded-md 
          px-4 py-2  md:text-white
          text-sm  text-white
         gap-1 transition
        "
      >
        {placeholder}

        <CaretDown 
          className={` h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="
            absolute right-0 mt-2 
            w-full md:w-56 
            bg-white shadow-lg rounded-md 
            ring-1 ring-black ring-opacity-5 
            animate-fadeIn
            z-20
          "
        >
          <ul className="py-1 max-h-54 overflow-y-auto px-0 mb-0">
            {options.map((option, index) => (
              <li key={index} className="hover:bg-gray-100 hover:text-gray-900 px-3 ">
                <Link
                  to={option.value}
                  onClick={() => handleSelect(option)}
                  className="
                    block  py-2 text-sm text-gray-700
                    
                    transition
                  "
                >
                  {option.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
