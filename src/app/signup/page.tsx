"use client"

import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

export default function signUpPage(){
    const [user, setUser] = React.useState({
        email: "",
        passsword: "",
        username: "",
    })

    


    return (
    <div>
            <div>
                <h1>
                Please SignUp.. 
            </h1>
            </div>
        
        <div className="flex flex-col justify-center items-center mt-20 ">
            <hr />
            <label htmlFor="username">Username</label>
            <input className="pt-3" id="username" type="text" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username" />

            <label className="pt-10" htmlFor="email">Email</label>
            <input className="pt-3 rounded-full" id="email"
            type="email"
            value={user.email}
            onChange={(e) => setUser ({...user, email: e.target.value})}
            placeholder="Please Enter Your Email" />
        </div>

    </div>
    )
}