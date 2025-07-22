"use client";

//import axios from "axios";
import Link from "next/link";
import React from "react";

//import { useRouter } from "next/navigation";


export default function Login(){
    const [user,setUser]= React.useState({
        
        email: "",
        password:""
    });

    const onLogin=async()=>{

    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="m-6 text-6xl  lg:text-5xl ">Login</h1>
            <hr />
            
            <label htmlFor="email">email</label>
            <input
                id='email'
                type="email"
                value={user.email}
                onChange={(e)=>setUser({...user,email:e.target.value})}
                placeholder="Enter your email"
                className="border p-2 rounded mb-4"
            />

            <label htmlFor="password">password</label>
            <input
                id='password'
                type="password"
                value={user.email}
                onChange={(e)=>setUser({...user,password:e.target.value})}
                placeholder="Enter Pasword"
                className="border p-2 rounded mb-4"
            />


            <button onClick={onLogin} className="p-4  outline bg-blue-600 rounded-4xl w-auto cursor-pointer">signUp</button>
            <Link href="/signup" className=" mt-4">
                Don&#39;t have an account?  <span className="text-blue-500">signUp</span>
            </Link>

            {/* Sign Up Form */}
            
        </div>
    )
}
