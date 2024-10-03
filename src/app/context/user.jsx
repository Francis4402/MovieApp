"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { account, ID } from "../libs/AppWriteClient";

import { useRouter } from "next/navigation";
import UseGetProfileByUserId from "../hooks/useGetProfileByUserId";
import UseCreateProfile from "../hooks/useCreateProfile";


const UserContext = createContext(null);

const UserProvider = ({ children }) => {

    const router = useRouter();
    const [user, setUser] = useState(null);

    const checkUser = async () => {
        try {
            const currentSession = await account.get();

            if (!currentSession) return

            const promise = await account.get()
            const profile = await UseGetProfileByUserId(promise?.$id)
            setUser({id: promise?.$id, name: profile?.name, image: profile?.image, email: profile?.email})
        } catch (error) {
            setUser(null);
        }
    }

    useEffect(() => {checkUser()}, [])

    const register = async (name, email, password) => {
        try {
            const promise = await account.create(ID.unique(), email, password, name);
            
            await account.createEmailPasswordSession(email, password);

            await UseCreateProfile(promise?.$id, name, process.env.NEXT_PUBLIC_PLACEHOLDER_DEFAULT_IMAGE_ID, email);

            await checkUser();

        } catch (error) {
            console.log(error)
        }
    }

    const login = async (email, password) => {
        try {
            await account.createEmailPasswordSession(email, password);
            await checkUser();
            setUser(null)
        } catch (error) {
            console.log(error);
        }
    }

    const logout = async () => {
        try {
            await account.deleteSession("current");
            setUser(null);
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <UserContext.Provider value={{user, register, login, logout, checkUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;

export const useUser = () => useContext(UserContext);