"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { CardImages } from "@/Index";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { BiLoaderCircle } from "react-icons/bi";
import { useGeneralStore } from "@/app/stores/GeneralStore";
import { useUser } from "@/app/context/user";
import { useRouter } from "next/navigation";
import TextInput from "@/app/Components/TextInput";
import toast from "react-hot-toast";

const Register = () => {
    let { setIsLoginOpen } = useGeneralStore();
    const contextUser = useUser();
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);

    const showError = (type) => {
        if (error && Object.entries(error).length > 0 && error?.type == type) {
            return error.message
        }
        return ''
    }

    const validate = () => {
        setError(null)
        let isError = false

        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (!name) {
            setError({ type: 'name', message: 'A Name is required'})
            isError = true
        } else if (!email) {
            setError({ type: 'email', message: 'An Email is required'})
            isError = true
        } else if (!reg.test(email)) {
            setError({ type: 'email', message: 'The Email is not valid'})
            isError = true
        } else if (!password) {
            setError({ type: 'password', message: 'A Password is required'})
            isError = true
        } else if (password.length < 8) {
            setError({ type: 'password', message: 'The Password needs to be longer'})
            isError = true
        } else if (password != confirmPassword) {
            setError({ type: 'password', message: 'The Passwords do not match'})
            isError = true
        }
        return isError
    }

    const register = async () => {

        let isError = validate()
        if (isError) return
        if (!contextUser) return

        try {
            setLoading(true)
            await contextUser.register(name, email, password)
            setLoading(false)
            setIsLoginOpen(false)
            toast.success('Registration success. Please login.')
            router.push('/')
        } catch (error) {
            console.error(error)
            setError({ type: 'general', message: 'Registration failed. Please try again.' })
            setLoading(false)
            toast.error('Registration failed. Please try again.')
        }
    }

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % CardImages.length);
        }, 4000);
    
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-between w-full">
            <div className="w-full h-screen md:flex hidden">
                <div className="relative w-full h-full">
                    <Image
                        src={CardImages[currentImageIndex].src}
                        alt={CardImages[currentImageIndex].title}
                        width={720}
                        height={1080}
                        className="size-full object-cover object-center"
                    />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white ">
                        Register and Enjoy the Movie App
                    </h1>
                </div>
            </div>

            <div className="flex flex-col gap-5 justify-center items-center w-full h-screen md:bg-none relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-blue-950 animate-gradient-x"></div>
                
                <Link href={"/"} className="absolute top-10 right-10 text-white flex items-center gap-2 hover:text-purple-500 duration-200"><FaHome size={20} />Home</Link>

                <div className="relative z-10 flex flex-col gap-5 items-center w-full">
                    <h1 className="text-2xl font-bold text-white">Register</h1>

                    <div className="flex flex-col gap-3 text-white w-80">
                        <TextInput string={name} inputType="text" placeholder="Name" error={showError('name')} onUpdate={setName} />

                        <TextInput string={email} inputType="email" placeholder="Email" error={showError('email')} onUpdate={setEmail} />

                        <TextInput string={password} inputType="password" placeholder="Password" error={showError('password')} onUpdate={setPassword} />

                        <TextInput string={confirmPassword} inputType="password" placeholder="Confirm Password" error={showError('confirmPassword')} onUpdate={setConfirmPassword} />

                        <button 
                            disabled={loading} 
                            onClick={() => register()} 
                            className={`hover:scale-105 duration-200 px-4 py-2 rounded-md w-full ${(!name || !email || !password ) ? 'bg-red-600/30 hover:bg-blue-600/60' : 'bg-blue-600/30 hover:bg-blue-600/60'}`}
                        >
                            {loading ? <BiLoaderCircle className="animate-spin" color="#ffffff" size={25} /> : 'Register'}
                        </button>

                        {error && <p className="text-red-500 text-sm mt-2">{error.message}</p>}

                        <div className="flex justify-center items-center gap-2">
                            <p className="text-sm text-gray-400">Already have an account?</p>
                            <Link href="/auth/login" className="text-blue-500 hover:text-blue-600 duration-200">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register