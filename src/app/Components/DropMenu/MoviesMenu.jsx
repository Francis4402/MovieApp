import { movieGenre } from '@/Index'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MoviesMenu = () => {
  return (
    <div className='absolute top-20 left-0 w-full h-fit p-8 rounded-md bg-gray-800 z-20'>
        <div className='container lg:max-w-screen-xl mx-auto'>
            <div className='flex flex-col gap-3'>
                
                <div className='relative flex justify-between gap-10 items-start'>
                    <div className='flex flex-col gap-2'>
                        <h4 className='text-white font-bold'>Movie of the day</h4>

                        <div className='flex gap-5'>
                            <Image src={'/cards/cardimg8.png'} alt='i' width={100} height={200} />
                            <div className='flex flex-col gap-2'>
                                <p className='text-gray-400 text-sm'>2024,Action, Crime</p>
                                <h4 className='text-white font-bold'>The Last Breath</h4>
                                <p className='text-gray-400 text-sm'>Alien Invation Movie</p>

                                <div className='flex gap-5'>
                                    <button className='text-blue-600 font-semibold hover:text-blue-500 duration-200'>Watch Now</button>
                                    <button className='text-gray-400 font-semibold hover:text-gray-300 duration-200'>+ Playlist</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h4 className='text-white font-bold'>Movies Genre</h4>

                        <ul className='text-gray-400 grid grid-cols-2 gap-x-16 gap-y-4'>
                            {movieGenre.map(c => <li key={c.id} className='text-sm'>{c.name}</li>)}
                        </ul>
                    </div>

                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MoviesMenu