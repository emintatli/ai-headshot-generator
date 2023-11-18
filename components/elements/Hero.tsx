import React from 'react'
import DefaultButton from '../buttons/DefaultButton'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
    return (
        <div>
            <div className="relative bg-emerald-300">
                <div className="tech-slideshow relative">
                    <div className="mover-1"></div>
                    <div className="flex items-center justify-center w-full h-full flex-col text-center z-10 absolute backdrop-blur-xs">
                        <div className="white-s">
                            <div className="flex items-center flex-col w-full h-full justify-center">
                                <h1 className="text-4xl font-bold mb-8 palette-dark-blue-text">
                                    Professional headshots,
                                    <br /> without physical photo shoot
                                </h1>
                                <h2 className="text-xl my-4 font-semibold">
                                    The #1 Professional AI Headshot Generator
                                </h2>
                                <h3 className="mb-3 text-lg">
                                    Simply upload your photos and receive over
                                    80 customized headshots.
                                </h3>
                                <Link href="/dashboard">
                                    <DefaultButton
                                        className="px-6 mt-6"
                                        text="Access your photos"
                                        style="primary"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="palette-dark-blue text-white">
                <div className="flex flex-col items-center justify-center gap-8 md:flex-row lg:gap-16 p-8">
                    <div>
                        <div className="text-xl font-semibold">
                            No need for any physical shoot
                        </div>
                    </div>
                    <div className="h-px w-full bg-sky-300 md:h-28 md:w-px"></div>
                    <div className="flex gap-3">
                        <div className="text-6xl font-semibold">$29</div>
                        <div>
                            starting at
                            <br /> per person
                        </div>{' '}
                    </div>
                    <div className="h-px w-full bg-sky-300 md:h-28 md:w-px"></div>
                    <div>
                        <ul className="font-semibold text-base lg:text-lg">
                            <li> 84 headshots per person</li>
                            <li> Indistinguishable from real photos</li>
                            <li> Ready in 2 hours</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
