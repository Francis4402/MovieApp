import { cardImages } from "@/Index"
import Image from "next/image"
import { IoIosArrowForward } from "react-icons/io"

const PopularMovieSection = () => {
  return (
    <div className="my-20">
        <div className="flex lg:flex-row lg:flex-wrap flex-col lg:justify-start lg:items-start justify-center items-center gap-10">
            <div className="flex flex-col lg:w-fit w-full gap-5 justify-center items-center my-10">
                <h2 className="md:text-4xl text-2xl font-semibold text-white lg:text-start text-center">Popular Movies <br/> to Watch Now</h2>
                <p className="text-gray-400">Most watched movies by days</p>
                <hr className="w-full border-gray-500"/>
                <div className="flex justify-center items-center">
                    <button className="flex items-center gap-2 px-5 py-2 text-gray-400">VIEW ALL <IoIosArrowForward /></button>
                </div>
            </div>

            {cardImages.map(ci => <div key={ci.title} className="lg:flex hidden flex-col group shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition">
                <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                    <Image className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" width={500} height={500} src={ci.src} alt="i" />
                </div>
                <div className="p-4 md:p-5">
                    <div className="flex gap-2 items-center text-gray-400 text-sm">
                        <p>{ci.year}</p>
                        <p>{ci.type}</p>
                    </div>
                    <div className="flex justify-between gap-5 items-center text-gray-300">
                        <p>{ci.title}</p>
                        <p>{ci.rating}</p>
                    </div>
                </div>
            </div>)}

            <div className="lg:hidden flex flex-row flex-wrap justify-center items-center gap-10">
                {cardImages.map(ci => <div key={ci.src} className="flex flex-col gap-2 lg:hidden">
                    <Image src={ci.src} alt="i" width={200} height={200} />
                    <div className="flex gap-2 text-gray-400 text-sm">
                        <p>{ci.year}</p>
                        <p>{ci.type}</p>
                    </div>
                    <div className="flex justify-between text-gray-300">
                        <p>{ci.title}</p>
                        <p>{ci.rating}</p>
                    </div>
                </div>)}
            </div>
        </div>
    </div>
  )
}

export default PopularMovieSection