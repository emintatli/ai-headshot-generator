'use client'
import React from 'react'

type Props = {
    text?: string
    style?:
        | 'primary'
        | 'secondary'
        | 'disabled'
        | 'green'
        | 'error'
        | 'inprogress'
    className?: string
    icon?: any
    loading?: boolean
    onClick?: () => void
}

const DefaultButton = ({
    style = 'primary',
    text,
    className,
    loading = false,
    icon,
    onClick,
}: Props) => {
    const styleMap = {
        primary: {
            background: 'palette-dark-blue',
            hover: 'hover:bg-cyan-800',
            text: 'text-white',
            border: 'palette-dark-blue',
        },
        inprogress: {
            background: 'bg-yellow-500',
            hover: 'hover:bg-yellow-400',
            text: 'text-white',
            border: 'border-yellow-500',
        },
        secondary: {
            background: 'bg-white',
            hover: 'hover:bg-slate-50',
            text: 'text-cyan-900',
            border: 'border border-cyan-900',
        },
        green: {
            background: 'bg-green-500',
            hover: 'hover:bg-green-400',
            text: 'text-white',
            border: 'border-green-500',
        },
        error: {
            background: 'bg-red-500',
            hover: 'hover:bg-red-400',
            text: 'text-white',
            border: 'border-red-500',
        },
        disabled: {
            background: 'bg-slate-200 pointer-events-none',
            hover: 'hover:bg-slate-200',
            text: 'text-slate-500',
            border: 'border border-slate-200',
        },
    }

    return (
        <div
            onClick={onClick}
            className={`w-100 h-12 rounded-md ${styleMap[style].background} ${styleMap[style].hover} ${styleMap[style].border} flex items-center justify-center cursor-pointer ${className}`}
        >
            <div>{icon ? icon : null}</div>
            {text ? (
                <span
                    className={`${styleMap[style].text} truncate text-ellipsis`}
                >
                    {text}
                </span>
            ) : null}

            {loading ? (
                <div className="w-4 h-4 border-2 border-white rounded-md ml-2 animate-spin"></div>
            ) : null}
        </div>
    )
}

export default DefaultButton
