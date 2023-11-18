import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <section className="py-10 bg-blue-900 sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
               

                <div>
                    <div className="lg:flex lg:items-center lg:justify-between">
                      

                        <p className="mt-6 text-sm text-blue-200 lg:mt-0">
                            © Copyright 2023, All Rights Reserved by <a href="http://binarybricks.io/">Binary Bricks LTD</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
