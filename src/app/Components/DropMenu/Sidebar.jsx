"use client"

import { movieGenre, tvGenre } from "@/Index";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Sidebar = () => {
    const [isMoviesOpen, setIsMoviesOpen] = useState(true);
    const [isTVSeriesOpen, setIsTVSeriesOpen] = useState(true);
    const dropdownRef = useRef(null);
    const tvdropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target) && !e.target.closest('.moviemenu')) {
                setIsMoviesOpen(false);
            }

            if (tvdropdownRef.current && !tvdropdownRef.current.contains(e.target) && !e.target.closest('.tvmenu')) {
                setIsTVSeriesOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMoviesDropdown = () => {
        setIsMoviesOpen(!isMoviesOpen);
    };

    const toggleTVSeriesDropdown = () => {
        setIsTVSeriesOpen(!isTVSeriesOpen);
    };

    return (
        <div id="drawer-right" className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full w-fit bg-gray-800" aria-labelledby="drawer-right-label">
            <button type="button" data-drawer-hide="drawer-right" aria-controls="drawer-right" className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center hover:bg-gray-600 hover:text-white" >
                <IoIosClose size={30} />
                <span className="sr-only">Close menu</span>
            </button>

            <div className="my-20">
                <ol className="text-white flex flex-col gap-10 text-end px-10">
                    <li><Link href={"/"} className="focus:text-blue-500">Home</Link></li>
                    <li ref={dropdownRef}>
                        <button onClick={toggleMoviesDropdown} className="focus:text-blue-500 flex gap-2 items-center w-full justify-end">
                            Movies <IoIosArrowDown />
                        </button>
                    </li>
                    <ol className={`moviemenu ${isMoviesOpen ? 'block translate-y-0' : 'hidden translate-y-20'}`}>
                        {movieGenre.map(m => <Link href={'/'} key={m.id}><li className="border-b pb-2 pt-3 text-gray-300">{m.name}</li></Link>)}
                    </ol>
                    <li ref={tvdropdownRef}>
                        <button onClick={toggleTVSeriesDropdown} className="focus:text-blue-500 flex gap-2 items-center w-full justify-end">
                            TV Series <IoIosArrowDown />
                        </button>
                    </li>
                    <ol className={`tvmenu ${isTVSeriesOpen ? 'block translate-y-0' : 'hidden translate-y-20'}`}>
                        {tvGenre.map(m => <Link href={'/'} key={m.id}><li className="border-b pb-2 pt-3 text-gray-300">{m.name}</li></Link>)}
                    </ol>
                </ol>
            </div>
        </div>
    )
}

export default Sidebar