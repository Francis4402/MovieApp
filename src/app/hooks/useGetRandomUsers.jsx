
import { database, Query } from '../libs/AppWriteClient';

const UseGetRandomUsers = async() => {
  try {
    const profileResult = await database.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_PROFILE,
        [
            Query.limit(5)
        ]
    )

    const documents = profileResult.documents;

    const objPromises = documents.map(profile => {
        return {
            id: profile?.user_id,
            name: profile?.name,
            image: profile?.image,
            email: profile?.email,
        }
    })

    const result = await Promise.all(objPromises);
    return result;

  } catch (error) {
    console.log(error);
  }
}

export default UseGetRandomUsers