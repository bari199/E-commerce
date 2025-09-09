import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="my-10 text-sm">
      {/* Grid Section */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14">
        <div>  
          <img src={assets.logo} className="mb-5 w-32" alt="logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum cupiditate fuga incidunt.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum cupiditate fuga incidunt.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-825-899-8878</li>
            <li>lovely@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <hr className="my-5" />
      <p className="text-center text-sm text-gray-500">
        © 2024 forever.com — All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
