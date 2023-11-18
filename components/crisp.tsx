'use client'

import { useEffect } from 'react'
import { Crisp } from 'crisp-sdk-web'
import { useSession } from 'next-auth/react'
const CrispChat = () => {
    const { data: session, status } = useSession()
    useEffect(() => {
        Crisp.configure('1181a9bf-307b-4ed1-9639-4ab7873cfa25')
        if (session?.user?.email) {
            Crisp.user.setEmail(session.user.email)
        }
    }, [session])

    return null
}

export default CrispChat
