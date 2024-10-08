import { CardImages } from "@/Index"
import Image from "next/image"
import { IoIosArrowForward } from "react-icons/io"

const PopularTvSeries = () => {
  return (
    <div className="my-20">
        <div className="flex lg:flex-row lg:flex-wrap flex-col lg:justify-start lg:items-start justify-center items-center gap-10">
            <div className="flex flex-col lg:w-fit w-full gap-5 justify-center items-center my-10">
                <h2 className="md:text-4xl text-2xl font-semibold text-white lg:text-start text-center">Popular TV Series <br/> to Watch Now</h2>
                <p className="text-gray-400">Most watched movies by days</p>
                <hr className="w-full border-gray-500"/>
                <div className="flex justify-center items-center">
                    <button className="flex items-center gap-2 px-5 py-2 text-gray-400">VIEW ALL <IoIosArrowForward /></button>
                </div>
            </div>

            {CardImages.map(ci => <div key={ci.id} className="lg:flex flex-col hidden">
                <Image src={ci.src} alt="i" width={200} height={300} />
                <div className="flex gap-2 text-gray-400 text-sm">
                    <p>{ci.year}</p>
                    <p>{ci.type}</p>
                </div>
                <div className="flex justify-between gap-5 items-center text-gray-300">
                    <p>{ci.title}</p>
                    <p>{ci.rating}</p>
                </div>
            </div>)}

            <div className="lg:hidden flex flex-row flex-wrap justify-center items-center gap-10">
                {CardImages.map(ci => <div key={ci.id} className="flex flex-col gap-2 lg:hidden">
                    <Image src={ci.src} alt="i" width={100} height={200} />
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

        <div className="my-20 flex justify-center items-center">
            <hr className="w-full border-gray-500"/>
            <button className="w-full py-2 text-gray-400 border border-gray-500 rounded-md hover:border-gray-400 hover:text-white duration-200">
                View More
            </button>
            <hr className="w-full border-gray-500"/>
        </div>
    </div>
  )
}

export default PopularTvSeries