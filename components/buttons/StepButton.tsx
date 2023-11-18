'use client'
import React from 'react'

type Props = {
    accepted?: boolean
    text: string
    active?: boolean
    onClick?: () => void
}

const StepButton = ({
    accepted = false,
    text,
    active = false,
    onClick,
}: Props) => {
    return (
        <div
            onClick={onClick}
            className={`inline-block flex gap-2 px-3 py-2 items-center justify-center  rounded-md border border-cyan-900 w-28 cursor-pointer h-12 ${
                active ? 'text-white bg-cyan-900' : 'text-cyan-900 bg-white'
            }`}
        >
            {text} {accepted ? <img src="/images/correct.png" /> : null}
        </div>
    )
}

export default StepButton
