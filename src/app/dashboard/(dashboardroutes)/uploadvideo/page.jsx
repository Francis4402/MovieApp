"use client"

import { useUser } from '@/app/context/user'
import { useRouter } from 'next/navigation';
import { useState } from 'react';


const UploadVideos = () => {

  const {user, isLoading} = useUser();
  const router = useRouter();

  const [poster, setPoster] = useState(null);
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [movietype, setMovieType] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);


  return (
    <div className="p-4 md:ml-64 h-auto pt-20">
      <section>
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 className="mb-4 text-xl font-bold text-white">Add Video</h2>
            <form>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="sm:col-span-2">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Movie Name</label>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} id="name" className="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Movie Name" required="" />
                    </div>

                    <div className="w-full">
                        <label htmlFor="year" className="block mb-2 text-sm font-medium text-white">Year</label>
                        <input type="text" name="year" value={year} onChange={(e) => setYear(e.target.value)} id="year" className="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Year" required="" />
                    </div>

                    <div className="w-full">
                        <label htmlFor="rating" className="block mb-2 text-sm font-medium text-white">Rating</label>
                        <input type="text" name="rating" value={rating} onChange={(e) => setRating(e.target.value)} id="rating" className="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Rating" required="" />
                    </div>

                    <div>
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-white">Category</label>
                        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500">
                            <option value="">Select category</option>
                            <option value="movies">Movies</option>
                            <option value="tvseries">TV Series</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="movietype" className="block mb-2 text-sm font-medium text-white">Movie Type</label>
                        <select id="movietype" value={movietype} onChange={(e) => setMovieType(e.target.value)} className="border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500">
                            <option value="">Select category</option>
                            <option value="comedy">Comedy</option>
                            <option value="action">Action</option>
                            <option value="horror">Horror</option>
                            <option value="scifi">Scifi</option>
                            <option value="animation">Animation</option>
                            <option value="adventure">Adventure</option>
                            <option value="drama">Drama</option>
                            <option value="romance">Romance</option>
                            <option value="thriller">Thriller</option>
                        </select>
                    </div>

                    
                  <div>
                    <label className="block mb-2 text-sm font-medium text-white" htmlFor="file_input">Upload Poster</label>
                    <input value={poster} onChange={(e) => setPoster(e.target.value)} className="block w-full text-sm border rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400" id="file_input" type="file" />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-white" htmlFor="file_input">Upload Video</label>
                    <input value={file} onChange={(e) => setFile(e.target.value)} className="block w-full text-sm border rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400" id="file_input" type="file" />
                  </div>


                    <div className="sm:col-span-2">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-white">Description</label>
                        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="8" className="block p-2.5 w-full text-sm rounded-lg border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Movie Description"></textarea>
                    </div>
                </div>
                <button type="submit" className="px-5 py-2 bg-blue-600 hover:bg-blue-400 hover:scale-105 duration-200 rounded-md text-white my-5">
                    + Add
                </button>
            </form>
        </div>
      </section>
    </div>
  )
}

export default UploadVideos