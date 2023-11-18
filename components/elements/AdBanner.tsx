import React from 'react'
import DefaultButton from '../buttons/DefaultButton'
import Link from 'next/link'

type Props = {}

const AdBanner = (props: Props) => {
    return (
        <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32 my-3">
            <div className="absolute inset-0">
                <img
                    className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left"
                    src="https://imagedelivery.net/3PeGHUQkMEy8-eW2JDCv7A/44043655-76cf-411b-7c67-d3cac3f92b00/hq"
                    alt=""
                />
            </div>

            <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

            <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

            <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                        Get your headshots now!
                    </h2>
                    <p className="mt-4 text-xl font-semibold text-gray-200 flex items-center">
                        <img
                            className="mr-2"
                            width={25}
                            src="/images/correct.png"
                        />{' '}
                        No need for any physical shoot
                    </p>
                    <p className="mt-4 text-xl font-semibold text-gray-200 flex items-center">
                        <img
                            className="mr-2"
                            width={25}
                            src="/images/correct.png"
                        />{' '}
                        Ready in 2 hours
                    </p>
                    <p className="mt-4 text-xl font-semibold text-gray-200 flex items-center">
                        <img
                            className="mr-2"
                            width={25}
                            src="/images/correct.png"
                        />{' '}
                        Super simple , just few clicks.
                    </p>
                    <Link href="/dashboard">
                        <DefaultButton
                            className="px-6 mt-6"
                            text="Access your photos"
                            style="secondary"
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default AdBanner
