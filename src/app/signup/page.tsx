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
            <h1>
                Please SignUp.. 
            </h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username" />

        </div>
    )
}