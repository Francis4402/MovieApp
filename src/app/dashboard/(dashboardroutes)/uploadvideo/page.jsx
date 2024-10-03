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
                        <input type="text" name="name" id="name" className="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Movie Name" required="" />
                    </div>

                    <div className="w-full">
                        <label htmlFor="year" className="block mb-2 text-sm font-medium text-white">Year</label>
                        <input type="text" name="year" id="year" className="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Year" required="" />
                    </div>

                    <div className="w-full">
                        <label htmlFor="rating" className="block mb-2 text-sm font-medium text-white">Rating</label>
                        <input type="text" name="rating" id="rating" className="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Rating" required="" />
                    </div>

                    <div>
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-white">Category</label>
                        <select id="category" className="border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500">
                            <option selected="">Select category</option>
                            <option value="TV">Movie</option>
                            <option value="PC">TV Series</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="movietype" className="block mb-2 text-sm font-medium text-white">Movie Type</label>
                        <select id="movietype" className="border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500">
                            <option selected="">Select category</option>
                            <option value="TV">Comedy</option>
                            <option value="PC">Action</option>
                            <option value="PC">Horror</option>
                            <option value="PC">Scifi</option>
                            <option value="PC">Animation</option>
                            <option value="PC">Adventure</option>
                            <option value="PC">Drama</option>
                            <option value="PC">Romance</option>
                            <option value="PC">Thriller</option>
                        </select>
                    </div>

                    
                  <div>
                    <label className="block mb-2 text-sm font-medium text-white" for="file_input">Upload Poster</label>
                    <input className="block w-full text-sm border rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400" id="file_input" type="file" />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-white" for="file_input">Upload Video</label>
                    <input className="block w-full text-sm border rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400" id="file_input" type="file" />
                  </div>


                    <div className="sm:col-span-2">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-white">Description</label>
                        <textarea id="description" rows="8" className="block p-2.5 w-full text-sm rounded-lg border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Your description here"></textarea>
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