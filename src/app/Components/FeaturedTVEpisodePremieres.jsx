import { CardImages } from '@/Index'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io"

const FeaturedTVEpisodePremieres = () => {
  return (
    <div className='flex flex-col gap-10 my-20'>
        <div className='flex flex-col justify-center text-white text-center gap-5'>
            <h2 className='md:text-4xl text-2xl font-semibold'>Featured TV Episode Premieres</h2>
            <hr className="w-full border-gray-500"/>
            <div className="flex justify-center items-center">
                <button className="flex items-center gap-2 px-5 py-2 text-gray-400">VIEW ALL <IoIosArrowForward /></button>
            </div>
        </div>


        <div className='flex gap-4 overflow-auto'>
            {
                CardImages.map(ci => <div key={ci.title} className="lg:flex flex-col gap-2">
                    <Image src={ci.src} alt={ci.title} width={200} height={200}/>
                    <div className="flex gap-2 text-gray-400 text-sm">
                        <p>{ci.year}</p>
                        <p>{ci.type}</p>
                    </div>
                    <div className="flex justify-between gap-5 items-center text-gray-300">
                        <p>{ci.title}</p>
                        <p>{ci.rating}</p>
                    </div>
                </div>)
            }
        </div>
    </div>
  )
}

export default FeaturedTVEpisodePremieres