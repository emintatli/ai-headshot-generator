import ShotDetail from '@/components/elements/ShotDetail'
import React from 'react'

type Props = {}
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Professional headshots in San Francisco | HeadShotRapid',
  description: 'Our curated selection guarantees access to outstanding services for your professional headshots near San Francisco, making it easy to find the perfect fit in your area.',
}
const page = (props: Props) => {
    return (
        <div className="container mx-auto my-8">
            <ShotDetail
                breadCrumbs={[
                    {
                        link: '/headshots-near-me',
                        name: 'Headshots Near Me',
                    },
                    {
                        link: '/headshots-near-me/united-states',
                        name: 'United States',
                    },
                    {
                        link: '/headshots-near-me/united-states/san-francisco',
                        name: 'San Francisco',
                    },
                ]}
                titles={{
                    title: 'Headshots in San Francisco',
                    subtitle:
                        'Find the best headshot photographers in San Francisco',
                    description:
                        'Discover top-notch headshot photography studios in the bustling city of San Francisco, a diverse metropolis known for its iconic Golden Gate Bridge, steep hills, cable cars, and vibrant neighborhoods. Alternatively, explore the cutting-edge AI-generated headshot services provided by HeadshotPro. Weigh your options and choose the perfect headshot solution that meets your needs.',
                }}
                items={[
                    {
                        title: 'HeadshotPro',
                        link: '/headshots-near-me/united-states/san-francisco/headshotpro',
                        image: 'https://imagedelivery.net/3PeGHUQkMEy8-eW2JDCv7A/7a6a8125-e9ba-4d73-a642-fee973e3a400/public',
                        rating: 5,
                        rateCount: 4723,
                        reviews: [
                            {
                                name: 'John Doe',
                                rating: 5,
                                date: '2021-01-01',
                                comment: 'This is a great service. I love it!',
                            },
                            {
                                name: 'John Doe',
                                rating: 5,
                                date: '2021-01-01',
                                comment: 'This is a great service. I love it!',
                            },
                            {
                                name: 'John Doe',
                                rating: 5,
                                date: '2021-01-01',
                                comment: 'This is a great service. I love it!',
                            },
                            {
                                name: 'John Doe',
                                rating: 5,
                                date: '2021-01-01',
                                comment: 'This is a great service. I love it!',
                            },
                        ],
                        description:
                            ' HeadshotPro is a cutting-edge AI-generated headshot service that provides you with a professional headshot in a matter of seconds. Simply upload your photo and choose from a variety of backgrounds and styles. HeadshotPro is the perfect solution for those who need a professional headshot but don’t have the time or money to hire a photographer.',
                    },
                    {
                        title: 'HeadshotPro',
                        link: '/headshots-near-me/united-states/san-francisco/headshotpro',
                        image: '/images/headshotpro.jpg',
                        rating: 3,
                        rateCount: 42723,
                        reviews: [
                            {
                                name: 'John Doe',
                                rating: 5,
                                date: '2021-01-01',
                                comment: 'This is a great service. I love it!',
                            },
                        ],
                        description:
                            ' HeadshotPro is a cutting-edge AI-generated headshot service that provides you with a professional headshot in a matter of seconds. Simply upload your photo and choose from a variety of backgrounds and styles. HeadshotPro is the perfect solution for those who need a professional headshot but don’t have the time or money to hire a photographer.',
                    },
                    {
                        title: 'HeadshotPro',
                        link: '/headshots-near-me/united-states/san-francisco/headshotpro',
                        image: '/images/headshotpro.jpg',
                        rating: 1,
                        rateCount: 43,
                        reviews: [
                            {
                                name: 'John Doe',
                                rating: 5,
                                date: '2021-01-01',
                                comment: 'This is a great service. I love it!',
                            },
                            {
                                name: 'John Doe',
                                rating: 5,
                                date: '2021-01-01',
                                comment: 'This is a great service. I love it!',
                            },
                        ],
                        description:
                            ' HeadshotPro is a cutting-edge AI-generated headshot service that provides you with a professional headshot in a matter of seconds. Simply upload your photo and choose from a variety of backgrounds and styles. HeadshotPro is the perfect solution for those who need a professional headshot but don’t have the time or money to hire a photographer.',
                    },
                ]}
            />
        </div>
    )
}

export default page
