import './globals.css'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { ToastContainer } from 'react-toastify'
import Script from 'next/script'
const inter = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
    metadataBase: new URL('https://www.headshotrapid.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        images: '/opengraph-image.png',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <Script
                async
                id="gtag"
                src="https://www.googletagmanager.com/gtag/js?id=G-6G2VC84Z62"
            >
                <Script id="gtag2">
                    {`  window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-6G2VC84Z62');`}
                </Script>
            </Script>

            <body className={`${inter.className} min-h-screen bg-slate-50`}>
                {children}
            </body>
        </html>
    )
}
