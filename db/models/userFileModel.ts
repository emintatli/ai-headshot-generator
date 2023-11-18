import mongoose from 'mongoose'

const userFileSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    file: {
        url: { type: String },
        fileName: { type: String },
        createdAt: { type: Date },
        uploadComplete: { type: Boolean },
    },
    generate: {
        createdAt: { type: Date },
        updatedAt: { type: Date },
        executionTime: { type: Number, default: null },
        delayTime: { type: Number, default: null },
        checkpointUrl: { type: String, default: null },
        generationFinished: { type: Boolean, default: false },
        failureReason: { type: String, default: null },
        gender: {
            type: String,
            enum: ['man', 'woman', 'person'],
            default: 'person',
        },
        name: { type: String, default: null },
        status: {
            type: String,
            enum: [
                'IN_PROGRESS',
                'FAILED',
                'IN_QUEUE',
                'COMPLETED',
                'NOT_STARTED',
            ],
            default: 'NOT_STARTED',
        },
        generateId: { type: String, default: null },
    },
    imageGenerate: {
        createdAt: { type: Date },
        updatedAt: { type: Date },
        executionTime: { type: Number, default: null },
        delayTime: { type: Number, default: null },
        images: { type: Array, default: [] },
        name: { type: String, default: null },
        status: {
            type: String,
            enum: [
                'IN_PROGRESS',
                'FAILED',
                'IN_QUEUE',
                'COMPLETED',
                'NOT_STARTED',
            ],
            default: 'NOT_STARTED',
        },
        processComplete: { type: Boolean, default: false },
        generateId: { type: String, default: null },
    },
    extraImages: { type: Boolean, default: false },
})

export default mongoose.models.userfiles ||
    mongoose.model('userfiles', userFileSchema)
