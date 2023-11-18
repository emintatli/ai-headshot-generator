import Link from 'next/link'
import React from 'react'

import Upload from '@/components/Upload/Upload'
import dbConnect from '@/db/mongoose'
import usersModel from '@/db/models/usersModel'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
type Props = {}

const Page = async (props: Props) => {
    await dbConnect()
    const session = await getServerSession(authOptions)
    const user = await usersModel.findById(session.user.id)

    if (user?.activePlan?.quantity === 0) {
        //console.log('asdasd')
        redirect('/dashboard/board')
    }
    return (
        <>
            <div className="mb-2 bg-yellow-100 p-2 rounded border border-amber-300 flex items-center gap-2">
                <img src="/images/warning.png" width={16} height={16} />
                <div>
                    <p>
                        Input quality will affect the quality of the generated
                        photos.
                        <Link className="underline" href="/dashboard/create">
                            Show photo requirements.
                        </Link>
                    </p>
                </div>
            </div>

            <Upload />
        </>
    )
}

export default Page
