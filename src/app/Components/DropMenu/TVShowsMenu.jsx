import { tvGenre } from "@/Index"
import Image from 'next/image'
import Link from 'next/link'

const TVShowsMenu = ({ isOpen }) => {
  return (
    <div className={`absolute lg:left-1/2 left-1/4 w-fit bg-gray-800 transition-all duration-200 z-20 p-8 rounded-b-md ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
      }`}>
        <div className='container lg:max-w-screen-xl mx-auto lg:px-0 px-10'>
            <div className='flex flex-col gap-3'>
                
                <div className='relative flex justify-center gap-40 items-start'>
                    

                    <div className='flex flex-col gap-2'>
                        <h4 className='text-white font-bold'>Movies Genre</h4>

                        <ul className='text-gray-400 grid grid-cols-2 gap-x-16 gap-y-4'>
                            {tvGenre.map(c => <Link href={'/'} key={c.id} className='text-sm hover:underline'>{c.name}</Link>)}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default TVShowsMenu