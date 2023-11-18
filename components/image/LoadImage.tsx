'use client'
import React, { useEffect, useRef, useState } from 'react'
import ContentLoader from 'react-content-loader'

type Props = {}

const LoadImage = ({
    src,
    width = '100%',
    height = '100%',
}: {
    src: string
    width?: number | string
    height?: number | string
}) => {
    const [loading, setLoading] = useState(true)
    const imageref = useRef<any>()
    useEffect(() => {
        imageref?.current?.complete && setLoading(false)
    }, [])

    return (
        <>
            {loading ? (
                <ContentLoader
                    viewBox="0 0 500 500"
                    height={height}
                    width={width}
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <path d="M484.52,64.61H15.65C7.1,64.61.17,71.2.17,79.31V299.82c0,8.12,6.93,14.7,15.48,14.7H484.52c8.55,0,15.48-6.58,15.48-14.7V79.31C500,71.2,493.07,64.61,484.52,64.61Zm-9,204.34c0,11.84-7.14,21.44-15.94,21.44H436.39L359.16,171.52c-7.1-10.92-19.67-11.16-27-.51L258.64,277.94C253.78,285,245.73,286,240,280.2l-79.75-80.62c-6-6.06-14.33-5.7-20,.88L62.34,290.39H40.63c-8.8,0-15.94-9.6-15.94-21.44V110.19c0-11.84,7.14-21.44,15.94-21.44H459.54c8.8,0,15.94,9.6,15.94,21.44Z" />
                    <ellipse cx="120" cy="140" rx="28" ry="28" />
                </ContentLoader>
            ) : null}
            <img
                className={`${loading ? 'hidden' : ''}`}
                onLoad={(e) => {
                    setLoading(false)
                }}
                ref={imageref}
                src={src}
                width={width}
                height={height}
            />
        </>
    )
}

export default LoadImage
