import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed bg-[#000000e2] text-white mx-auto px-5 py-3 flex  sm:justify-between items-center justify-between w-full h-[10vh]  font-montserrat">
      <a className=" mob:mt-6 text-[24px] w-[278px] lg:w-[30%] h-[8vh] justify-center  flex flex-col items-center hover:text-[#cacaca] transition-colors cursor-pointer tracking-[20px] sm:tracking-[10px] font-semibold mob:text-[14px] mob:tracking-[10px] mob:w-[160px]  sm:text-[14px]  sm:w-[160px]   ">
        <p className="lg:text-[24px] lg:tracking-[30px]" >MINDTECH</p>
        <p className="text-[16px] sm:text-[8px] font-light lg:tracking-[20px] mob:text-[6px]">TECHNO</p>
      </a>

      <button
        className="sm:hidden text-white text-xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>


      <div className={`  sm:w-[80%] sm:flex flex-grow ${menuOpen ? "block" : "hidden"} mob:absolute mob:right-[140px] mob:top-[20px] sm:h-[8vh] sm:items-center  lg:w-[70%]  `}>
        <ul className="flex  flex-col sm:flex-row  sm:w-[100%] sm:justify-evenly mob:absolute mob:bg-[#000000e0] mob:rounded-[2%] mob:p-1 ">
          <li className="text-lg font-medium sm:mr-4 sm:text-[11px] md:text-[16px] hover:border-b-[1px]  hover:border-white ">
            <Link to="">Home</Link>
          </li>
          <li className="text-lg font-medium sm:mr-4 sm:text-[11px] md:text-[16px] hover:border-b-[1px] hover:border-white">
            <Link to="">Login | Register</Link>
          </li>
          <li className="text-lg font-medium sm:mr-4 sm:text-[11px] md:text-[16px] hover:border-b-[1px] hover:border-white">
            <Link to="">Store</Link>
          </li>
          <li className="text-lg font-medium sm:text-[11px] md:text-[16px] hover:border-b-[1px] hover:border-white">
            <Link to="">Details</Link>
          </li>
          <div className="hover:cursor-pointer mob:flex-col   flex justify-evenly sm:items-center sm:ml-2 w-[90px]    ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6  sm:w-4 sm:h-4 md:w-6 md:h-6 hover:border-b-[1px] hover:border-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6  sm:w-4 sm:h-4 md:w-6 md:h-6 hover:border-b-[1px] hover:border-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6  sm:w-4 sm:h-4 md:w-6 md:h-6 hover:border-b-[1px] hover:border-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>


          </div>
        </ul>
        </div>
      </div>
    );
  }




     