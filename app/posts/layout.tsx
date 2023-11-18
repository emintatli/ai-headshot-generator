import Footer from '@/components/elements/Footer'
import Navbar from '@/components/elements/Navbar'
import React from 'react'

type Props = {}

const layaout = ({ children }: any) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default layaout
