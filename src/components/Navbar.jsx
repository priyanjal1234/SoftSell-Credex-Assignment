import React from "react";
import { Briefcase } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full h-[70px] flex items-center justify-between px-5">
      <div className="flex items-center gap-2">
        <Briefcase className="h-6 w-6 text-blue-600" />
        <h1 className="text-xl font-bold">SoftSell</h1>
      </div>
      <ul className="text-gray-600 text-md flex items-center gap-8">
        <li className="cursor-pointer hover:text-blue-500">
          <a href="#working">How it works</a>
        </li>
        <li className="cursor-pointer hover:text-blue-500">
          <a href="#advantage">Why Choose us</a>
        </li>
        <li className="cursor-pointer hover:text-blue-500">
          <a href="#review">Testimonials</a>
        </li>
        <li className="bg-blue-600 cursor-pointer  text-white px-5 py-2 rounded-md  transition-colors">
          <a href="#contact">Get a Quote</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
