import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'
import React from 'react'
import userModel from '../../../db/models/usersModel'
import { redirect } from 'next/navigation'
import dbConnect from '@/db/mongoose'

const page = async ({ children }: any) => {
    const session = await getServerSession(authOptions)
    const checkIsUserPaid = async () => {
        await dbConnect()
        const user = await userModel.findById(session.user.id).exec()
        return user?.activePlan?.active || false
    }
    if (!(await checkIsUserPaid())) {
        redirect('/dashboard')
    } else {
        return children
    }
}

export default page
