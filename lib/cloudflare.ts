import { env } from '@/env'
import Uploader from 'cloudflare-images-lib'

export const uploader = new Uploader(env.CF_ACCOUNT_ID, env.CF_API_TOKEN)

export const generateImageList = async (output: any) => {
    let _generatedImagesList: string[] = []

    for (const value of output) {
        // const _data = await uploader.fromURL(value) // cf
      //  _generatedImagesList.push(_data.data.result.variants[0])
      _generatedImagesList.push(value)
    }
    return _generatedImagesList
}
