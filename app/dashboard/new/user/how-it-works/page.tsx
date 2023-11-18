import DefaultButton from '@/components/buttons/DefaultButton'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <h3 className="font-semibold text-xl mb-2">
                Create Your own professional headshots
            </h3>
            <p className="mb-4">
                Crafting your professional headshots has never been easier. Just
                upload your photos, and leave the rest to us! Our expert team
                will handle all the details.
            </p>
            <Link href="/dashboard/new/user/packages">
                <DefaultButton
                    text={'Click Here To Start!'}
                    style="primary"
                    className="mt-4 mb-8"
                />
            </Link>
            <div className="flex items-center justify-center mt-2">
                <img
                    src={
                        'https://imagedelivery.net/3PeGHUQkMEy8-eW2JDCv7A/bbb30cc7-2c76-458a-67a6-3fbfbee0e600/hq'
                    }
                    alt="Headshot example"
                />
            </div>
        </div>
    )
}

export default page
