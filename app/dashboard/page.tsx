import { getServerSession } from 'next-auth/next'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import DefaultButton from '@/components/buttons/DefaultButton'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import dbConnect from '@/db/mongoose'
import userFileModel from '@/db/models/userFileModel'

type Props = {}

const page = async (props: Props) => {
    const session = await getServerSession(authOptions)
    await dbConnect()
    const userFiles = await userFileModel.find({ userId: session.user.id })
    if (userFiles.length > 0) {
        redirect('/dashboard/board')
    }

    return (
        <div className="">
            Introducing{' '}
            <span className="text-cyan-600 font-semibold">HeadshotRapid</span>,
            where you can craft your own polished headshots effortlessly,
            eliminating the need for a photographer.
            <Link href="/dashboard/new/user">
                <DefaultButton
                    text={'Create your own headshot'}
                    style="primary"
                    className="mt-8 mb-2"
                />
            </Link>
            <span className="w-100 flex justify-center text-slate-400">OR</span>
            <div className="cursor-not-allowed">
                <DefaultButton
                    text={'Create for a team (Coming soon)'}
                    style="disabled"
                    className="mt-2 mb-8"
                />
            </div>
        </div>
    )
}

export default page
