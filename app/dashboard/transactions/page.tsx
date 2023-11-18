import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import usersModel from '@/db/models/usersModel'
import dbConnect from '@/db/mongoose'
import moment from 'moment'
import { getServerSession } from 'next-auth'
import React from 'react'

type transaction = {
    quantity: number
    createdAt: string
    type: string
    _id: string
}

const page = async () => {
    const session = await getServerSession(authOptions)
    await dbConnect()
    const user = await usersModel.findById(session.user.id).exec()
    console.log(user)

    return (
        <div className="flex items-center justify-center w-full">
            <table className="table-auto border-separate w-full ">
                <thead>
                    <tr>
                        <th className="text-start text-sm bg-slate-50">ID</th>
                        <th className="text-start text-sm bg-slate-50">Date</th>
                        <th className="text-start text-sm bg-slate-50">Type</th>
                        <th className="text-start text-sm bg-slate-50">
                            Amount
                        </th>
                        <th className="text-start text-sm bg-slate-50">
                            Total
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {user.transactionHistory.map(
                        (transaction: transaction, index: number) => (
                            <tr key={index} className="bg-sky-50">
                                <td>
                                    <div className="text-xs">
                                        {transaction._id}
                                    </div>
                                </td>
                                <td>
                                    {' '}
                                    <div className="text-xs">
                                        {moment(transaction.createdAt).format(
                                            'DD MMM YYYY HH:mm'
                                        )}
                                    </div>
                                </td>
                                <td>
                                    {' '}
                                    <div className="text-xs">
                                        {transaction.type === 'main-payment'
                                            ? 'Premium Headshots'
                                            : null}
                                        {transaction.type === 'unlock-20'
                                            ? 'Unlock 20 Headshots'
                                            : null}
                                    </div>
                                </td>
                                <td>
                                    <div className="text-xs">
                                        {transaction.quantity}
                                    </div>
                                </td>
                                <td>
                                    <div className="text-xs">
                                        $
                                        {(transaction.type === 'main-payment'
                                            ? 29.7 * transaction.quantity
                                            : 4.7 * transaction.quantity
                                        ).toFixed(2)}
                                    </div>
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default page
