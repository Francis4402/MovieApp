import { IoPlayCircleOutline } from "react-icons/io5";

import { FaPlus } from 'react-icons/fa'
import Link from "next/link";

const MovieSeason = () => {
  return (
    <section className="bg-center bg-no-repeat bg-[url('/Gerdian.png')] bg-gray-700 bg-blend-overlay mb-20">
      <div className="px-4 mx-auto max-w-4xl py-40">
          <div>
              <div className='flex md:justify-between md:flex-row flex-col-reverse items-center'>
                <div className='flex flex-col gap-5'>
                    <h2 className='text-4xl font-semibold text-white'>Guardians of the galaxy</h2>
                    <p className='text-gray-400 md:w-[35rem] w-full'>Strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.</p>
                    
                    <div className='flex md:flex-row flex-col gap-5 md:justify-start justify-center sm:items-center'>
                      <button className='bg-blue-700 hover:bg-blue-800 duration-200 text-white px-5 py-3 rounded-md justify-center'>Watch Now</button>
                      <button className='bg-transparent hover:bg-gray-500 duration-200 justify-center border border-white flex items-center gap-2 text-white px-5 py-3 rounded-md'><FaPlus/> Playlist</button>
                    </div>
                </div>

                <div>
                  <Link href={'/'} className="hover:text-gray-600 duration-200 text-gray-300">
                    <IoPlayCircleOutline size={150} />
                  </Link>
                </div>
              </div>
          </div>
      </div>
    </section>
  )
}

export default MovieSeason