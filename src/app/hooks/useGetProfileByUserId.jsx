import { database, Query } from '../libs/AppWriteClient'

const UseGetProfileByUserId = async (userId) => {
  try {
    const res = await database.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_PROFILE,
        [
            Query.equal('user_id', userId)
        ]
    )

    const documents = res.documents;

    return {
        id: documents[0].$id,
        user_id: documents[0].user_id,
        name: documents[0].name,
        image: documents[0].image,
        email: documents[0].email,
    }

  } catch (error) {
    console.log(error)
  }
}

export default UseGetProfileByUserId