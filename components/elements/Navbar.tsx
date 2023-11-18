import React from 'react'
import DefaultButton from '../buttons/DefaultButton'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <nav className="w-full z-10">
            <div className="palette-white h-8 flex items-center px-1 lg:px-20">
                <div className="text-xs text-zinc-400 flex gap-2 items-center mr-2">
                    <img width={15} src="/images/correct.png" />
                    Founded in UK. We respect your privacy.
                </div>
                <div className="text-xs text-zinc-400 flex gap-2 items-center">
                    <img width={15} src="/images/correct.png" />
                    Used by hundreds of happy customers.
                </div>
            </div>
            <div className="py-3 shadow-sm px-1 lg:px-20 flex items-center justify-between shadow-inner border border-b">
                <Link href={'/'} className="hover:text-zinc-500">
                    <img
                        width={200}
                        src={
                            'https://imagedelivery.net/3PeGHUQkMEy8-eW2JDCv7A/6aa9d752-8a54-4604-3c48-b1b15e3acc00/public'
                        }
                    />
                </Link>
                <div>
                    <ul className="flex hidden lg:block text-zinc-600 text-sm font-semibold xl:font-normal xl:text-base">
                        <li className="inline-block mr-6">
                            <Link
                                href={'/#examples'}
                                className="hover:text-zinc-500"
                            >
                                Reviews & examples
                            </Link>
                        </li>
                        <li className="inline-block mr-6">
                            <Link
                                href={'/#howitworks'}
                                className="hover:text-zinc-500"
                            >
                                How it works
                            </Link>
                        </li>
                        <li className="inline-block mr-6">
                            <Link
                                href={'/#styles'}
                                className="hover:text-zinc-500"
                            >
                                Styles
                            </Link>
                        </li>
                        {/* <li className="inline-block mr-6">
                            <Link
                                href={'/headshots-near-me'}
                                className="hover:text-zinc-500"
                            >
                                Near me
                            </Link>
                        </li> */}
                        <li className="inline-block mr-6">
                            <Link
                                href={'/posts'}
                                className="hover:text-zinc-500"
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link href={'/dashboard'}>
                    <DefaultButton
                        style="primary"
                        text="Dashboard"
                        className="px-3"
                    />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
