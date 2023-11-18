import { env } from '@/env'
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'
import { checkIsUserPaid } from '../route'
import userFileModel from '@/db/models/userFileModel'
import usersModel from '@/db/models/usersModel'
import { generate } from '@/lib/generate'

const handler = async (req: NextRequest, res: any) => {
    const body = await req.json()
    const token = await getToken({ req })
    if (!token) return NextResponse.redirect(`${env.WEB_URL}/auth/login`)
    if (!body.filename) {
        return NextResponse.json({ error: 'No file name provided' })
    }
    if (!body.gender) {
        return NextResponse.json({ error: 'No gender provided' })
    }
    if (!body.name) {
        return NextResponse.json({ error: 'No name provided' })
    }
    if (!(await checkIsUserPaid(token))) {
        return NextResponse.json({
            error: ' You need to have a paid membership to use this feature',
        })
    }
    await userFileModel
        .findOneAndUpdate(
            {
                userId: token.sub,
                'file.fileName': body.filename,
            },
            {
                'file.uploadComplete': true,
            }
        )
        .exec()
    await usersModel
        .findByIdAndUpdate(token.sub, {
            $inc: { 'activePlan.quantity': -1 },
        })
        .exec()
    const _data = await generate(
        `https://${env.AWS_ZIP_BUCKET_NAME}.s3.amazonaws.com/${body.filename}`
    )
    await userFileModel.findOneAndUpdate(
        {
            userId: token.sub,
            'file.fileName': body.filename,
        },
        {
            'generate.generateId': _data.id,
            'generate.checkpointUrl': `https://${env.AWS_CKPT_BUCKET_NAME}.s3.amazonaws.com/${env.AWS_CKPT_BUCKET_NAME}/${_data.id}.ckpt`,
            'generate.status': _data.status,
            'generate.name': body.name,
            'generate.gender': body.gender,
        }
    )

    // balance yi düş ve generate i başlat , arama yoksa diye check ekle
    return NextResponse.json({ success: true })
}
export { handler as POST }
