import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TopMovieLists = () => {
  return (
    <div className='flex justify-center gap-10 items-start'>
        <div className='flex flex-col bg-gray-600/30 w-[40rem] p-5'>
            <div className='flex justify-between items-center text-white font-sans'>
                <h2 className='text-2xl font-semibold'>Top 9 this Week</h2>

                <div className='flex gap-5'>
                    <Link href="/" className='hover:text-blue-600 focus:text-blue-600'>Movies</Link>
                    <Link href="/" className='hover:text-blue-600 focus:text-blue-600'>TV Series</Link>
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-5 w-full'>
            <div className='flex justify-start items-center font-sans'>
                <div className='flex justify-between items-center w-full'>
                    
                    <h2 className='text-2xl font-semibold text-white'>Newest Movies</h2>
                    
                    <div className='flex gap-5 text-gray-400'>
                        <Link href="/" className='hover:text-blue-600 focus:text-blue-600'>Today</Link>
                        <Link href="/" className='hover:text-blue-600 focus:text-blue-600'>This Week</Link>
                        <Link href="/" className='hover:text-blue-600 focus:text-blue-600'>Last 30 days</Link>
                    </div>
                </div>
            </div>
            
            <hr className='mb-5 border-gray-700' />

            <div className='flex gap-5'>
                <Image src={'/cards/cardimg6.png'} alt="i" width={200} height={200}/>
            </div>
        </div>
        
    </div>
  )
}

export default TopMovieLists