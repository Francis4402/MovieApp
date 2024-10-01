import { movieGenre } from '@/Index'
import Image from 'next/image'
import Link from 'next/link'


const MoviesMenu = ({ isOpen }) => {
    
  return (
    <div className={`absolute left-0 w-full bg-gray-800 transition-all duration-200 z-20 py-8 rounded-b-md ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
      }`}>
        <div className='container lg:max-w-screen-xl mx-auto lg:px-0 px-10'>
            <div className='flex flex-col gap-3'>
                
                <div className='relative flex justify-center gap-40 items-start'>
                    <div className='flex flex-col gap-2'>
                        <h4 className='text-white font-bold'>Movie of the day</h4>

                        <div className='flex md:flex-row flex-col gap-5'>
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
                            {movieGenre.map(c => <Link href={'/'} key={c.id} className='text-sm hover:underline'>{c.name}</Link>)}
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