import React from 'react'

type Props = {}

const FAQ = (props: Props) => {
    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                    Frequently Asked Questions Regarding Our Professional AI-Generated Headshot Service for Individuals and Remote Teams.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                        >
                            <span className="flex text-lg font-semibold text-black">
                                {' '}
                                What do you do with my photos after training?{' '}
                            </span>

                            <svg
                                className="w-6 h-6 text-gray-400 rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                            <p>
                            Our AI model undergoes training using input photos. We subsequently generate avatars and ensure the removal of both the avatars and models.
                            </p>
                        </div>
                    </div>

                    <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                        >
                            <span className="flex text-lg font-semibold text-black">
                                Who owns the generated photos?
                            </span>

                            <svg
                                className="w-6 h-6 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                            <p>
                            The ownership and full commercial license for your photos are granted to you. They are exclusively used for training our AI model, with no other purpose in mind. After a duration of 7 days, we ensure the deletion of these photos along with the AI model.
                            
                            </p>
                        </div>
                    </div>

                    <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                        <div className="">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                            >
                                <span className="flex text-lg font-semibold text-black">
                                    {' '}
                                    What type of photos should I upload?
                                </span>

                                <svg
                                    className="w-6 h-6 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                <p>
                                For optimal results, we suggest providing 12 close-up shots and 8 upper body shots. Diversification is essential: aim for distinct facial expressions, various settings, backgrounds, and perspectives. Higher quality photos yield better outcomes, and we recommend using minimal makeup to avoid exaggeration in the final images. While nude photos are not accepted, swimwear and underwear shots are permissible.
                                   
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                        >
                            <span className="flex text-lg font-semibold text-black">
                                {' '}
                                Is payment secure?
                            </span>

                            <svg
                                className="w-6 h-6 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                            <p>
                            
                            Indeed, we utilize Stripe for payment processing. Its important to note that we do not retain any of your credit card details.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ
