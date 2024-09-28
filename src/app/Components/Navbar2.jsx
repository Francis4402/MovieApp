"use client"

import Link from 'next/link';
import { useEffect } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa'
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar2 = () => {

  useEffect(() => {
    import('flowbite').then(flowbite => {
      flowbite.initFlowbite();
    });
  }, []);

  return (
    
    <nav className="border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-5 lg:px-0 px-10">
      <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Movie App</span>
      </a>
      <div className="flex md:order-2">
        
        <div className="relative hidden md:block">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaSearch size={20} className='text-gray-500' />
            <span className="sr-only">Search icon</span>
          </div>
          <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm border rounded-lg bg-transparent text-white border-gray-500 focus:outline-none duration-200" placeholder="Search..." />
        </div>
        <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2" aria-controls="navbar-search" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <FaBars size={20} />
        </button>
      </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <FaSearch size={20} className='text-gray-500' />
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
          </div>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a href="#" className="block py-2 px-3 text-gray-300 rounded md:p-0">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-300 rounded md:p-0">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-300 rounded md:p-0 ">Services</a>
            </li>
            <li>
              <Link href="/auth/login" className="block py-2 px-3 text-gray-300 rounded md:p-0 ">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar2