import NextAuth from 'next-auth'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import GoogleProvider from 'next-auth/providers/google'
import clientPromise from '@/db/authDb'
import { Adapter } from 'next-auth/adapters'
import { env } from '@/env'

export const authOptions = {
    adapter: MongoDBAdapter(clientPromise) as Adapter,
    providers: [
        GoogleProvider({
            clientId: env.GOOGLE_CLIENT_ID as string,
            clientSecret: env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    session: {
        strategy: 'jwt',
    } as any,
    pages: {
        signIn: '/auth/login',
    },
    callbacks: {
        session: async ({ session, token }: any) => {
            if (session?.user) {
                session.user.id = token.sub
            }
            return session
        },
    },
}
const handler = NextAuth(authOptions as any)

export { handler as GET, handler as POST }
