import userFileModel from '@/db/models/userFileModel'
import dbConnect from '@/db/mongoose'
import { generateImageList, uploader } from '@/lib/cloudflare'
import {
    checkImagesFromModelStatus,
    checkStatus,
    generateImagesFromModel,
} from '@/lib/generate'
import {
    checkFileGenerationStatus,
    generateCkptResultandUpdateDb,
    updateGenerateStatus,
} from '@/lib/generate/ckpt'
import {
    updateGenerateImage,
    updateGenerateImageStatus,
    updateImageList,
} from '@/lib/generate/image'
import { generateFinalPromptArray } from '@/lib/prompts'
import { NextRequest, NextResponse } from 'next/server'

export const revalidate = 0

const handler = async () => {
    await dbConnect()
    const inprogressFiles = await userFileModel
        .find({
            $or: [
                { 'generate.status': 'IN_PROGRESS' },
                { 'generate.status': 'IN_QUEUE' },
            ],
        })
        .exec()
    async function action(file: any) {
        const generateCKPT = await checkStatus(file.generate.generateId)
        console.log(generateCKPT)
        if (!generateCKPT.status) {
            if (!file.generate.executionTime) {
                console.log(
                    'generationFinished false, but no generateCKPT status',
                    file.generate.executionTime
                )
                await updateGenerateStatus(
                    file,
                    'FAILED',
                    'no generateCKPT status or expired , executionTime is null'
                )
                return
            }
        }

        if (generateCKPT.status !== 'COMPLETED' && generateCKPT?.status) {
            await updateGenerateStatus(file, generateCKPT.status)
            return
        }

        // generateCKPT COMPLETED proceed to next step
        const _userFileModeldata = await generateCkptResultandUpdateDb(
            file,
            generateCKPT
        )

        if (_userFileModeldata?.imageGenerate?.status === 'NOT_STARTED') {
            const _generate = await generateImagesFromModel(
                file.generate.generateId,
                generateFinalPromptArray(_userFileModeldata?.generate?.gender)
            )
            await updateGenerateImage(file, _generate)
        } else if (_userFileModeldata?.imageGenerate?.generateId) {
            // check image generation status and update db
            const _checkImagesFromModelStatus =
                await checkImagesFromModelStatus(
                    _userFileModeldata.imageGenerate.generateId
                )

            await updateGenerateImageStatus(
                file,
                _checkImagesFromModelStatus.status
            )

            if (_checkImagesFromModelStatus.status === 'COMPLETED') {
                // if image generation completed upload images to cloudflare and update db
                const _generatedImagesList = await generateImageList(
                    _checkImagesFromModelStatus.output
                )

                await updateImageList(
                    file,
                    _checkImagesFromModelStatus.executionTime,
                    _generatedImagesList,
                    _checkImagesFromModelStatus.delayTime
                )
            }
        }
    }
    await new Promise(async (resolve, reject) => {
        for (const file of inprogressFiles) {
            // iterate inprogress or queue files
            await action(file)
        }
        resolve(true)
    })

    return NextResponse.json({
        error: false,
        message: 'Updated',
        data: {
            count: inprogressFiles?.length,
            rand: Math.random(),
        },
    })
}
export { handler as GET }
