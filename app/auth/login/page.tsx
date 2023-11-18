import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'
import React from 'react'
import { redirect } from 'next/navigation'
import LoginBoard from '@/components/auth/button/LoginButton'
import LoginButton from '@/components/auth/button/LoginButton'
type Props = {}

const page = async (props: Props) => {
    const session = await getServerSession(authOptions)
    if (session) {
        redirect('/dashboard')
    }
    return (
        <>
            <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200 min-h-screen">
                <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                    <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                        <div className="rounded-xl bg-white shadow-xl">
                            <div className="p-6 sm:p-16">
                                <div className="space-y-4 flex justify-center">
                                    <img
                                        src="https://imagedelivery.net/3PeGHUQkMEy8-eW2JDCv7A/6aa9d752-8a54-4604-3c48-b1b15e3acc00/public"
                                        loading="lazy"
                                        className="w-4/6"
                                        alt="headshotrapid logo"
                                    />
                                </div>
                                <h2 className="mb-8 text-2xl text-cyan-900 font-semibold mt-4 text-center">
                                    Login or create an account to get started
                                </h2>
                                <div className="mt-16 grid space-y-2">
                                    <LoginButton />
                                </div>

                                <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                                    <p className="text-xs">
                                        By proceeding, you agree to our{' '}
                                        <a href="#" className="underline">
                                            Terms of Use
                                        </a>{' '}
                                        and confirm you have read our{' '}
                                        <a href="#" className="underline">
                                            Privacy and Cookie Statement
                                        </a>
                                        .
                                    </p>
                                    <p className="text-xs">
                                        This site is protected by reCAPTCHA and
                                        the{' '}
                                        <a href="#" className="underline">
                                            Google Privacy Policy
                                        </a>{' '}
                                        and{' '}
                                        <a href="#" className="underline">
                                            Terms of Service
                                        </a>{' '}
                                        apply.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
