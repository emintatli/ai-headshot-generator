import { ObjectId } from 'mongodb'
import { headers } from 'next/headers'
import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'
import { env } from '@/env'
import usersModel from '../../../../db/models/usersModel'
import dbConnect from '@/db/mongoose'
import { NextResponse } from 'next/server'
import userFileModel from '@/db/models/userFileModel'
// export const config = {
//     api: {
//         bodyParser: false,
//     },
// }
export const revalidate = 0
async function handler(req: Request) {
    const body = await req.text()
    const signature = headers().get('Stripe-Signature') as string

    let event: Stripe.Event

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            env.STRIPE_WEBHOOK_SECRET
        )

        const session = event.data.object as any

        if (event.type === 'checkout.session.completed') {
            // 'charge.refunded'  'charge.dispute.created'
            // Retrieve the subscription details from Stripe.
            // const subscription = await stripe.subscriptions.retrieve(
            //   session.subscription as string
            // )
            await dbConnect()

            const usersData = await usersModel.findById(session.metadata.userId)
            usersData.transactionHistory.forEach((value: any) => {
                if (value.stripeSessionId === session.id) {
                    throw new Error('This payment already handled.')
                }
            })

            if (session.metadata.for === 'main-payment') {
                await usersModel.findByIdAndUpdate(session.metadata.userId, {
                    $set: {
                        payment: {
                            stripePaymentId: session.payment_intent,
                            stripeUserMail: session.customer_email,
                        },
                        activePlan: {
                            active: true,
                            type: session.metadata.type,
                            quantity: parseInt(session.metadata.quantity),
                            priceId: session.metadata.priceId,
                        },
                    },
                })
            } else if (session.metadata.for === 'unlock-20') {
                await userFileModel.findOneAndUpdate(
                    {
                        userId: session.metadata.userId,
                        _id: new ObjectId(session.metadata.fileId),
                    },
                    {
                        $set: {
                            extraImages: true,
                        },
                    }
                )
            }
            await usersModel.findByIdAndUpdate(session.metadata.userId, {
                $push: {
                    transactionHistory: {
                        priceId: session.metadata.priceId,
                        quantity: parseInt(session.metadata.quantity),
                        type: session.metadata.for,
                        stripeSessionId: session.id,
                    },
                },
            })

            // Update the user stripe into in our database.
            // Since this is the initial subscription, we need to update
            // the subscription id and customer id.
        }

        //   if (event.type === "invoice.payment_succeeded") {
        //     // Retrieve the subscription details from Stripe.
        //     const subscription = await stripe.subscriptions.retrieve(
        //       session.subscription as string
        //     )

        //     // Update the price id and set the new period end.
        //     await db.user.update({
        //       where: {
        //         stripeSubscriptionId: subscription.id,
        //       },
        //       data: {
        //         stripePriceId: subscription.items.data[0].price.id,
        //         stripeCurrentPeriodEnd: new Date(
        //           subscription.current_period_end * 1000
        //         ),
        //       },
        //     })
        //   }
        return NextResponse.json(null, { status: 200 })
    } catch (error: any) {
        return NextResponse.json(
            {
                message: `Webhook Error: ${error}`,
            },
            {
                status: 400,
            }
        )
    }
}
export { handler as POST }
