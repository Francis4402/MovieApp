"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { CardImages } from "@/Index";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const Register = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % CardImages.length);
        }, 4000);
    
        return () => clearInterval(interval);
      }, []);

  return (
    <div className="flex justify-between w-full">
        <div className="w-full h-screen md:flex hidden">
            <div className="relative w-full h-full">
                <Image
                    src={CardImages[currentImageIndex].src}
                    alt={CardImages[currentImageIndex].title}
                    width={720}
                    height={1080}
                    className="size-full object-cover object-center"
                />
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white ">
                    Register and Enjoy the Movie App
                </h1>
            </div>
        </div>

        <div className="flex flex-col gap-5 justify-center items-center w-full h-screen md:bg-none relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-blue-950 animate-gradient-x"></div>
            
            <Link href={"/"} className="absolute top-10 right-10 text-white flex items-center gap-2 hover:text-purple-500 duration-200"><FaHome size={20} />Home</Link>

            <div className="relative z-10 flex flex-col gap-5 items-center w-full">
                <h1 className="text-2xl font-bold text-white">Register</h1>

                <div className="space-y-8 text-white w-80">
                    <input 
                        type="text" 
                        className="py-3 px-4 block w-full bg-transparent border-b border-t border-gray-600 focus:outline-none rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none" 
                        placeholder="Name" 
                    />

                    <input 
                        type="email" 
                        className="py-3 px-4 block w-full bg-transparent border-b border-t border-gray-600 focus:outline-none rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none" 
                        placeholder="Email" 
                    />

                    <input 
                        type="password"
                        className="py-3 px-4 block w-full bg-transparent border-b border-t border-gray-600 focus:outline-none rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none" 
                        placeholder="Password" 
                    />

                    <button className="bg-blue-600/30 hover:bg-blue-600/60 hover:scale-105 duration-200 px-4 py-2 rounded-md w-full">
                        Register
                    </button>

                    <div className="flex justify-center items-center gap-2">
                        <p className="text-sm text-gray-400">Already have an account?</p>
                        <Link href="/auth/login" className="text-blue-500 hover:text-blue-600 duration-200">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register