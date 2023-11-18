import DefaultButton from '@/components/buttons/DefaultButton'
import StepButton from '@/components/buttons/StepButton'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <>
            <div className="mb-2 bg-yellow-100 p-2 rounded border border-amber-300">
                We will need 15 pictures that belong to you in order to create
                your headshots.
                <b>Make sure follow the instructions below</b> when choosing
                your pictures.<b>We cannot give any retries.</b>
            </div>
            <div>
                <img src="/images/6X.png" />
            </div>
            {/* <div className="mb-2 bg-yellow-100 p-2 rounded border border-amber-300">
                Please consider the following suggestions when choosing your
                pictures; otherwise, the quality of the generated photos may be
                compromised.
            </div>
            <div className="mb-2 bg-lime-200 p-2 rounded border border-lime-600">
                The pictures should be of <b>high quality</b>, and the minimum accepted
                resolution is 1000x1000.
            </div>
            <div className="mb-2 bg-rose-200 p-2 rounded border border-rose-600">
                Ensure that your face is close-up and clearly visible in the
                photos.Try to use pictures that are taken in <b>portrait or selfie</b>.
            </div>
            <div className="mb-2 bg-lime-200 p-2 rounded border border-lime-600">
                The pictures should be of <b>your face only</b>, and the
                background should be plain.
            </div>
            <div className="mb-2 bg-lime-200 p-2 rounded border border-lime-600">
                You can use pictures <b>where your face is captured from different
                angles</b>.This will improove the quality of the generated photos.
            </div>
            */}
            <Link href={'/dashboard/create/upload'}>
                <DefaultButton className="mt-2" text="Ok, I understand." />
            </Link>
        </>
    )
}

export default page
