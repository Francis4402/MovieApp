"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { cardImages1 } from "@/Index";
import { FaPlayCircle } from "react-icons/fa";

gsap.registerPlugin(Draggable);

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % cardImages1.length);
    }, 4000);

    Draggable.create(carouselRef.current, {
      type: "x",
      edgeResistance: 0.65,
      bounds: carouselRef.current.parentElement,
      inertia: true,
    });

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="h-[44rem] overflow-hidden relative">
      {/* Main hero image */}
      <div className="absolute inset-0 z-5">
        <Image
          src={cardImages1[currentImageIndex].src}
          alt={cardImages1[currentImageIndex].title}
          width={1000}
          height={1000}
          className="size-full object-cover object-center"
        />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10">
        <div className="container lg:max-w-7xl mx-auto h-full flex items-center md:px-0 px-5">
          <div className="text-white max-w-2xl">
            <h1 className="md:text-5xl text-3xl font-bold mb-4">{cardImages1[currentImageIndex].title}</h1>
            <div className="flex gap-5">
              <p className="text-xl mb-8">{cardImages1[currentImageIndex].type}</p>
              <p className="text-xl mb-8">Rating: {cardImages1[currentImageIndex].rating}</p>
            </div>
            <div>
              <button className="bg-red-600 flex gap-2 hover:bg-red-500 px-5 py-3 hover:scale-105 font-semibold rounded-md duration-200">
                <FaPlayCircle className="text-2xl"/>
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Small images carousel */}
      <div className="absolute bottom-5 left-0 right-0 z-30">
        <h2 className="text-2xl text-white mb-3 text-center">Today&apos;s Recommendation</h2>
        <div className="w-full overflow-x-auto">
          <div 
            ref={carouselRef} 
            className="flex cursor-grab active:cursor-grabbing px-4 pb-4 space-x-4 min-w-max"
          >
            {cardImages1.map((hi, index) => (
              <div
                key={hi.src}
                className="flex-shrink-0 cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={hi.src}
                  alt={`Recommendation ${index + 1}`}
                  width={200}
                  height={200}
                  className={`transition-opacity duration-300 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-50"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;