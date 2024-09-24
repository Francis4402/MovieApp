import Image from 'next/image'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Banner = () => {
  return (
    <section className="bg-center bg-no-repeat bg-[url('/PosterBanner.jpeg')] bg-gray-700 bg-blend-overlay mb-20">
      <div className="px-4 mx-auto max-w-4xl py-40">
          <div className="container">
              <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-5'>
                    <h2 className='text-4xl font-semibold text-white'>Delta Bravo</h2>
                    <p className='text-gray-400 w-[35rem]'>Strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.</p>
                    
                    <div className='flex gap-5'>
                      <button className='bg-blue-400 text-white px-5 py-3 rounded-md'>Watch Now</button>
                      <button className='bg-transparent border border-white flex items-center gap-2 text-white px-5 py-3 rounded-md'><FaPlus/> Playlist</button>
                    </div>
                </div>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Banner