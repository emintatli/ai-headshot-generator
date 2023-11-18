import React, { useState } from 'react'
import localFont from 'next/font/local'
import Link from 'next/link'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import dbConnect from '@/db/mongoose'
import usersModel from '@/db/models/usersModel'
import { redirect } from 'next/navigation'
import PaymentButton from '@/components/buttons/PaymentButton'
type Props = {}
const myFont = localFont({
    src: '../../../../../public/Agdasima-Regular.ttf',
})
const Page = async (props: Props) => {
    const session = await getServerSession(authOptions)
    await dbConnect()
    const user = await usersModel.findById(session.user.id)
    if (user.activePlan.quantity > 0) {
        redirect('/dashboard/create')
    }

    return (
        <div>
            <h3 className="font-bold text-lg mb-2">Select A Package</h3>
            <p>
                <span className="text-cyan-500">
                    Single payment. No recurring payments or subscriptions.
                </span>{' '}
                After payment, you will be required to upload a minimum of 15
                photos of yourself.
            </p>
            <div className='gradient-bg rounded-lg text-white p-3 font-semibold text-center my-1'>%60 OFF - OFFER EXPIRES TODAY</div>
            <div className="mt-3">
                {/* <Link href={'/api/premium?plan=minimal&q=1'}>
                    <div className="p-3 flex items-center justify-between hover:bg-slate-200 cursor-pointer">
                        <div className="flex-start">
                            <span className="font-semibold">Minimal</span>
                            <p className="text-sm">
                                40 headshots with 1 background. (Lower quality)
                            </p>
                        </div>
                        <div className="w-24 text-end">
                            <span className={`${myFont.className} text-2xl`}>
                                $ 23.99
                            </span>
                        </div>
                    </div>
                </Link> */}
                <div className="w-100 border-b border-slate-200"></div>
                <PaymentButton font={myFont} />
                {/* <Link href={'/api/premium?plan=premium&q=1'}>
                    <div className="p-3 flex items-center justify-between bg-slate-100 hover:bg-slate-200 cursor-pointer">
                        <div className="flex-start">
                            <div className="flex items-center">
                                <span className="font-semibold mr-1">
                                    Premium
                                </span>
                                <span className="gradient-bg rounded-lg px-1.5 py-0.5 text-[9px] font-bold uppercase text-white">
                                    MOST POPULAR
                                </span>
                                <span className="bg-emerald-500 rounded-lg px-1.5 py-0.5 text-[9px] font-bold uppercase text-white ml-1">
                                    %60 OFF
                                </span>
                            </div>

                            <p className="text-sm">
                                120 headshots. (High quality)
                            </p>
                        </div>
                        <div className="flex flex-col w-24 text-end">
                            <del
                                className={`${myFont.className} text-md text-rose-400`}
                            >
                                $ 47
                            </del>
                            <span className={`${myFont.className} text-2xl`}>
                                $ 27.70
                            </span>
                        </div>
                    </div>
                </Link> */}
                <div className="w-100 border-b border-slate-200"></div>
                {/* <Link href={'/api/premium?plan=ultra&q=1'}>
                    <div className="p-3 flex items-center justify-between hover:bg-slate-200 cursor-pointer">
                        <div className="flex-start">
                            <div className="flex items-center">
                                <span className="font-semibold mr-1">
                                    Ultra
                                </span>
                                <span className="bg-blue-800 rounded-lg px-1.5 py-0.5 text-[9px] font-bold uppercase text-white">
                                    BEST VALUE
                                </span>
                            </div>
                            <p className="text-sm">
                                240 headshots with 6 background. (High quality)
                            </p>
                        </div>
                        <div className="w-24 text-end">
                            <span className={`${myFont.className} text-2xl`}>
                                $ 57.99
                            </span>
                        </div>
                    </div>
                </Link> */}
            </div>
            <div className="text-xs text-gray-600 bg-yellow-500/10 px-8 py-3 flex items-center justify-center space-x-1.5 mt-4">
                <div className="flex items-center space-x-px">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3 h-3 text-yellow-500"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>{' '}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3 h-3 text-yellow-500"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>{' '}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3 h-3 text-yellow-500"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>{' '}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3 h-3 text-yellow-500"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>{' '}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3 h-3 text-yellow-500"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                </div>
                <span> Used by hundreds of happy customers.</span>
            </div>
        </div>
    )
}

export default Page
