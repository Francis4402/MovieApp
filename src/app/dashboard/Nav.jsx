"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { FaBars, FaSearch } from "react-icons/fa"
import { useUser } from "../context/user"
import UseCreateBucketUrl from "../hooks/useCreateBucketUrl"
import { useRouter } from "next/navigation"
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const Nav = () => {
    const {user, isLoading, logout } = useUser();
    const router = useRouter();

    useEffect(() => {
        import('flowbite').then(flowbite => {
            flowbite.initFlowbite();
        });
    })

    const handleLogout = async () => {
        await logout();
        router.push('/');
      }


  return (
    <div className="border-b px-4 py-2.5 bg-gray-800 border-gray-700 fixed left-0 right-0 top-0 z-50">
        <div className="flex flex-wrap justify-between items-center">
            <div className="flex justify-start items-center">
                <button data-drawer-target="drawer-navigation"
                data-drawer-toggle="drawer-navigation"
                aria-controls="drawer-navigation"
                className="p-2 mr-2 rounded-lg cursor-pointer md:hidden focus:bg-gray-700 focus:ring-2 focus:ring-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
                    <FaBars size={20} />
                    <span className="sr-only">Toggle sidebar</span>
                </button>

                <Link href="/" className="flex items-center justify-between mr-4 gap-2">
                    <Image
                    src="https://flowbite.s3.amazonaws.com/logo.svg" width={40} height={40}
                    alt="Flowbite Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Movie App</span>
                </Link>

                <form method="GET" className="hidden md:block md:pl-2">
                    <label htmlFor="topbar-search" className="sr-only">Search</label>
                    <div className="relative w-64 md:w-96">
                    <div
                        className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                    >
                        <FaSearch className="text-gray-500"/>
                    </div>
                    <input
                        type="text"
                        name="email"
                        id="topbar-search"
                        className="border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Search"
                    />
                    </div>
                </form>

            </div>

            <div className="flex items-center lg:order-2">
                <button
                data-drawer-toggle="drawer-navigation"
                aria-controls="drawer-navigation"
                className="p-2 mr-1 rounded-lg md:hidden text-gray-400 hover:text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-600">
                    <span className="sr-only">Toggle search</span>
                    <FaSearch size={20} />
                </button>

                <button
                    className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-600"
                    id="user-menu-button"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown"
                >
                {
                    isLoading ? (
                        <AiOutlineLoading3Quarters size={20} className="text-blue-600 animate-spin" />
                    ) : (
                        <div>
                            <span className="sr-only">Open user menu</span>
                            <Image
                            className="w-8 h-8 rounded-full"
                            src={UseCreateBucketUrl(user?.image)}
                            alt="user photo"
                            width={100} height={100}
                            />
                        </div>
                    )
                }
                </button>

                <div className="hidden z-50 my-4 w-56 text-base list-none divide-y shadow bg-gray-700 divide-gray-600 rounded-xl"
                id="dropdown">
                    <div className="py-3 px-4">
                        <span className="block text-sm font-semibold text-white">{user?.name}</span>
                    </div>

                    <ul
                        class="py-1 text-gray-700 text-gray-300"
                        aria-labelledby="dropdown"
                        >
                        <li>
                            <button
                            onClick={handleLogout}
                            class="w-full text-start py-2 px-4 text-sm hover:bg-gray-600 hover:rounded-xl text-white"
                            >Sign out</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav