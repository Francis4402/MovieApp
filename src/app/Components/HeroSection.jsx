import { heroImages } from "@/Index"
import Image from "next/image"
import { FaPlus } from "react-icons/fa"


const HeroSection = () => {
  return (
    <div className="bg-[url('/PosterBanner.jpeg')] bg-cover bg-center bg-no-repeat h-[800px] overflow-hidden relative">
      <div className="bg-black opacity-30 absolute w-full h-full z-10"></div>
      <div className="flex justify-center items-center h-full">
        <div className="container md:px-0 px-5">

          <div className="flex lg:flex-row flex-col gap-20 justify-between items-center">
            <div className="flex flex-col gap-5 z-20">
              <h1 className="text-white md:text-6xl text-3xl font-bold">American Made</h1>
              <p className="text-white md:text-2xl text-lg">2017 | Comedy | 1hr 55 mins</p>
              
              <div className="flex md:flex-row flex-col mx-auto gap-5 md:w-full w-40">
                <button className="bg-blue-400 text-white px-6 py-2 rounded-md">Watch Now</button>
                <button className="border-2 items-center text-white px-6 py-2 rounded-md flex gap-2">
                  <FaPlus size={12} />
                  Playlist
                </button>
              </div>
            </div>

            <div className="md:flex flex-col gap-3 hidden z-20">
              <h2 className="text-2xl text-white">Todays Reccomendation</h2>

              <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-3">
                {heroImages.map(hi => <div key={hi.src}>
                  <Image src={hi.src} alt="i" width={200} height={200} />
                  
                </div>)}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection