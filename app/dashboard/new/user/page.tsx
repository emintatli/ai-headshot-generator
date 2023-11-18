import React from 'react'
import Image from 'next/image'
import headshotexample from '../../../../public/images/headshotexample.png'
import DefaultButton from '@/components/buttons/DefaultButton'
import Link from 'next/link'
type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <h3 className="font-semibold text-xl mb-2">
                Create Your own professional headshots
            </h3>
            <p className="mb-4">
                Welcome to <span className="text-cyan-500">HeadshotRapid</span>
                .To get started, simply follow the steps below to upload your
                photos. Our advanced system will use them to create stunning
                headshots exclusively for you.
            </p>
            <div className="flex items-center justify-center mt-2">
                <Image src={headshotexample} alt="Headshot example" />
            </div>
            <Link href="/dashboard/new/user/how-it-works">
                <DefaultButton
                    text={'Continue'}
                    style="primary"
                    className="mt-4 mb-8"
                />
            </Link>
        </div>
    )
}

export default page
