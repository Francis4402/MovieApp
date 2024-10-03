import { database, ID, storage } from "../libs/AppWriteClient"


const useCreatePost = async (file, poster, name, year, movietype, rating, category, description) => {

  let videoId = Math.random().toString(36).slice(2, 22)

  try{
    await database.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_COLLECTION_ID_MOVIES,
      ID.unique(),
      {
        poster: poster,
        name: name,
        year: year,
        rating: rating,
        category: category,
        description: description,
        video_url: videoId,
        movietype: movietype,
        created_at: new Date().toISOString(),
      }
    )

    await storage.createFile(
      process.env.NEXT_PUBLIC_BUCKET_ID,
      videoId,
      file,
    )
  } catch (error) {
    console.log(error)
  }

}

export default useCreatePost