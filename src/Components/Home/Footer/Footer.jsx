import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Youtube, Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full  border-t border-gray-900 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12">

          <div className="text-center md:text-left">
            <h1
              className="text-4xl font-bold italic tracking-wide text-black mb-4"
              style={{ fontFamily: "'Pinyon Script', cursive" }}
            >
              AuraWear
            </h1>
            <p className="text-black text-sm leading-relaxed max-w-[260px] mx-auto md:mx-0">
              Your premium fashion destination. Quality, comfort & elegance in every piece.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4 mt-5">
              <Facebook className="w-5 h-5 cursor-pointer transition text-black"   />
              <Instagram className="w-5 h-5 cursor-pointer transition text-black" />
              <Youtube className="w-5 h-5 cursor-pointer transition text-black"  />
            </div>
          </div>

  
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-black mb-4">Shop</h3>
            <ul className="space-y-2 text-black text-mb">
              <li><NavLink className=" transition">Men</NavLink></li>
              <li><NavLink className=" transition">Women</NavLink></li>
              <li><NavLink className=" transition">Kids</NavLink></li>
              <li><NavLink className=" transition">New Arrivals</NavLink></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-black mb-4">Support</h3>
            <ul className="space-y-2 text-black text-mb">
              <li><NavLink className="hover:text-orange-500 transition">Support Center</NavLink></li>
              <li><NavLink className="hover:text-orange-500 transition">Returns</NavLink></li>
              <li><NavLink className="hover:text-orange-500 transition">Shipping Info</NavLink></li>
              <li><NavLink className="hover:text-orange-500 transition">FAQs</NavLink></li>
            </ul>
          </div>


          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-black mb-4">Contact</h3>
            <p className="flex items-center justify-center md:justify-start gap-3 text-black mb-2">
              <Phone className="w-5 h-5" /> +92 300 0000000
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3 text-black ">
              <Mail className="w-5 h-5" /> support@aurawear.com
            </p>
          </div>

        </div>

        <div className="text-center text-black text-sm mt-14 font-bold">
          © 2025 AuraWear — All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;


