import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <h2 className='text-5xl mb-2'>404 - Not Found</h2>
            <p className='mb-2'>Could not find requested resource</p>
            <Link  href="/"><span className='text-blue-400 underline'>Return Home</span></Link>
        </div>
    )
}
