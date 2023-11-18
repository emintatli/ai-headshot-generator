import Link from 'next/link'
import React from 'react'
import BreadCrumbs from './BreadCrumbs'

type Props = {
    breadCrumbs: Array<{ name: string; link: string }>
    items: Array<{
        title: string
        link: string
        image: string
        description: string
    }>
    titles: {
        title: string
        subtitle: string
        description: string
    }
}

const GroupList = ({ breadCrumbs, items, titles }: Props) => {
    return (
        <>
            <div className="mt-16 container mx-auto">
                <BreadCrumbs elements={breadCrumbs} />
                <h3 className="text-lg text-blue-500 font-bold text-center">
                    {titles.title}
                </h3>
                <h1 className="text-5xl font-bold text-center mb-8 mt-8">
                    {titles.subtitle}
                </h1>
                <p className="text-center px-3 md:px-24 lg:px-64 text-lg mb-8">
                    {titles.description}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto mb-16 auto-rows-auto">
                {items.map((item) => (
                    <>
                        <Link href={item.link}>
                            <div className="border shadow-md rounded-xl relative m-8 mb-8">
                                <img
                                    src={item.image}
                                    className="rounded-t-md h-36 w-full"
                                />
                                <div className="p-3">
                                    <div className="text-xl font-semibold">
                                        {item.title}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </>
                ))}
            </div>
        </>
    )
}

export default GroupList
