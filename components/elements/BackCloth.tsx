import Link from 'next/link'
import React from 'react'
import DefaultButton from '../buttons/DefaultButton'

type Props = {}

const BackCloth = (props: Props) => {
    return (
        <div id='styles'>
            <div className="my-6 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 px-6 lg:px-16">
                    <img
                        className="w-full md:w-96 xl:w-full p-3 lg:p-8"
                        src="https://imagedelivery.net/3PeGHUQkMEy8-eW2JDCv7A/1d629104-6658-4286-5988-2a6183188000/public"
                    />
                    <div className="px-3 flex flex-col justify-between mb-6 p-8">
                        <h3 className="text-2xl xl:text-5xl mb-8">
                            Create a Professional AI Generated Headshot for Linkedin
                        </h3>
                        <div className="text-normal xl:text-xl mb-6">
                        No matter if you want a formal, casual, or artistic style, our lifelike headshot generator is here to help. This AI tool lets you easily create a professional LinkedIn profile picture that makes you stand out in the job market. Enhance your LinkedIn presence today – give it a try!
                        </div>
                        <Link href={'/dashboard'}>
                            <DefaultButton
                                style="primary"
                                text="Generate a Headshot"
                                className="px-3"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="my-6 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 px-6 lg:px-16">
                    <div className="px-3 flex flex-col justify-between mb-6 p-8">
                        <h3 className="text-2xl xl:text-5xl mb-8">
                            AI Headshot Generator for Social Media
                        </h3>
                        <div className="text-normal xl:text-xl mb-6">
                        Simply upload your photo, and watch as the AI transforms it into a polished headshot. The generator adapts to your desired style – be it professional, friendly, or something uniquely you. It refines the images lighting, focus, and overall presentation, ensuring you put your best face forward.
                        </div>
                        <Link href={'/dashboard'}>
                            <DefaultButton
                                style="primary"
                                text="Generate a Headshot"
                                className="px-3"
                            />
                        </Link>
                    </div>
                    <img
                        className="w-full md:w-96 xl:w-full p-3 lg:p-8"
                        src="https://imagedelivery.net/3PeGHUQkMEy8-eW2JDCv7A/1d31b2be-b643-47a3-e15b-7cbc5c9be900/public"
                    />
                </div>
            </div>

            <div className="my-6 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 px-6 lg:px-16">
                    <img
                        className="w-full md:w-96 xl:w-full p-3 lg:p-8"
                        src="https://imagedelivery.net/3PeGHUQkMEy8-eW2JDCv7A/ae8fd329-fe8e-400a-2172-8507ed18ef00/public"
                    />
                    <div className="px-3 flex flex-col justify-between mb-6 p-8">
                        <div className="text-2xl xl:text-5xl mb-8">
                            Generate AI Headshot from Image
                        </div>
                        <div className="text-normal xl:text-xl mb-6">
                        Elevate your visuals with the power of AI. Our cutting-edge AI Headshot Generator takes your images to the next level, producing stunning headshots that captivate and impress.
                        </div>
                        <Link href={'/dashboard'}>
                            <DefaultButton
                                style="primary"
                                text="Generate a Headshot"
                                className="px-3"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackCloth
