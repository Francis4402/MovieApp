import { CardImages } from '@/Index'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

const TopMovieLists = () => {
  return (
    <div className='flex lg:flex-row flex-col justify-center gap-10 items-start'>
        <div className='flex flex-col bg-gray-600/30 lg:w-[40rem] w-full lg:p-5 px-10 py-5'>
            <div className='flex justify-between items-center text-white font-sans'>
                <h2 className='text-2xl font-semibold'>Top 9 this Week</h2>

                <div className='flex md:flex-row flex-col gap-5'>
                    <Link href="/" className='hover:text-blue-600 focus:text-blue-600'>Movies</Link>
                    <Link href="/" className='hover:text-blue-600 focus:text-blue-600'>TV Series</Link>
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-5 w-full'>
            <div className='flex justify-start items-center font-sans'>
                <div className='flex justify-between sm:items-center items-end w-full'>
                    
                    <h2 className='text-2xl font-semibold text-white'>Newest Movies</h2>
                    
                    <div className='flex md:flex-row flex-col gap-5 text-gray-400'>
                        <Link href="/" className='hover:text-blue-600 focus:text-blue-600'>Today</Link>
                        <Link href="/" className='hover:text-blue-600 focus:text-blue-600'>This Week</Link>
                        <Link href="/" className='hover:text-blue-600 focus:text-blue-600'>Last 30 days</Link>
                    </div>
                </div>
            </div>
            
            <hr className='mb-5 border-gray-700' />

            <div className='flex md:flex-row flex-col gap-10'>
                <Image src={'/cards/cardimg6.png'} alt="i" width={150} height={150}/>

                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-gray-400 text-sm'>2024</p>
                        <h3 className='text-white text-xl font-semibold'>Last Breath</h3>
                    </div>
                    <p className='text-gray-400'>Aliens Invated Our Planed People all the humans fighting for their pitiful lifes</p>
                    
                    <div className='flex sm:flex-row flex-col gap-5'>
                        <button className='bg-blue-400 duration-200 hover:bg-blue-600 text-white px-5 py-2 rounded-md'>Watch Now</button>
                        <button className='flex items-center justify-center hover:bg-white hover:text-black px-5 py-2 rounded-md duration-200 gap-1 text-xs text-white font-semibold'><FaPlus size={9} />PLAYLIST</button>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-2'>
                {
                    CardImages.slice(0, 8).map(items => <div key={items.src} className=' border-gray-700'>
                        <div className='flex gap-5'>
                            <Image src={items.src} alt="i" width={80} height={80} />
                            <div className='flex flex-col gap-2'>
                                <p className='text-gray-400 text-sm'>{items.year}</p>
                                <h3 className='text-white font-semibold'>{items.title}</h3>
                                <div className='flex gap-5'>
                                    <p className='text-gray-400 text-sm'>{items.type}</p>
                                    <p className='text-gray-400 text-sm'>{items.rating}</p>
                                </div>
                            </div>
                        </div>
                        <hr className='border-gray-700 my-5 w-[80%]'/>
                    </div>)
                }
            </div>
        </div>
        
    </div>
  )
}

export default TopMovieLists