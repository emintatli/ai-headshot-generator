'use client'
import React from 'react'
import { signIn, signOut } from 'next-auth/react'
type Props = {}

const LoginButton = (props: Props) => {
    return (
        <>
            <button
                className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 w-full"
                onClick={() => {
                    signIn('google')
                }}
            >
                <div className="relative flex items-center space-x-4 justify-center">
                    <img
                        src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                        className="absolute left-0 w-5"
                        alt="google logo"
                    />
                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                        Continue with Google
                    </span>
                </div>
            </button>

            {/* <button onClick={()=>{signIn("google")}}>google</button>
   <button onClick={()=>{signOut()}}>signOut</button> */}
        </>
    )
}

export default LoginButton
