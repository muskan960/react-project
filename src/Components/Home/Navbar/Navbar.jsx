
import React, { useState } from "react";
import { Sun, Moon, ShoppingCart, Search, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.body.style.backgroundColor = "#555555";
      document.body.style.color = " #F9FAFB";
    } else {
      document.body.style.backgroundColor = " #F9FAFB";
      document.body.style.color = "#555555";
    }
  };
  return (
    <>

      <div className={`shadow-md  ${darkMode ? 'bg-[#555555]' : 'bg-yellow-100'}`}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">

          <h1
            className={`text-2xl sm:text-3xl md:text-4xl font-bold italic tracking-wide ${darkMode ? 'text-black' : 'text-gray-900'
              }`}
            style={{ fontFamily: "'Pinyon Script', cursive" }}
          >
            AuraWear
          </h1>

          {/* Search */}
          <div className="hidden md:flex flex-1 justify-center mx-4">
            <div className="relative w-full max-w-sm">
              <input
                type="text"
                placeholder="Search"
                className={`w-full rounded-full px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-400
                  ${darkMode ? 'bg-[#111111] text-white placeholder-gray-300' : 'bg-white text-gray-700 placeholder-gray-500'}`}
              />
              <Search size={18} className={`absolute top-1/2 -translate-y-1/2 right-3 ${darkMode ? 'text-white' : 'text-gray-500'}`} />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="bg-orange-400 text-white py-1 px-3 sm:px-4 rounded-full flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
              <ShoppingCart size={16} /> <span className="hidden sm:inline">Order</span>
            </button>
            <button
              onClick={toggleDarkMode}
              className="bg-blue-400 text-white py-1 px-3 rounded-full flex items-center gap-2"
            >
              {darkMode ? <Sun size={18} className="text-yellow-600" /> : <Moon size={18} fill="black" />}
            </button>
            {/* Hamburger for mobile */}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </div>
      </div>

      {/* LOWER NAV */}
      <div className={`${darkMode ? 'bg-[#111111] text-white' : 'bg-white text-gray-800'} shadow-sm`}>
        {/* Desktop Menu */}
        <nav className="hidden md:flex container mx-auto px-4 py-2 justify-center gap-14 font-semibold text-base">
          <NavLink to="/" className="hover:text-orange-500 transition">Home</NavLink>
          <NavLink to="/" className="hover:text-orange-500 transition">Deal</NavLink>
          <NavLink to="/" className="hover:text-orange-500 transition">New Arrival</NavLink>
          <NavLink to="/" className="hover:text-orange-500 transition">Packages</NavLink>
          <NavLink to="/" className="hover:text-orange-500 transition">Sign</NavLink>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="flex flex-col md:hidden container mx-auto px-4 py-2 gap-3 font-semibold text-base">
            <NavLink to="/" className="hover:text-orange-500 transition" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/" className="hover:text-orange-500 transition" onClick={() => setMenuOpen(false)}>Deal</NavLink>
            <NavLink to="/" className="hover:text-orange-500 transition" onClick={() => setMenuOpen(false)}>New Arrival</NavLink>
            <NavLink to="/" className="hover:text-orange-500 transition" onClick={() => setMenuOpen(false)}>Packages</NavLink>
            <NavLink to="/" className="hover:text-orange-500 transition" onClick={() => setMenuOpen(false)}>Sign</NavLink>
          </nav>
        )}
      </div>
    </>
  );
}

export default Navbar;






