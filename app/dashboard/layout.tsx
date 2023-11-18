'use client'
import Link from 'next/link'
import React from 'react'
import dynamic from 'next/dynamic'
import { SessionProvider } from 'next-auth/react'
const layout = ({ children }: any) => {
    const CrispWithNoSSR = dynamic(() => import('../../components/crisp'))
    return (
        <>
            <SessionProvider>
                <CrispWithNoSSR />
                <div className="w-100 flex justify-center items-center flex-col min-h-screen mx-2 my-2">
                    <Link href="/dashboard">
                        <div className="flex items-center flex-col mb-4 justify-center">
                            <img
                                src="https://imagedelivery.net/3PeGHUQkMEy8-eW2JDCv7A/6aa9d752-8a54-4604-3c48-b1b15e3acc00/public"
                                loading="lazy"
                                className="w-60"
                                alt="headshotrapid logo"
                            />
                            <span className="text-sm text-slate-400">
                                Perfect headshots in minutes
                            </span>
                        </div>
                    </Link>
                    <div className="bg-white w-full sm:5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 drop-shadow-md">
                        <div className="w-full p-4 md:p-8">{children}</div>
                    </div>
                </div>
            </SessionProvider>
        </>
    )
}

export default layout
