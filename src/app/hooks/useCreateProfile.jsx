import { database, ID } from "../libs/AppWriteClient"

const UseCreateProfile = async (userId, name, image, email) => {
  try {
    await database.createDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_PROFILE,
        ID.unique(),
        {
            user_id: userId,
            name: name,
            image: image,
            email: email,
        }
    )
  } catch (error) {
    console.log(error)
  }
}

export default UseCreateProfile