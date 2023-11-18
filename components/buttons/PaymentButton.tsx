'use client'
import localFont from 'next/dist/compiled/@next/font/dist/local'
import React, { useState } from 'react'
import DefaultButton from './DefaultButton'
import Link from 'next/link'

type Props = {}

const PaymentButton = ({ font }: any) => {
    const [amount, setAmount] = useState(1)
    return (
        <div>
            <div className="p-3 flex items-center justify-between bg-slate-100 hover:bg-slate-200 cursor-pointer">
                <div className="flex-start">
                    <div className="flex items-center">
                        <span className="font-semibold mr-1">Premium</span>
                        <span className="gradient-bg rounded-lg px-1.5 py-0.5 text-[9px] font-bold uppercase text-white">
                            MOST POPULAR
                        </span>
                        <span className="bg-emerald-500 rounded-lg px-1.5 py-0.5 text-[9px] font-bold uppercase text-white ml-1">
                            %60 OFF
                        </span>
                    </div>

                    <p className="text-sm">
                        64 headshots. (High quality)
                    </p>
                </div>
                <div>
                    <label
                        htmlFor="countries"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Select amount (person) *
                    </label>
                    <select
                        id="countries"
                        value={amount}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        onChange={(e) => {
                            setAmount(parseInt(e.target.value))
                        }}
                    >
                        {[...Array(20)].map((_, i) => (
                            <option key={_} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col w-24 text-end">
                    <del className={`${font.className} text-md text-rose-400`}>
                        $ {amount * 47}
                    </del>
                    <span className={`${font.className} text-2xl`}>
                        $ {amount * 29.7}
                    </span>
                </div>
            </div>

            <Link href={`/api/premium?plan=premium&q=${amount}`}>
                <DefaultButton className="mt-2" text="Buy now" />
            </Link>
            <div className="text-xs text-gray italic mt-2 text-gray-400">
                * You can use your headshots wherever you want. You can use them
                for your personal things or commercial projects.
                <br />* Each headshot amounts is for one person. If you want to
                use for more than one person, you need to buy more headshots.
                (1-20) <br />* You can buy +20 more headshots for each person after
                generation.
            </div>
        </div>
    )
}

export default PaymentButton
