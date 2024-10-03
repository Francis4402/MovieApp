import Link from "next/link"
import { FaHome, FaPlus, FaUsers } from "react-icons/fa"
import { MdDashboardCustomize } from "react-icons/md";

const Sidebar = () => {
  return (
    <aside
    className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full border-r md:translate-x-0 bg-gray-800 border-gray-700"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
        <div className="overflow-y-auto py-5 px-3 h-full bg-gray-800">
            <form className="md:hidden mb-2">
                <label htmlFor="sidebar-search" className="sr-only">Search</label>

                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                            className="w-5 h-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            ></path>
                        </svg>

                    </div>

                    <input
                        type="text"
                        name="search"
                        id="sidebar-search"
                        className="border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Search"
                    />
                </div>
            </form>

            <ul className="space-y-2">
                <li>
                    <Link
                    href="/"
                    className="flex items-center p-2 text-base font-medium rounded-lg text-white hover:bg-gray-700 group gap-2"
                    >
                        <FaHome/> Home
                    </Link>
                </li>

                <li>
                    <Link
                    href="/dashboard"
                    className="flex items-center p-2 text-base font-medium rounded-lg text-white hover:bg-gray-700 group gap-2"
                    >
                        <MdDashboardCustomize /> Dashboard
                    </Link>
                </li>

                <li>
                    <Link href="/dashboard/uploadvideo" className="flex items-center p-2 text-base font-medium rounded-lg text-white hover:bg-gray-700 group gap-2">
                        <FaPlus /> Upload Videos
                    </Link>
                </li>

                <li>
                    <Link href="/dashboard/allusers" className="flex items-center p-2 text-base font-medium rounded-lg text-white hover:bg-gray-700 group gap-2">
                        <FaUsers /> All Users
                    </Link>
                </li>
            </ul>
        </div>
    </aside>
  )
}

export default Sidebar