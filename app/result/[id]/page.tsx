import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import DefaultButton from '@/components/buttons/DefaultButton'
import DownloadZip from '@/components/buttons/DownloadZip'
import LoadImage from '@/components/image/LoadImage'
import userFileModel from '@/db/models/userFileModel'
import dbConnect from '@/db/mongoose'
import { faUnlock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ObjectId } from 'mongodb'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'
import ContentLoader from 'react-content-loader'
type Props = {}

const page = async ({ params }: any) => {
    const session = await getServerSession(authOptions)
    await dbConnect()
    //console.log(params)
    if (!params?.id) {
        redirect('/dashboard')
    }
    const userFile = await userFileModel.findOne({
        $and: [{ userId: session.user.id }, { _id: new ObjectId(params?.id) }],
    })

    const pushAdInsideUserFiles = () => {
        ;[
            4, 9, 12, 11, 14, 17, 21, 23, 29, 28, 30, 33, 38, 40, 44, 49, 52,
            57, 60, 64,
        ].forEach((value) => {
            userFile.imageGenerate.images[value] = { ad: true }
        })
    }
    if (userFile.extraImages === false) {
        pushAdInsideUserFiles()
    }

    //console.log(userFile)
    if (!userFile) {
        redirect('/dashboard')
    }

    return (
        <div>
            <div className="w-full flex justify-between">
                <div className="text-sm text-slate-800">
                    {userFile.generate.name}
                </div>
                <div className="text-xs text-slate-400">{params?.id}</div>
            </div>
            <div className="py-3 flex  justify-between items-center w-full">
                <div className="text-md text-gray-500 bg-yellow-200 p-3 rounded-sm">
                    In AI photography not everything is perfect. We are
                    providing you various options to choose from.
                </div>
            </div>
            {/* <div className='my-2'>
            <DownloadZip
                text={'Download All (zip)'}
                uploadedFiles={userFile.generate.images}
            />
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3 gap-2 ">
                {userFile.imageGenerate.images.map(
                    (value: any, index: number) => {
                        if (value?.ad) {
                            return (
                                <>
                                    <div
                                        className="relative w-full md:w-52 lg:w-64 2xl:w-72 bg-yellow-200 rounded-sm photoBlur"
                                        key={index}
                                    >
                                        <div className=" backdrop-blur-md bg-blue-900/40 w-full h-full  flex flex-col justify-between items-center p-3">
                                            <div className="">
                                                <div className="font-bold text-2xl text-center text-white">
                                                    Get more headshots for just
                                                    <span className="font-normal ml-2">
                                                        4.70$
                                                    </span>
                                                </div>
                                                <div className="text-white text-center mt-3">
                                                    <b>Limited Time</b> : Get 20
                                                    extra headshots
                                                </div>
                                            </div>
                                            <Link
                                                href={`/api/unlock?fileId=${params?.id}`}
                                            >
                                                <DefaultButton
                                                    text="Get extra headshots now"
                                                    style="secondary"
                                                    icon={
                                                        <FontAwesomeIcon
                                                            icon={faUnlock}
                                                            style={{
                                                                color: '#ffffff',
                                                            }}
                                                        />
                                                    }
                                                    className="p-3"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )
                        } else {
                            return (
                                <div
                                    className="relative w-full md:w-52 lg:w-64 2xl:w-72"
                                    key={index}
                                >
                                    <a href={value} target="_blank" download>
                                        <DefaultButton
                                            className="absolute bottom-0 right-0 left-0 rounded-sm h-8 w-full  md:w-52 lg:w-64 2xl:w-72"
                                            style="green"
                                            icon={
                                                <img
                                                    width={23}
                                                    src={'/images/download.png'}
                                                />
                                            }
                                        />
                                        <LoadImage src={value} />
                                        {/* <img src={value} /> */}
                                    </a>
                                </div>
                            )
                        }
                    }
                )}
            </div>
        </div>
    )
}

export default page
