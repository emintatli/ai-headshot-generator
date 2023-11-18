import { NextRequest, NextResponse } from 'next/server'
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { getSignedUrl, S3RequestPresigner } from '@aws-sdk/s3-request-presigner'
import { v4 as uuidv4 } from 'uuid'
import { fromEnv } from '@aws-sdk/credential-providers'
import dbConnect from '@/db/mongoose'
import { JWT, getToken } from 'next-auth/jwt'
import { env } from '@/env'
import usersModel from '../../../db/models/usersModel'
import userFileModel from '@/db/models/userFileModel'

export const checkIsUserPaid = async (token: JWT) => {
    await dbConnect()
    const user = await usersModel.findById(token.sub).exec()
    return (user?.activePlan?.active && user?.activePlan?.quantity > 0) ?? false
}

const createPresignedUrlWithClient = ({ bucket, key }: any) => {
    const client = new S3Client({
        region: env.AWS_REGION,
        credentials: fromEnv(),
    })
    const command = new PutObjectCommand({
        Bucket: bucket,
        Key: key,
    })
    return getSignedUrl(client, command, { expiresIn: 3600 })
}

const handler = async (req: NextRequest, res: any) => {
    const token = await getToken({ req })
    if (!token) return NextResponse.redirect(`${env.WEB_URL}/auth/login`)
    await dbConnect()
    if (!(await checkIsUserPaid(token))) {
        return NextResponse.json({
            error: ' You need to have a paid membership to use this feature',
        })
    }
    const fileName = `${uuidv4()}.zip`
    const clientUrl = await createPresignedUrlWithClient({
        bucket: 'headshotzipfiles',
        key: fileName,
    })
    await userFileModel.create({
        userId: token.sub,
        file: {
            url: `https://${env.AWS_ZIP_BUCKET_NAME}.s3.amazonaws.com/${fileName}`,
            fileName: fileName,
            createdAt: new Date(),
            uploadComplete: false,
        },
        generate: {
            createdAt: new Date(),
            updatedAt: new Date(),
            status: 'NOT_STARTED',
        },
    })
    return NextResponse.json({ url: clientUrl, filename: fileName })
}

export { handler as GET }
