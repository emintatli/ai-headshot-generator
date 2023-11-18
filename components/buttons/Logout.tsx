'use client'
import React from 'react'
import { signIn, signOut } from 'next-auth/react'
type Props = {}

const Logout = (props: Props) => {
    return (
        <div className="cursor-pointer" onClick={() => signOut()}>
            <u className="text-rose-400 ml-2">Logout</u>
        </div>
    )
}

export default Logout
