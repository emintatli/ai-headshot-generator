import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'
import { JWT, getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { env } from '@/env'

type PaymentForType = 'main-payment' | 'unlock-20'

export const getStripeURL = async (
    priceId: string,
    quantity: number = 1,
    token: JWT,
    type: string,
    _for: PaymentForType = 'main-payment',
    fileId: string = ''
) => {
    if (!token.sub || !token.email) return
    const stripeSession = await stripe.checkout.sessions.create({
        success_url:
            _for === 'main-payment'
                ? env.WEB_URL + '/dashboard/create?payment=success'
                : env.WEB_URL + '/result/' + fileId,
        cancel_url: env.WEB_URL + '/dashboard?payment=cancel',
        payment_method_types: ['card'],
        mode: 'payment',
        automatic_tax: { enabled: true },
        billing_address_collection: 'auto',
        customer_email: token.email,
        line_items: [
            {
                price: priceId,
                quantity: quantity,
            },
        ],
        metadata: {
            userId: token.sub,
            fileId: fileId,
            for: _for,
            priceId: priceId,
            quantity,
            type,
        },
    })
    if (!stripeSession.url) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        )
    } else {
        return NextResponse.redirect(stripeSession.url)
    }
}

const handler = async (req: NextRequest, res: any) => {
    const { searchParams } = new URL(req.url)
    const plan = searchParams.get('plan')
    const q = searchParams.get('q')

    const token = await getToken({ req })

    if (!token) return NextResponse.redirect(`${env.WEB_URL}/auth/login`)
    if (!plan || !q)
        return NextResponse.json({ error: 'Invalid Input' }, { status: 400 })
    if (isNaN(parseInt(q)) || parseInt(q) < 1)
        return NextResponse.json({ error: 'Invalid Input' }, { status: 400 })

    switch (plan) {
        // case 'minimal':
        //     return getStripeURL(
        //         env.STRIPE_PLAN_MINIMAL,
        //         parseInt(q),
        //         token,
        //         'minimal'
        //     )
        case 'premium':
            return getStripeURL(
                env.STRIPE_PLAN_PREMIUM,
                parseInt(q),
                token,
                'premium'
            )
        // case 'ultra':
        //     return getStripeURL(
        //         env.STRIPE_PLAN_ULTRA,
        //         parseInt(q),
        //         token,
        //         'ultra'
        //     )
        default:
            return NextResponse.json(
                { error: 'Invalid Input' },
                { status: 400 }
            )
    }
}

export { handler as GET }
