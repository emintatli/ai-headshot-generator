import { env } from '@/env'
import { payload } from './prompts'
import axios from 'axios'
export type settings = {
    prompt: string
    negative_prompt: string
    controlnet_image: string
}
export const generate = async (data_url: string) => {
    const data = await fetch('https://api.runpod.ai/v2/dream-booth-v1/run', {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: env.RUNPOD_API_SECRET,
        },
        body: JSON.stringify({
            input: {
                train: {
                    concept_name: 'ohwx',
                    data_url: data_url,
                    unet_epochs: 400,
                    unet_resolution: 768,
                    unet_8_bit_adam: true,
                    unet_learning_rate: 0.000001,
                    unet_batch_size: 1,
                    unet_lr_scheduler: 'constant',
                    text_lr_scheduler: 'constant',
                    text_8_bit_adam: true,
                    text_learning_rate: 0.000001,
                    text_steps: 400,
                    ckpt_link:
                        'https://huggingface.co/SG161222/Realistic_Vision_V5.1_noVAE/resolve/main/Realistic_Vision_V5.1.ckpt',
                },
            },
            s3Config: {
                bucketName: env.AWS_CKPT_BUCKET_NAME,
                accessId: env.AWS_ACCESS_KEY_ID,
                accessSecret: env.AWS_SECRET_ACCESS_KEY,
                endpointUrl: `https://${env.AWS_CKPT_BUCKET_NAME}.s3.amazonaws.com`,
            },
        }),
    })
    return await data.json()
}
export const checkStatus = async (id: string) => {
    const data = await fetch(
        `https://api.runpod.ai/v2/dream-booth-v1/status/${id}`,
        {
            method: 'GET',
            headers: {
                accept: 'application/json',
                authorization: env.RUNPOD_API_SECRET,
            },
            cache: 'no-store',
        }
    )
    return await data.json()
}

export const cancel = async (id: string) => {
    const data = await fetch(
        `https://api.runpod.ai/v2/dream-booth-v1/cancel/${id}`,
        {
            method: 'GET',
            headers: {
                accept: 'application/json',
                authorization: env.RUNPOD_API_SECRET,
            },
        }
    )
    return await data.json()
}

export const generateImagesFromModel = async (
    id: string,
    settings: settings[]
) => {
    const _payload = {
        input: {
            api: {
                method: 'POST',
                endpoint: '/sdapi/v1/txt2img',
            },
            ckpt_file: `https://${env.AWS_CKPT_BUCKET_NAME}.s3.amazonaws.com/${env.AWS_CKPT_BUCKET_NAME}/${id}.ckpt`,
            payload: payload(settings),
        },
    }   
    console.log(_payload.input.payload)
    const data = await axios.post(
        `https://api.runpod.ai/v2/${env.RUNPOD_SERVERLESS_ID}/run`,
        _payload,
        {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${env.RUNPOD_API_SECRET}`,
            },
        }
    )

    return await data.data
}
export const checkImagesFromModelStatus = async (id: string) => {
    const data = await fetch(
        `https://api.runpod.ai/v2/${env.RUNPOD_SERVERLESS_ID}/status/${id}`,
        {
            method: 'GET',
            headers: {
                accept: 'application/json',
                authorization: env.RUNPOD_API_SECRET,
            },
            cache: 'no-store',
        }
    )
    return await data.json()
}
