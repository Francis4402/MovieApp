import { database, ID } from "../libs/AppWriteClient"



const useCreateProfile = async (userId, name, image) => {
  try {
    await database.createDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_PROFILE,
        ID.unique(),
        {
            user_id: userId,
            name: name,
            image: image,
        }
    )
  } catch (error) {
    console.log(error)
  }
}

export default useCreateProfile