"use client"

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa'
import { useUser } from '../context/user';
import { useRouter } from 'next/navigation';
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';
import UseCreateBucketUrl from '../hooks/useCreateBucketUrl';
import MoviesMenu from './DropMenu/MoviesMenu';
import TVShowsMenu from './DropMenu/TVShowsMenu';
import Sidebar from './DropMenu/Sidebar';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Navbar2 = () => {
  const {user, isLoading, logout} = useUser();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMoviesMenuOpen, setIsMoviesMenuOpen] = useState(false);
  const [isTVShowsMenuOpen, setIsTVShowsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const moviesMenuRef = useRef(null);
  const tvShowsMenuRef = useRef(null);

  useEffect(() => {
    import('flowbite').then(flowbite => {
      flowbite.initFlowbite();
    });

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (moviesMenuRef.current && !moviesMenuRef.current.contains(event.target) && !event.target.closest('.movies-menu')) {
        setIsMoviesMenuOpen(false);
      }
      if (tvShowsMenuRef.current && !tvShowsMenuRef.current.contains(event.target) && !event.target.closest('.tv-shows-menu')) {
        setIsTVShowsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMoviesMenu = () => {
    setIsMoviesMenuOpen(!isMoviesMenuOpen);
  }

  const toggleTVShowsMenu = () => {
    setIsTVShowsMenuOpen(!isTVShowsMenuOpen);
  }

  const handleLogout = async () => {
    await logout();
    router.push('/');
  }

  return (
    <nav className="border-gray-200 bg-gray-900">
      <div className="lg:max-w-screen-xl container md:px-0 px-5 flex flex-wrap items-center justify-between mx-auto py-5">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Movie App</span>
        </Link>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {isLoading ? (
            
            <AiOutlineLoading3Quarters size={20} className="text-blue-600 animate-spin" />

          ) : !user ? (
            <Link href="/auth/login" className='bg-blue-700 hover:bg-blue-500 px-4 py-2 rounded-md duration-200 hover:scale-105 text-white'>Login</Link>
          ) : (
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-600"
                onClick={toggleDropdown}
              >
                <span className="sr-only">Open user menu</span>
                <Image
                  className="w-8 h-8 rounded-full"
                  src={UseCreateBucketUrl(user.image)}
                  alt="user avatar"
                  width={32}
                  height={32}
                />
              </button>

              <div
                className={`z-50 w-32 absolute right-0 mt-2 text-base list-none divide-y rounded-lg shadow bg-gray-700 divide-gray-600 transition-all duration-200 ${
                  isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-white">{user.name}</span>
                </div>
                <ul className="py-2">
                  <li>
                    <Link href="/dashboard" className="block px-4 py-2 text-sm  hover:bg-gray-600 text-gray-200 hover:text-white">Dashboard</Link>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm  hover:bg-gray-600 text-gray-200 hover:text-white">Profile</a>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="block px-4 py-2 text-sm  hover:bg-gray-600 text-gray-200 hover:text-white w-full text-left">Sign out</button>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <button type="button" data-drawer-target="drawer-right" data-drawer-show="drawer-right" data-drawer-placement="right" aria-controls="drawer-right" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600">
            <span className="sr-only">Open main menu</span>
            <FaBars size={20} />
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <Link href="/" className="flex items-center gap-1 py-2 px-3 rounded md:p-0 text-white hover:text-blue-500 focus:text-blue-500 duration-200">Home</Link>
            </li>
            <li ref={moviesMenuRef}>
              <button onClick={toggleMoviesMenu} className="movies-menu flex items-center gap-1 py-2 px-3 cursor-pointer rounded md:p-0 text-white hover:text-blue-500 focus:text-blue-500 duration-200">Movies <IoIosArrowDown /></button>
            </li>
            
            <li ref={tvShowsMenuRef}>
              <button onClick={toggleTVShowsMenu} className="tv-shows-menu flex items-center gap-1 py-2 px-3 cursor-pointer rounded md:p-0 text-white hover:text-blue-500 focus:text-blue-500 duration-200">TV Shows <IoIosArrowDown /></button>
            </li>
          </ul>
        </div>

        <Sidebar drawer-right={'drawer-right'} />
      </div>

      <div ref={moviesMenuRef}>
        <MoviesMenu isOpen={isMoviesMenuOpen} />
      </div>

      <div ref={tvShowsMenuRef}>
        <TVShowsMenu isOpen={isTVShowsMenuOpen} />
      </div>

      
    </nav>
  )
}

export default Navbar2