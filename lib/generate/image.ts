import userFileModel from '@/db/models/userFileModel'

export const updateGenerateImage = async (file: any, _generate: any) => {
    await userFileModel.findOneAndUpdate(
        {
            userId: file.userId,
            'file.fileName': file.file.fileName,
        },
        {
            'imageGenerate.status': _generate.status,
            'imageGenerate.updatedAt': new Date(),
            'imageGenerate.generateId': _generate.id,
        }
    )
}

export const updateGenerateImageStatus = async (file: any, status: any) => {
    console.log('updateGenerateImageStatus')
    await userFileModel.findOneAndUpdate(
        {
            userId: file.userId,
            'file.fileName': file.file.fileName,
        },
        {
            'imageGenerate.status': status,
            'imageGenerate.updatedAt': new Date(),
        }
    )
}

export const updateImageList = async (
    file: any,
    executionTime: any,
    _generatedImagesList: any,
    delayTime: any
) => {
    await userFileModel.findOneAndUpdate(
        {
            userId: file.userId,
            'file.fileName': file.file.fileName,
        },
        {
            'imageGenerate.status': 'COMPLETED',
            updatedAt: new Date(),
            'imageGenerate.executionTime': executionTime,
            'imageGenerate.delayTime': delayTime,
            'imageGenerate.images': _generatedImagesList,
            'generate.status': 'COMPLETED',
        }
    )
}
