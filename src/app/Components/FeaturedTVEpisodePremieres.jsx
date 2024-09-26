"use client"

import { useEffect, useRef } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

import { CardImages } from "@/Index";
import Image from "next/image";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import Link from 'next/link';

gsap.registerPlugin(Draggable);

const FeaturedTVEpisodePremieres = () => {

    const sliderRef = useRef(null);
    const wrapperRef = useRef(null);
    const draggableRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        const wrapper = wrapperRef.current;
        
        // Calculate the bounds
        const totalWidth = slider.scrollWidth;
        const visibleWidth = wrapper.offsetWidth;
        const maxX = visibleWidth - totalWidth;
    
        // Initialize the Draggable
        draggableRef.current = Draggable.create(slider, {
          type: "x",
          edgeResistance: 0.65,
          bounds: {minX: maxX, maxX: 0},
          inertia: true,
          onDrag: updateProgress,
          onThrowUpdate: updateProgress,
          snap: {
            x: (endValue) => Math.round(endValue / 20) * 20
          },
          // Add these properties for free mode dragging
          dragClickables: true,
          allowContextMenu: true,
          allowNativeTouchScrolling: false,
          zIndexBoost: false
        })[0];
    
        function updateProgress() {
          gsap.set(slider, {x: this.x});
        }
    
        // Clean up
        return () => {
          draggableRef.current.kill();
        };
      }, []);


    const handleSlide = (direction) => {
        const slider = sliderRef.current;
        const wrapper = wrapperRef.current;
        const draggable = draggableRef.current;

        if (!slider || !wrapper || !draggable) return;

        const totalWidth = slider.scrollWidth;
        const visibleWidth = wrapper.offsetWidth;
        const maxX = visibleWidth - totalWidth;
        const slideAmount = visibleWidth * 0.8; // Slide 80% of visible width

        let newX = draggable.x + (direction === 'left' ? slideAmount : -slideAmount);
        newX = Math.max(maxX, Math.min(0, newX)); // Clamp the value

        gsap.to(slider, {
            x: newX,
            duration: 0.5,
            ease: "power2.out",
            onUpdate: () => draggable.update(),
        });
    };

  return (
    <div className="flex flex-col gap-10 my-20">
      <div className="flex flex-col justify-center text-white text-center items-center gap-5 lg:hidden">
        <h2 className="md:text-4xl text-2xl font-semibold">
          TV Episode Premieres
        </h2>
        <hr className="w-full border-gray-500" />

        <div className='flex justify-center items-center gap-2'>
          <button
            className='text-gray-400 hover:text-gray-300 duration-200'
            onClick={() => handleSlide('left')}
          >
            <TfiArrowCircleLeft size={40} />
          </button>
          <button
            className='text-gray-400 hover:text-gray-300 duration-200'
            onClick={() => handleSlide('right')}
          >
            <TfiArrowCircleRight size={40} />
          </button>
        </div>

        <div className='flex justify-center items-center'>
          <Link href="/" className="flex text-sm gap-2 px-5 py-2 text-gray-400 hover:text-gray-300 hover:scale-105 items-center duration-200">
            VIEW ALL <IoIosArrowForward />
          </Link>
        </div>
      </div>

      <div className='flex items-center gap-10'>
        <div ref={wrapperRef} className="overflow-hidden rounded-xl">
          <div ref={sliderRef} className="flex w-full gap-5" style={{willChange: 'transform'}}>
            {CardImages.map((ci) => (
              <div key={ci.id} className="flex-shrink-0 w-60 rounded-lg">
                <div className='w-full h-52'>
                  <Image src={ci.src} alt={ci.title} width={500} height={500} className="w-full h-full object-cover" />
                </div>
                <div className="flex gap-2 text-gray-400 text-sm px-5 mt-2">
                  <p>{ci.year}</p>,
                  <p>{ci.type}</p>
                </div>
                <div className="px-5 text-gray-300 mt-2 mb-5 font-semibold">
                  <p>{ci.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='lg:flex flex-col gap-5 hidden'>
          <hr className='w-20 border-gray-700'/>
          <h2 className="md:text-4xl text-2xl text-white font-sans w-60">Action & Drama Movies</h2>
          
          <div className='flex gap-2 items-center'>
            <button
              className='text-gray-400 hover:text-gray-300 duration-200'
              onClick={() => handleSlide('left')}
            >
              <TfiArrowCircleLeft size={40} />
            </button>
            <button
              className='text-gray-400 hover:text-gray-300 duration-200'
              onClick={() => handleSlide('right')}
            >
              <TfiArrowCircleRight size={40} />
            </button>
          </div>

          <div className='flex'>
            <Link href="/" className="flex text-sm gap-2 px-5 py-2 text-gray-400 hover:text-gray-300 hover:scale-105 duration-200 items-center">
              VIEW ALL <IoIosArrowForward />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedTVEpisodePremieres