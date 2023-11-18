import React from 'react'

type Props = {
    rating: 1 | 2 | 3 | 4 | 5
    count?: number
    size?: 'normal' | 'small'
}

const StarRating = ({ rating, count, size = 'normal' }: Props) => {
    return (
        <div className="flex items-center">
            {Array.from(Array(5)).map((_, index) => (
                <>
                    {rating < index + 1 ? (
                        <img
                            width={size === 'normal' ? 24 : 16}
                            src={'/images/star_gray.png'}
                        />
                    ) : (
                        <img
                            width={size === 'normal' ? 24 : 16}
                            src={'/images/icons8-star-48.png'}
                        />
                    )}
                </>
            ))}
            {count ? (
                <div
                    className={`${
                        size === 'normal' ? 'text-sm' : 'text-xs'
                    }  text-gray-500 ml-3`}
                >{`(${count})`}</div>
            ) : null}
        </div>
    )
}

export default StarRating
