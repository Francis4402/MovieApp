"use client"

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CardImages } from "@/Index";


const Login = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const carouselRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % CardImages.length);
        }, 4000);
    
        return () => clearInterval(interval);
      }, []);



  return (
    <div className="flex justify-between ">
        <div className="w-full lg:h-[51.62rem] md:h-[52rem]">
            {/* <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-20">
                <h1>Welcome to Movie App</h1>
            </div> */}

            <Image
                src={CardImages[currentImageIndex].src}
                alt={CardImages[currentImageIndex].title}
                width={720}
                height={1080}
                className="size-full object-cover object-center"
            />
        </div>

        <div className="flex flex-col gap-5 justify-center items-center w-full">
                <h1 className="text-2xl font-bold text-white">Login</h1>

                <div className="space-y-8 text-white w-80">
                    <input type="email" className="py-3 px-4 block w-full bg-transparent border-b border-t border-gray-600 focus:outline-none rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none" placeholder="Email" />

                    <input type="password" className="py-3 px-4 block w-full bg-transparent border-b border-t border-gray-600 focus:outline-none rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none" placeholder="Password" />

                    <button className="bg-blue-600/30 hover:bg-blue-600/60 hover:scale-105 duration-200 px-4 py-2 rounded-md w-full">
                        Login
                    </button>
                </div>
            </div>
    </div>
  )
}

export default Login