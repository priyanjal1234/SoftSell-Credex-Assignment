import React, { useState } from "react";
import { Briefcase, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-[70px] flex items-center justify-between px-5 bg-white shadow-md relative z-10">
      <div className="flex items-center gap-2">
        <Briefcase className="h-6 w-6 text-blue-600" />
        <h1 className="text-xl font-bold">SoftSell</h1>
      </div>
      {/* Desktop Menu */}
      <ul className="hidden md:flex text-gray-600 text-md items-center gap-8">
        <li className="cursor-pointer hover:text-blue-500">
          <a href="#working">How it works</a>
        </li>
        <li className="cursor-pointer hover:text-blue-500">
          <a href="#advantage">Why Choose us</a>
        </li>
        <li className="cursor-pointer hover:text-blue-500">
          <a href="#review">Testimonials</a>
        </li>
        <li className="bg-blue-600 cursor-pointer text-white px-5 py-2 rounded-md transition-colors">
          <a href="#contact">Get a Quote</a>
        </li>
      </ul>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-[70px] left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden animate-slide-down">
          <li className="cursor-pointer hover:text-blue-500">
            <a href="#working" onClick={() => setMenuOpen(false)}>How it works</a>
          </li>
          <li className="cursor-pointer hover:text-blue-500">
            <a href="#advantage" onClick={() => setMenuOpen(false)}>Why Choose us</a>
          </li>
          <li className="cursor-pointer hover:text-blue-500">
            <a href="#review" onClick={() => setMenuOpen(false)}>Testimonials</a>
          </li>
          <li className="bg-blue-600 cursor-pointer text-white px-5 py-2 rounded-md transition-colors">
            <a href="#contact" onClick={() => setMenuOpen(false)}>Get a Quote</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
