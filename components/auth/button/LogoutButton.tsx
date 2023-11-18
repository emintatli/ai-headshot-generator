"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

type Props = {}

const LogoutButton = (props: Props) => {
  return (
    <div> <button onClick={()=>{signOut()}}>signOut</button></div>
  )
}

export default LogoutButton