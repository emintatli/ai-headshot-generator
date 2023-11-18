import dbConnect from '@/db/mongoose'
import { NextRequest, NextResponse } from 'next/server'
import { checkIsUserPaid } from '../upload/route'
import { env } from '@/env'
import { getToken } from 'next-auth/jwt'
import userFileModel from '@/db/models/userFileModel'
import { getStripeURL } from '../premium/route'

const handler = async (req: NextRequest, res: any) => {
    const token = await getToken({ req })
    if (!token) return NextResponse.redirect(`${env.WEB_URL}/auth/login`)
    await dbConnect()
    const { searchParams } = new URL(req.url)
    const fileId = searchParams.get('fileId')
    if (!fileId)
        return NextResponse.json({ error: 'Invalid Input' }, { status: 400 })
    await dbConnect()
    return await getStripeURL(
        env.STRIPE_UNLOCK_20_PLAN,
        1,
        token,
        'unlock-20',
        'unlock-20',
        fileId as any
    )
}

export { handler as GET }
