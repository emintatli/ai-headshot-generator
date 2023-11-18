import React from 'react'

type Props = {}

const HowItWorks = (props: Props) => {
  return (
    <section id='howitworks' className="py-10 bg-white sm:py-16 lg:py-24 container mx-auto">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How does it work?</h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">The Quickest and Most Effortless Method to Attain Professional Corporate Headshots for You and Your Team</p>
        </div>

        <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <img className="w-full" src="/curved-dotted-line.svg" alt="" />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700"> 1 </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Upload your selfies</h3>
                    <p className="mt-4 text-base text-gray-600">Submit your self-portraits on the platform. We advise capturing them against a simple backdrop, utilizing proper lighting, and showcasing a genuine, natural smile.</p>
                </div>

                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700"> 2 </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">AI processor generates your headshots</h3>
                    <p className="mt-4 text-base text-gray-600">Subsequently, our cutting-edge AI photographer will produce more than 80+ headshots per member. Through sophisticated algorithms, the AI enhances each image for impeccable lighting, sharpness, and color balance, culminating in exquisite and polished professional headshots.</p>
                </div>

                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700"> 3 </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Download your favourites</h3>
                    <p className="mt-4 text-base text-gray-600">Lastly, you can look through the created headshots and choose your favorites. After making your selection, you can download the chosen headshots in high quality. These can then be used on your website, LinkedIn, business cards, and other promotional materials.</p>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default HowItWorks