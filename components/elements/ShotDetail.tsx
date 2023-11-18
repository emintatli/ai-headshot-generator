import React from 'react'
import BreadCrumbs from './BreadCrumbs'
import Link from 'next/link'
import StarRating from './StarRating'
import AdBanner from './AdBanner'

type Props = {
    breadCrumbs: Array<{ name: string; link: string }>
    titles: {
        title: string
        subtitle: string
        description: string
    }
    items: Array<{
        title: string
        link: string
        image: string
        description: string
        rating: 1 | 2 | 3 | 4 | 5
        rateCount: number
        reviews: Array<{
            name: string
            rating: 1 | 2 | 3 | 4 | 5
            date: string
            comment: string
        }>
    }>
}

const ShotDetail = ({ breadCrumbs, titles, items }: Props) => {
    return (
        <div className="mx-2">
            <BreadCrumbs elements={breadCrumbs} />
            <h3 className="text-lg text-teal-400 font-bold my-8">
                {titles.title}
            </h3>
            <h1 className="text-4xl font-semibold">{titles.subtitle}</h1>
            <p className="text-lg mt-8">{titles.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto mb-16 auto-rows-auto">
                {items.map((item) => (
                    <>
                        <Link href={item.link}>
                            <div className="border shadow-md rounded-xl relative m-8 mb-8">
                                <img
                                    src={item.image}
                                    className="rounded-t-md h-36 w-full object-cover"
                                />
                                <div className="p-3">
                                    <StarRating
                                        rating={item.rating}
                                        count={item.rateCount}
                                    />
                                    <div className="text-xl font-semibold my-1">
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
            <AdBanner />
            <div className="container mx-auto">
                {items.map((item, index) => (
                    <div
                        className="w-full border rounded-md bg-white p-3 md:p-8 mb-3"
                        key={index}
                    >
                        <div className="flex gap-3">
                            <img
                                src={item.image}
                                className="w-32 lg:w-64 object-contain"
                            />
                            <div>
                                <h3 className="text-2xl font-bold">
                                    {item.title}
                                </h3>
                                <StarRating
                                    rating={item.rating}
                                    count={item.rateCount}
                                    size="small"
                                />
                                <p className="">{item.description}</p>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="text-xl font-semibold">Reviews</div>
                            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                                {item.reviews.map((review) => (
                                    <>
                                        <div className="p-8 border rounded-md shadow-md mt-3 w-full">
                                            <StarRating
                                                rating={review.rating}
                                                size="small"
                                            />
                                            <div className="text-sm text-gray-500">
                                                {review.comment}
                                            </div>
                                            <div className="text-sm font-semibold">
                                                {review.name}
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <AdBanner />
        </div>
    )
}

export default ShotDetail
