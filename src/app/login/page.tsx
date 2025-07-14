"use client"

import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

export default function loginPage(){
    const [user, setUser] = React.useState({
        email: "",
        passsword: "",
    })


    const onLogin = async () => {

    }

    


    return (
    <div>
            <div className="flex justify-center mt-20">
                <h1 className="text-4xl bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-2">
                Please Login.. 
            </h1>
            </div>
        
        <div className="flex flex-col justify-center items-center mt-20 ">
            <hr />

            <label className="mb-2" htmlFor="email">Email</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:otline-none focus:border-gray-600" id="email"
            type="email"
            value={user.email}
            onChange={(e) => setUser ({...user, email: e.target.value})}
            placeholder="Please Enter Your Email" />

            <label className="mb-2" htmlFor="password">Password</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:otline-none focus:border-gray-600" id="password"
            type="password"
            value={user.passsword}
            onChange={(e) => setUser ({...user, passsword: e.target.value})}
            placeholder="Enter your password"
            />

            <button onClick={onLogin}
            className=" cursor-pointer p-2 border border-gray-300 mb-4 focus:otline-none 
            focus:border-gray-600 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg "> Sign Up </button>
            <Link href="/signup">New User?</Link>
        </div>

    </div>
    )
}

