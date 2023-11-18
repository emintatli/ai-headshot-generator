import mongoose from 'mongoose'
const usersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String },
    emailVerified: { type: Boolean || null },
    payment: {
        stripePaymentId: { type: String },
        stripeUserMail: { type: String },
    },
    activePlan: {
        active: { type: Boolean },
        type: { type: String },
        quantity: { type: Number },
        priceId: { type: String },
    },
    userFiles: {
        url: { type: String },
        fileName: { type: String },
        createdAt: { type: Date },
        uploadComplete: { type: Boolean },
    },
    transactionHistory: [
        {
            priceId: { type: String },
            quantity: { type: Number },
            createdAt: { type: Date, default: Date.now() },
            type: { type: String },
            stripeSessionId: { type: String },
        },
    ],
})

export default mongoose.models.users || mongoose.model('users', usersSchema)
