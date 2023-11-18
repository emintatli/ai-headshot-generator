import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import DefaultButton from '@/components/buttons/DefaultButton'
import userFileModel from '@/db/models/userFileModel'
import dbConnect from '@/db/mongoose'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import usersModel from '@/db/models/usersModel'
import { Tooltip } from 'react-tooltip'
import Logout from '@/components/buttons/Logout'
type Props = {}

const page = async (props: Props) => {
    const session = await getServerSession(authOptions)
    await dbConnect()
    const files = await userFileModel.find({ userId: session.user.id })
    const user = await usersModel.findById(session.user.id).exec()
    if (files.length === 0) {
        redirect('/dashboard')
    }
    //console.log(files)

    const status = (status: string) => {
        switch (status) {
            case 'IN_QUEUE':
                return 'In Queue'
            case 'IN_PROGRESS':
                return 'In Progress'
            case 'COMPLETED':
                return 'Completed'
            case 'FAILED':
                return 'Failed'
            default:
                return 'Unknown'
        }
    }
    const buttonStatus = (status: string) => {
        switch (status) {
            case 'IN_QUEUE':
                return 'disabled'
            case 'IN_PROGRESS':
                return 'inprogress'
            case 'COMPLETED':
                return 'green'
            case 'FAILED':
                return 'error'
            default:
                return 'error'
        }
    }

    const bgStatus = (status: string) => {
        switch (status) {
            case 'IN_QUEUE':
                return ''
            case 'IN_PROGRESS':
                return 'bg-yellow-100'
            case 'COMPLETED':
                return 'bg-green-100'
            case 'FAILED':
                return 'bg-red-100'
            default:
                return 'bg-red-100'
        }
    }

    return (
        <div>
            <div className="flex w-full">
                <div className="text-xs text-left mb-1 w-40 flex items-center justify-center text-blue-400 border border-blue-400 rounded-md p-1">
                    <Link href="/dashboard/transactions">
                        Transaction History
                    </Link>
                </div>
                <div className="text-xs w-full text-right mb-1">
                    Logged in as <i className="text-gray-500">{user.email}</i>.
                    <Logout />
                </div>
            </div>
            <div className="text-sm text-right font-semibold bg-slate-500 text-white p-2 rounded-md">
                {` You have ${user.activePlan.quantity} more remaining headshots`}{' '}
                {user.activePlan.quantity === 0 ? (
                    <Link href={'/dashboard/new/user/packages'}>
                        <div className="underline text-emerald-300">
                            Buy more
                        </div>
                    </Link>
                ) : null}
            </div>
            <div className="flex w-full flex-col">
                <div>
                    {files.map((file) => (
                        <>
                            <Link
                                href={`${
                                    file.generate.status === 'COMPLETED'
                                        ? `/result/${file.id}`
                                        : '/dashboard/board'
                                }`}
                            >
                                <div
                                    className={`border border-slate-100 rounded-md w-full h-16 flex justify-between items-center p-2 my-2 gap-3 ${bgStatus(
                                        file.generate.status
                                    )}`}
                                >
                                    <div className="text-black w-3/5 ">
                                        <div className="text-xs font-semibold">
                                            {file?.generate?.name}
                                        </div>
                                        <div className="text-xs text-slate-400">
                                            {file.generate.status ===
                                            'COMPLETED'
                                                ? `Took ${(
                                                      file.generate
                                                          .executionTime /
                                                          60000 +
                                                      file.imageGenerate
                                                          .executionTime /
                                                          60000 +
                                                      file.generate.delayTime /
                                                          60000 +
                                                      file.imageGenerate
                                                          .delayTime /
                                                          60000
                                                  ).toFixed(
                                                      0
                                                  )} minutes to complete`
                                                : `${moment().diff(
                                                      moment(
                                                          file?.file?.createdAt
                                                      ),
                                                      'minutes'
                                                  )} minutes ago`}
                                        </div>
                                    </div>
                                    <div className="w-2/5">
                                        <DefaultButton
                                            style={buttonStatus(
                                                file.generate.status
                                            )}
                                            loading={
                                                file.generate.status ===
                                                'IN_PROGRESS'
                                            }
                                            text={status(file.generate.status)}
                                        />
                                    </div>
                                </div>
                            </Link>
                        </>
                    ))}
                </div>

                <div className="w-full">
                    <Link
                        href={`${
                            user.activePlan.quantity > 0
                                ? '/dashboard/create'
                                : '/dashboard/new/user/packages'
                        }`}
                    >
                        <DefaultButton
                            text="Create New HeadShot"
                            style="primary"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default page
