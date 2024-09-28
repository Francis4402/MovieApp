import Link from "next/link";
import { FaBars, FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-5">
      <nav className="container w-full mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-10">
              <Link className="flex-none font-semibold text-2xl text-white focus:outline-none focus:opacity-80" href="/" aria-label="Brand">Movie App</Link>

              <div id="hs-navbar-basic-usage" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow lg:block" aria-labelledby="hs-navbar-basic-usage-collapse">
                <div className="flex flex-col gap-y-3 sm:gap-y-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                  <Link href={"/"} className="sm:p-2 text-lg text-blue-500 focus:outline-none">Home</Link>

                  <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover] [--auto-close:false] [--is-collapse:true] sm:[--is-collapse:false] z-20">
                    <button id="hs-mega-menu" type="button" className="hs-dropdown-toggle sm:p-2 flex items-center w-full text-gray-600 text-lg hover:text-gray-400 focus:outline-none focus:text-gray-400" aria-haspopup="menu" aria-expanded="false" aria-label="Mega Menu">
                      Mega Menu
                      <IoIosArrowDown className="hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0 duration-300 ms-2 shrink-0 size-4" />
                    </button>

                    <div className="hs-dropdown-menu transition-[height] sm:transition-[opacity,margin] duration-300 ease-in-out sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 sm:mt-3 top-full start-0 min-w-60 bg-white sm:shadow-md rounded-lg py-2 sm:px-2 sm: before:absolute" role="menu" aria-orientation="vertical" aria-labelledby="hs-mega-menu">
                      <div className="sm:grid sm:grid-cols-3">
                        <div className="flex flex-col">
                          <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                            About
                          </Link>
                          <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                            Services
                          </Link>
                          <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                            Customer Story
                          </Link>
                        </div>

                        <div className="flex flex-col">
                          <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                            Careers
                          </Link>
                          <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                            Careers: Overview
                          </Link>
                          <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                            Careers: Apply
                          </Link>
                        </div>

                        <div className="flex flex-col">
                          <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                            Log In
                          </Link>
                          <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                            Sign Up
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:hidden">
              <button type="button" className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
                <FaBars />
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <div className="sm:flex hidden items-center gap-2 relative w-[15rem]">
                <input type="text" placeholder="Search..." className="bg-gray-500 text-white px-4 py-2 rounded-md w-full" />
                <button className="absolute right-3 text-gray-400">
                    <FaSearch />
                </button>
            </div>

            <Link href={"/auth/login"} className="hidden md:flex px-5 py-2 rounded-md bg-blue-500 text-white">
                Login
            </Link>
          </div>
          
        </div>

        <div id="hs-navbar-example" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow" aria-labelledby="hs-navbar-example-collapse">
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <Link className="font-medium text-blue-500 focus:outline-none" href="#">Landing</Link>
            <Link className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="#">Account</Link>
            <Link className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="#">Work</Link>
            <Link className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="#">Blog</Link>
          </div>
        </div>
        
      </nav>
    </header>
  )
}

export default Navbar