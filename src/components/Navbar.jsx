import React from 'react'
import { useState } from 'react'

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';


// w-full sets full width
// fuck it just look at tailwind docs/ cheatsheet
// need to read docs on your own to become god otherwise will become frank
const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li 
              key={nav.id} 
              className={`font-poppins font-normal cursor-pointer text-[16px]${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>

              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
    </nav>

  );
}

export default Navbar
