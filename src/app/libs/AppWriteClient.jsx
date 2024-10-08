import { Account, Client, Databases, Storage, Query, ID } from 'appwrite';


const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_URL)
    .setProject(process.env.NEXT_PUBLIC_ENDPOINT);

    const account = new Account(client);
    const database = new Databases(client);
    const storage = new Storage(client);

export { client, account, database, storage, Query, ID }