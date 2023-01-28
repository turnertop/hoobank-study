import React from 'react'
import { useState } from 'react'

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';


// w-full sets full width
// fuck it just look at tailwind docs/ cheatsheet
// need to read docs on your own to become god otherwise will become frank
// look into mapping and keys for javascript, need to review that shit further
// for the useState, it seems state is utilized to for mobile users, but how is that connected to img src and the div with sm:hidden ??? im guessing that toggle close and menu are svgs or images imported from assets and the toggle somehow tracks when its in mobile wtf??
//
//
// you can't onClick={() =>setToggle(!toggle)}, have to onClick={() => setToggle((prev) => !prev)} callback function call prev is not prev
const Navbar = () => {
  const [toggle, setToggle] = useState(false);



  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li 
              key={nav.id} 
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>

              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu}
              alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

 <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li 
              key={nav.id} 
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>

              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>


        </div>
      </div>


    </nav>

  );
}

export default Navbar
