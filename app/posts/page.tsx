import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import AdBanner from '@/components/elements/AdBanner'

function PostCard(post: Post) {
    //console.log(post)
    return (
        <div className="mb-8 mx-2 ">
            <img
                src={post.image}
                className="rounded-md h-48 w-full object-cover"
            />
            <h2 className="mb-1 mt-2 text-xl">
                <Link
                    href={post.url}
                    className="text-blue-700 hover:text-blue-900 dark:text-blue-400 font-semibold"
                >
                    {post.title}
                </Link>
            </h2>
            <time
                dateTime={post.date}
                className="mb-2 block text-xs text-gray-600"
            >
                {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
            <div
                className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0 h-14 text-ellipsis overflow-hidden"
                dangerouslySetInnerHTML={{ __html: post.body.html }}
            />
        </div>
    )
}

export default function Home() {
    const posts = allPosts.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    )

    return (
        <div className="container mx-auto py-8 px-3">
            <div className="text-teal-500 text-bold font-bold text-center">
                Blogs
            </div>
            <h1 className="mb-8 text-center text-2xl lg:text-5xl mt-3">
                Latest articles about headshot photography
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {posts.map((post, idx) => (
                    <PostCard key={idx} {...post} />
                ))}
            </div>
            <AdBanner />
        </div>
    )
}
