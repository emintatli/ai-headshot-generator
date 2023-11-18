import Footer from '@/components/elements/Footer'
import GroupList from '@/components/elements/GroupList'
import Navbar from '@/components/elements/Navbar'
import Link from 'next/link'
import React from 'react'

type Props = {}
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Professional headshots near me | HeadShotRapid',
  description: 'Our curated selection guarantees access to outstanding services for your professional headshots near you, making it easy to find the perfect fit in your area.',
}
const page = (props: Props) => {
    return (
        <GroupList
            breadCrumbs={[
                {
                    link: '/headshots-near-me',
                    name: 'Headshots Near Me',
                },
            ]}
            items={[
                {
                    title: 'United States',
                    link: '/headshots-near-me/united-states',
                    image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/507000/507675-dallas.jpg',
                    description: '243 studios in 52 different cities.',
                },
            ]}
            titles={{
                title: 'Headshot photography studios',
                subtitle:
                    'Find professional headshot photographers in United States',
                description:
                    'Discover top-notch headshot photography studios and professionals in major cities across the United States, a country known for its diverse culture, storied history, and stunning scenery. Our curated selection guarantees access to outstanding services for your professional headshots, making it easy to find the perfect fit in your area.',
            }}
        />
    )
}

export default page
