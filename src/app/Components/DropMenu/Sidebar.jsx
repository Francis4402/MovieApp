import { IoIosClose } from "react-icons/io";

const Sidebar = () => {

  return (
    <div id="drawer-right" className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full w-80 bg-gray-800" aria-labelledby="drawer-right-label">
        


        <button type="button" data-drawer-hide="drawer-right" aria-controls="drawer-right" className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center hover:bg-gray-600 hover:text-white" >
            <IoIosClose size={30} />
            <span className="sr-only">Close menu</span>
        </button>
    
    </div>
  )
}

export default Sidebar