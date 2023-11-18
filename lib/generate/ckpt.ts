import userFileModel from '@/db/models/userFileModel'

export const generateCkptResultandUpdateDb = async (
    file: any,
    generateCKPT: any
) => {
    await userFileModel.findOneAndUpdate(
        {
            userId: file.userId,
            'file.fileName': file.file.fileName,
        },
        {
            'generate.executionTime': generateCKPT.executionTime,
            'generate.delayTime': generateCKPT.delayTime,
            'generate.generationFinished': true,
        }
    )

    return await userFileModel.findOne({
        userId: file.userId,
        'file.fileName': file.file.fileName,
    })
}

export const checkFileGenerationStatus = async (file: any) => {
    return await userFileModel.findOne({
        userId: file.userId,
        'file.fileName': file.file.fileName,
    })
}

export const updateGenerateStatus = async (
    file: any,
    status: any,
    message?: string
) => {
    await userFileModel.findOneAndUpdate(
        {
            userId: file.userId,
            'file.fileName': file.file.fileName,
        },
        {
            'generate.status': status,
            'generate.updatedAt': new Date(),
            'generate.failureReason': message ? message : '',
        }
    )
}
