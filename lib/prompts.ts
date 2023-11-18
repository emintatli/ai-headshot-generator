import { poseImage1 } from './base64/poseImage1'
import { poseImage2 } from './base64/poseImage2'
import { poseImage3 } from './base64/poseImage3'
import { poseImage4 } from './base64/poseImage4'
import { poseImage5 } from './base64/poseImage5'
import { poseImage6 } from './base64/poseImage6'
export type settings = {
    prompt: string
    negative_prompt: string
    controlnet_image: string
}
const negativePrompt =
    '(shadow:1.9),(shadows:1.9),((flyaway hair)),deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime, text, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, deformed eyes, close up, ((disfigured)), ((bad art)), ((deformed)), ((extra limb)), (((duplicate))), ((morbid)), ((mutilated)), out of frame, extra fingers, mutated hands, poorly drawn eyes, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), ((ugly)), ((bad anatomy)), (((bad proportions))), cloned face, body out of frame, face out of frame, head out of frame, out of frame, gross proportions, (malformed limbs), ((missing arms)), ((missing legs)), (((extra arms))), (((extra legs))), (fused fingers), (too many fingers), (((long neck))), tiling, poorly drawn, mutated, cross-eye, canvas frame, cartoon, 3d, weird colors, ((((visible hand)))) , ((((ugly)))), (((duplicate))), ((morbid)), ((mutilated)), [out of frame], extra fingers, mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), ((ugly)),  ((bad anatomy)), (((bad proportions))), ((extra limbs)), cloned face, (((disfigured))), out of frame, ugly, extra limbs, (bad anatomy), gross proportions, (malformed limbs), ((missing arms)), ((missing legs)), (((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), (((long neck))), UnrealisticDream'
const negativePrompt2 = `(shadow:1.9),(shadows:1.9),deformed eyes, close up, ((disfigured)), ((bad art)), ((deformed)), ((extra limb)), (((duplicate))), ((morbid)), ((mutilated)), out of frame, extra fingers, mutated hands, poorly drawn eyes, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), ((ugly)), blurry, ((bad anatomy)), (((bad proportions))), cloned face, body out of frame, face out of frame, head out of frame, out of frame, gross proportions, (malformed limbs), ((missing arms)), ((missing legs)), (((extra arms))), (((extra legs))), (fused fingers), (too many fingers), (((long neck))), tiling, poorly drawn, mutated, cross-eye, canvas frame, cartoon, 3d, weird colors, ((((visible hand)))) , ((((ugly)))), (((duplicate))), ((morbid)), ((mutilated)), [out of frame], extra fingers, mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), ((ugly)), blurry, ((bad anatomy)), (((bad proportions))), ((extra limbs)), cloned face, (((disfigured))), out of frame, ugly, extra limbs, (bad anatomy), gross proportions, (malformed limbs), ((missing arms)), ((missing legs)), (((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), (((long neck)))`
const negativePrompt3 = `deformed eyes,(naked:1.9),revealing,(nsfw:1.9), close up,bad hair, ((disfigured)), ((bad art)), ((deformed)), ((extra limb)), (((duplicate))), ((morbid)), ((mutilated)), out of frame, extra fingers, mutated hands, poorly drawn eyes, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), ((ugly)), blurry, ((bad anatomy)), (((bad proportions))), cloned face, body out of frame, face out of frame, head out of frame, out of frame, gross proportions, (malformed limbs), ((missing arms)), ((missing legs)), (((extra arms))), (((extra legs))), (fused fingers), (too many fingers), (((long neck))), tiling, poorly drawn, mutated, cross-eye, canvas frame, cartoon, 3d, weird colors, ((((visible hand)))) , ((((ugly)))), (((duplicate))), ((morbid)), ((mutilated)), [out of frame], extra fingers, mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), ((ugly)), blurry, ((bad anatomy)), (((bad proportions))), ((extra limbs)), cloned face, (((disfigured))), out of frame, ugly, extra limbs, (bad anatomy), gross proportions, (malformed limbs), ((missing arms)), ((missing legs)), (((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), (((long neck)))`
export const prompts = (gender: any) => {
    if (gender === 'man') {
        return [
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Sleek sophistication, confident man, tailored attire, (black backdrop:1.4), poised presence, focused session, suave demeanor, professional headshot, monochromatic ensemble, bold background, refined elegance, sartorial finesse, captivating portrait, classic charm, professional boldness, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Sleek sophistication, confident man, tailored attire, (black backdrop:1.4), poised presence, focused session, suave demeanor, professional headshot, monochromatic ensemble, bold background, refined elegance, sartorial finesse, captivating portrait, classic charm, professional boldness, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Sleek sophistication, confident man, tailored attire, (black backdrop:1.4), poised presence, focused session, suave demeanor, professional headshot, monochromatic ensemble, bold background, refined elegance, sartorial finesse, captivating portrait, classic charm, professional boldness, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Sleek sophistication, confident man, tailored attire, (black backdrop:1.4), poised presence, focused session, suave demeanor, professional headshot, monochromatic ensemble, bold background, refined elegance, sartorial finesse, captivating portrait, classic charm, professional boldness, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Sleek sophistication, confident man, tailored attire, (black backdrop:1.4), poised presence, focused session, suave demeanor, professional headshot, monochromatic ensemble, bold background, refined elegance, sartorial finesse, captivating portrait, classic charm, professional boldness, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Sleek sophistication, confident man, tailored attire, (black backdrop:1.4), poised presence, focused session, suave demeanor, professional headshot, monochromatic ensemble, bold background, refined elegance, sartorial finesse, captivating portrait, classic charm, professional boldness, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 1 */
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Clean-cut professionalism, confident man, tailored outfit, (white backdrop:1.4), poised presence, focused session, timeless demeanor, professional headshot, minimalist attire, crisp background, refined elegance, sartorial finesse, captivating portrait, neutral charm, professional simplicity, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Clean-cut professionalism, confident man, tailored outfit, (white backdrop:1.4), poised presence, focused session, timeless demeanor, professional headshot, minimalist attire, crisp background, refined elegance, sartorial finesse, captivating portrait, neutral charm, professional simplicity, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Clean-cut professionalism, confident man, tailored outfit, (white backdrop:1.4), poised presence, focused session, timeless demeanor, professional headshot, minimalist attire, crisp background, refined elegance, sartorial finesse, captivating portrait, neutral charm, professional simplicity, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Clean-cut professionalism, confident man, tailored outfit, (white backdrop:1.4), poised presence, focused session, timeless demeanor, professional headshot, minimalist attire, crisp background, refined elegance, sartorial finesse, captivating portrait, neutral charm, professional simplicity, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Clean-cut professionalism, confident man, tailored outfit, (white backdrop:1.4), poised presence, focused session, timeless demeanor, professional headshot, minimalist attire, crisp background, refined elegance, sartorial finesse, captivating portrait, neutral charm, professional simplicity, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Clean-cut professionalism, confident man, tailored outfit, (white backdrop:1.4), poised presence, focused session, timeless demeanor, professional headshot, minimalist attire, crisp background, refined elegance, sartorial finesse, captivating portrait, neutral charm, professional simplicity, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 2 */

            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Tranquil elegance, confident man, polished attire, (blue backdrop:1.4), poised presence, focused session, serene demeanor, professional headshot, harmonious ensemble, calming background, refined elegance, sartorial finesse, captivating portrait, soothing charm, professional tranquility, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Tranquil elegance, confident man, polished attire, (blue backdrop:1.4), poised presence, focused session, serene demeanor, professional headshot, harmonious ensemble, calming background, refined elegance, sartorial finesse, captivating portrait, soothing charm, professional tranquility, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Tranquil elegance, confident man, polished attire, (blue backdrop:1.4), poised presence, focused session, serene demeanor, professional headshot, harmonious ensemble, calming background, refined elegance, sartorial finesse, captivating portrait, soothing charm, professional tranquility, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Tranquil elegance, confident man, polished attire, (blue backdrop:1.4), poised presence, focused session, serene demeanor, professional headshot, harmonious ensemble, calming background, refined elegance, sartorial finesse, captivating portrait, soothing charm, professional tranquility, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Tranquil elegance, confident man, polished attire, (blue backdrop:1.4), poised presence, focused session, serene demeanor, professional headshot, harmonious ensemble, calming background, refined elegance, sartorial finesse, captivating portrait, soothing charm, professional tranquility, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Tranquil elegance, confident man, polished attire, (blue backdrop:1.4), poised presence, focused session, serene demeanor, professional headshot, harmonious ensemble, calming background, refined elegance, sartorial finesse, captivating portrait, soothing charm, professional tranquility, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },

            /* end of prompt 3 */
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Corporate confidence, confident man, formal business attire, modern office setting, polished workspace, focused session, poised demeanor, career-driven presence, professional headshot, office backdrop, dynamic environment, sartorial finesse, captivating portrait, corporate sophistication, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Corporate confidence, confident man, formal business attire, modern office setting, polished workspace, focused session, poised demeanor, career-driven presence, professional headshot, office backdrop, dynamic environment, sartorial finesse, captivating portrait, corporate sophistication, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Corporate confidence, confident man, formal business attire, modern office setting, polished workspace, focused session, poised demeanor, career-driven presence, professional headshot, office backdrop, dynamic environment, sartorial finesse, captivating portrait, corporate sophistication, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Corporate confidence, confident man, formal business attire, modern office setting, polished workspace, focused session, poised demeanor, career-driven presence, professional headshot, office backdrop, dynamic environment, sartorial finesse, captivating portrait, corporate sophistication, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Corporate confidence, confident man, formal business attire, modern office setting, polished workspace, focused session, poised demeanor, career-driven presence, professional headshot, office backdrop, dynamic environment, sartorial finesse, captivating portrait, corporate sophistication, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Corporate confidence, confident man, formal business attire, modern office setting, polished workspace, focused session, poised demeanor, career-driven presence, professional headshot, office backdrop, dynamic environment, sartorial finesse, captivating portrait, corporate sophistication, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 4 */
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Executive demeanor, confident man, tailored suit, contemporary office setting, sleek workspace, focused session, poised presence, professional headshot, refined outfit, office backdrop, dynamic environment, sartorial excellence, captivating portrait, corporate sophistication, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Executive demeanor, confident man, tailored suit, contemporary office setting, sleek workspace, focused session, poised presence, professional headshot, refined outfit, office backdrop, dynamic environment, sartorial excellence, captivating portrait, corporate sophistication, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Executive demeanor, confident man, tailored suit, contemporary office setting, sleek workspace, focused session, poised presence, professional headshot, refined outfit, office backdrop, dynamic environment, sartorial excellence, captivating portrait, corporate sophistication, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Executive demeanor, confident man, tailored suit, contemporary office setting, sleek workspace, focused session, poised presence, professional headshot, refined outfit, office backdrop, dynamic environment, sartorial excellence, captivating portrait, corporate sophistication, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Executive demeanor, confident man, tailored suit, contemporary office setting, sleek workspace, focused session, poised presence, professional headshot, refined outfit, office backdrop, dynamic environment, sartorial excellence, captivating portrait, corporate sophistication, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Executive demeanor, confident man, tailored suit, contemporary office setting, sleek workspace, focused session, poised presence, professional headshot, refined outfit, office backdrop, dynamic environment, sartorial excellence, captivating portrait, corporate sophistication, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 5 */
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Lobby sophistication, confident man, sharp attire, upscale hotel lobby, grand architecture, focused session, poised presence, luxurious ambiance, professional headshot, refined outfit, lobby backdrop, opulent surroundings, sartorial finesse, captivating portrait, high-end charm, cosmopolitan traveler, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Lobby sophistication, confident man, sharp attire, upscale hotel lobby, grand architecture, focused session, poised presence, luxurious ambiance, professional headshot, refined outfit, lobby backdrop, opulent surroundings, sartorial finesse, captivating portrait, high-end charm, cosmopolitan traveler, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Lobby sophistication, confident man, sharp attire, upscale hotel lobby, grand architecture, focused session, poised presence, luxurious ambiance, professional headshot, refined outfit, lobby backdrop, opulent surroundings, sartorial finesse, captivating portrait, high-end charm, cosmopolitan traveler, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Lobby sophistication, confident man, sharp attire, upscale hotel lobby, grand architecture, focused session, poised presence, luxurious ambiance, professional headshot, refined outfit, lobby backdrop, opulent surroundings, sartorial finesse, captivating portrait, high-end charm, cosmopolitan traveler, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Lobby sophistication, confident man, sharp attire, upscale hotel lobby, grand architecture, focused session, poised presence, luxurious ambiance, professional headshot, refined outfit, lobby backdrop, opulent surroundings, sartorial finesse, captivating portrait, high-end charm, cosmopolitan traveler, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Lobby sophistication, confident man, sharp attire, upscale hotel lobby, grand architecture, focused session, poised presence, luxurious ambiance, professional headshot, refined outfit, lobby backdrop, opulent surroundings, sartorial finesse, captivating portrait, high-end charm, cosmopolitan traveler, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 6 */
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Natural charm, confident man, casual outfit, serene park setting, greenery all around, focused session, relaxed demeanor, effortless style, professional headshot, relaxed attire, park backdrop, tranquil atmosphere, sartorial simplicity, captivating portrait, outdoor serenity, nature lover, leisurely charm, park wanderer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Natural charm, confident man, casual outfit, serene park setting, greenery all around, focused session, relaxed demeanor, effortless style, professional headshot, relaxed attire, park backdrop, tranquil atmosphere, sartorial simplicity, captivating portrait, outdoor serenity, nature lover, leisurely charm, park wanderer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Natural charm, confident man, casual outfit, serene park setting, greenery all around, focused session, relaxed demeanor, effortless style, professional headshot, relaxed attire, park backdrop, tranquil atmosphere, sartorial simplicity, captivating portrait, outdoor serenity, nature lover, leisurely charm, park wanderer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Natural charm, confident man, casual outfit, serene park setting, greenery all around, focused session, relaxed demeanor, effortless style, professional headshot, relaxed attire, park backdrop, tranquil atmosphere, sartorial simplicity, captivating portrait, outdoor serenity, nature lover, leisurely charm, park wanderer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Natural charm, confident man, casual outfit, serene park setting, greenery all around, focused session, relaxed demeanor, effortless style, professional headshot, relaxed attire, park backdrop, tranquil atmosphere, sartorial simplicity, captivating portrait, outdoor serenity, nature lover, leisurely charm, park wanderer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Natural charm, confident man, casual outfit, serene park setting, greenery all around, focused session, relaxed demeanor, effortless style, professional headshot, relaxed attire, park backdrop, tranquil atmosphere, sartorial simplicity, captivating portrait, outdoor serenity, nature lover, leisurely charm, park wanderer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },

            /* end of prompt 7 */
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Transit sophistication, confident man, modern outfit, bustling train station, commuters passing by, focused session, poised demeanor, urban elegance, professional headshot, stylish ensemble, station backdrop, dynamic energy, sartorial flair, captivating portrait, on-the-go attitude, cosmopolitan charm, city traveler, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Transit sophistication, confident man, modern outfit, bustling train station, commuters passing by, focused session, poised demeanor, urban elegance, professional headshot, stylish ensemble, station backdrop, dynamic energy, sartorial flair, captivating portrait, on-the-go attitude, cosmopolitan charm, city traveler, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Transit sophistication, confident man, modern outfit, bustling train station, commuters passing by, focused session, poised demeanor, urban elegance, professional headshot, stylish ensemble, station backdrop, dynamic energy, sartorial flair, captivating portrait, on-the-go attitude, cosmopolitan charm, city traveler, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Transit sophistication, confident man, modern outfit, bustling train station, commuters passing by, focused session, poised demeanor, urban elegance, professional headshot, stylish ensemble, station backdrop, dynamic energy, sartorial flair, captivating portrait, on-the-go attitude, cosmopolitan charm, city traveler, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Transit sophistication, confident man, modern outfit, bustling train station, commuters passing by, focused session, poised demeanor, urban elegance, professional headshot, stylish ensemble, station backdrop, dynamic energy, sartorial flair, captivating portrait, on-the-go attitude, cosmopolitan charm, city traveler, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Transit sophistication, confident man, modern outfit, bustling train station, commuters passing by, focused session, poised demeanor, urban elegance, professional headshot, stylish ensemble, station backdrop, dynamic energy, sartorial flair, captivating portrait, on-the-go attitude, cosmopolitan charm, city traveler, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 8 */
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Urban edge, confident man, edgy outfit, city streets, graffiti art, focused session, fearless demeanor, street-style flair, professional headshot, contemporary ensemble, urban backdrop, vibrant energy, sartorial attitude, captivating portrait, modern charm, city explorer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Urban edge, confident man, edgy outfit, city streets, graffiti art, focused session, fearless demeanor, street-style flair, professional headshot, contemporary ensemble, urban backdrop, vibrant energy, sartorial attitude, captivating portrait, modern charm, city explorer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Urban edge, confident man, edgy outfit, city streets, graffiti art, focused session, fearless demeanor, street-style flair, professional headshot, contemporary ensemble, urban backdrop, vibrant energy, sartorial attitude, captivating portrait, modern charm, city explorer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Urban edge, confident man, edgy outfit, city streets, graffiti art, focused session, fearless demeanor, street-style flair, professional headshot, contemporary ensemble, urban backdrop, vibrant energy, sartorial attitude, captivating portrait, modern charm, city explorer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Urban edge, confident man, edgy outfit, city streets, graffiti art, focused session, fearless demeanor, street-style flair, professional headshot, contemporary ensemble, urban backdrop, vibrant energy, sartorial attitude, captivating portrait, modern charm, city explorer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Urban edge, confident man, edgy outfit, city streets, graffiti art, focused session, fearless demeanor, street-style flair, professional headshot, contemporary ensemble, urban backdrop, vibrant energy, sartorial attitude, captivating portrait, modern charm, city explorer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 9 */
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Metropolitan vibe, confident man, tailored blazer, sleek shoes, bustling cityscape, city lights, focused session, poised presence, modern elegance, professional headshot, chic attire, metropolitan backdrop, dynamic energy, sartorial finesse, captivating portrait, cosmopolitan charm, timeless sophistication, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Metropolitan vibe, confident man, tailored blazer, sleek shoes, bustling cityscape, city lights, focused session, poised presence, modern elegance, professional headshot, chic attire, metropolitan backdrop, dynamic energy, sartorial finesse, captivating portrait, cosmopolitan charm, timeless sophistication, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Metropolitan vibe, confident man, tailored blazer, sleek shoes, bustling cityscape, city lights, focused session, poised presence, modern elegance, professional headshot, chic attire, metropolitan backdrop, dynamic energy, sartorial finesse, captivating portrait, cosmopolitan charm, timeless sophistication, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Metropolitan vibe, confident man, tailored blazer, sleek shoes, bustling cityscape, city lights, focused session, poised presence, modern elegance, professional headshot, chic attire, metropolitan backdrop, dynamic energy, sartorial finesse, captivating portrait, cosmopolitan charm, timeless sophistication, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Metropolitan vibe, confident man, tailored blazer, sleek shoes, bustling cityscape, city lights, focused session, poised presence, modern elegance, professional headshot, chic attire, metropolitan backdrop, dynamic energy, sartorial finesse, captivating portrait, cosmopolitan charm, timeless sophistication, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Metropolitan vibe, confident man, tailored blazer, sleek shoes, bustling cityscape, city lights, focused session, poised presence, modern elegance, professional headshot, chic attire, metropolitan backdrop, dynamic energy, sartorial finesse, captivating portrait, cosmopolitan charm, timeless sophistication, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 10 */

            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Natural elegance, confident man, casual attire, serene park setting, greenery all around, focused session, relaxed demeanor, effortless style, professional headshot, relaxed outfit, park backdrop, tranquil atmosphere, sartorial simplicity, captivating portrait, outdoor serenity, nature enthusiast, leisurely charm, park explorer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Natural elegance, confident man, casual attire, serene park setting, greenery all around, focused session, relaxed demeanor, effortless style, professional headshot, relaxed outfit, park backdrop, tranquil atmosphere, sartorial simplicity, captivating portrait, outdoor serenity, nature enthusiast, leisurely charm, park explorer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Natural elegance, confident man, casual attire, serene park setting, greenery all around, focused session, relaxed demeanor, effortless style, professional headshot, relaxed outfit, park backdrop, tranquil atmosphere, sartorial simplicity, captivating portrait, outdoor serenity, nature enthusiast, leisurely charm, park explorer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Natural elegance, confident man, casual attire, serene park setting, greenery all around, focused session, relaxed demeanor, effortless style, professional headshot, relaxed outfit, park backdrop, tranquil atmosphere, sartorial simplicity, captivating portrait, outdoor serenity, nature enthusiast, leisurely charm, park explorer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Natural elegance, confident man, casual attire, serene park setting, greenery all around, focused session, relaxed demeanor, effortless style, professional headshot, relaxed outfit, park backdrop, tranquil atmosphere, sartorial simplicity, captivating portrait, outdoor serenity, nature enthusiast, leisurely charm, park explorer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Natural elegance, confident man, casual attire, serene park setting, greenery all around, focused session, relaxed demeanor, effortless style, professional headshot, relaxed outfit, park backdrop, tranquil atmosphere, sartorial simplicity, captivating portrait, outdoor serenity, nature enthusiast, leisurely charm, park explorer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 11 */
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Nautical allure, confident man, maritime outfit, by the sea, beachside session, relaxed demeanor, coastal charm, professional headshot, casual attire, ocean backdrop, tranquil ambiance, sartorial simplicity, captivating portrait, seaside serenity, maritime enthusiast, leisurely charm, beach wanderer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Nautical allure, confident man, maritime outfit, by the sea, beachside session, relaxed demeanor, coastal charm, professional headshot, casual attire, ocean backdrop, tranquil ambiance, sartorial simplicity, captivating portrait, seaside serenity, maritime enthusiast, leisurely charm, beach wanderer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Nautical allure, confident man, maritime outfit, by the sea, beachside session, relaxed demeanor, coastal charm, professional headshot, casual attire, ocean backdrop, tranquil ambiance, sartorial simplicity, captivating portrait, seaside serenity, maritime enthusiast, leisurely charm, beach wanderer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Nautical allure, confident man, maritime outfit, by the sea, beachside session, relaxed demeanor, coastal charm, professional headshot, casual attire, ocean backdrop, tranquil ambiance, sartorial simplicity, captivating portrait, seaside serenity, maritime enthusiast, leisurely charm, beach wanderer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Nautical allure, confident man, maritime outfit, by the sea, beachside session, relaxed demeanor, coastal charm, professional headshot, casual attire, ocean backdrop, tranquil ambiance, sartorial simplicity, captivating portrait, seaside serenity, maritime enthusiast, leisurely charm, beach wanderer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Nautical allure, confident man, maritime outfit, by the sea, beachside session, relaxed demeanor, coastal charm, professional headshot, casual attire, ocean backdrop, tranquil ambiance, sartorial simplicity, captivating portrait, seaside serenity, maritime enthusiast, leisurely charm, beach wanderer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 12 */
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Realtor professionalism, confident man, business attire, modern office setting, polished workspace, focused session, poised demeanor, property expert, professional headshot, refined outfit, office backdrop, dynamic environment, sartorial excellence, captivating portrait, real estate expertise, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Realtor professionalism, confident man, business attire, modern office setting, polished workspace, focused session, poised demeanor, property expert, professional headshot, refined outfit, office backdrop, dynamic environment, sartorial excellence, captivating portrait, real estate expertise, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Realtor professionalism, confident man, business attire, modern office setting, polished workspace, focused session, poised demeanor, property expert, professional headshot, refined outfit, office backdrop, dynamic environment, sartorial excellence, captivating portrait, real estate expertise, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Realtor professionalism, confident man, business attire, modern office setting, polished workspace, focused session, poised demeanor, property expert, professional headshot, refined outfit, office backdrop, dynamic environment, sartorial excellence, captivating portrait, real estate expertise, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Realtor professionalism, confident man, business attire, modern office setting, polished workspace, focused session, poised demeanor, property expert, professional headshot, refined outfit, office backdrop, dynamic environment, sartorial excellence, captivating portrait, real estate expertise, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Realtor professionalism, confident man, business attire, modern office setting, polished workspace, focused session, poised demeanor, property expert, professional headshot, refined outfit, office backdrop, dynamic environment, sartorial excellence, captivating portrait, real estate expertise, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 13 */
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Urban edge, confident man, rugged outfit, gritty alleyway, brick walls, focused session, fearless demeanor, street-style flair, professional headshot, edgy ensemble, urban backdrop, raw environment, sartorial attitude, captivating portrait, urban charm, city explorer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Urban edge, confident man, rugged outfit, gritty alleyway, brick walls, focused session, fearless demeanor, street-style flair, professional headshot, edgy ensemble, urban backdrop, raw environment, sartorial attitude, captivating portrait, urban charm, city explorer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Urban edge, confident man, rugged outfit, gritty alleyway, brick walls, focused session, fearless demeanor, street-style flair, professional headshot, edgy ensemble, urban backdrop, raw environment, sartorial attitude, captivating portrait, urban charm, city explorer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Urban edge, confident man, rugged outfit, gritty alleyway, brick walls, focused session, fearless demeanor, street-style flair, professional headshot, edgy ensemble, urban backdrop, raw environment, sartorial attitude, captivating portrait, urban charm, city explorer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Urban edge, confident man, rugged outfit, gritty alleyway, brick walls, focused session, fearless demeanor, street-style flair, professional headshot, edgy ensemble, urban backdrop, raw environment, sartorial attitude, captivating portrait, urban charm, city explorer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (handsome ohwx man:1.4), good looking hair,Urban edge, confident man, rugged outfit, gritty alleyway, brick walls, focused session, fearless demeanor, street-style flair, professional headshot, edgy ensemble, urban backdrop, raw environment, sartorial attitude, captivating portrait, urban charm, city explorer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 14 */
        ]
    } else {
        return [
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Forest park, confident woman, flowing maxi dress, comfortable sandals, serene atmosphere, towering trees, soft sunlight, focused session, graceful demeanor, natural beauty, professional headshot, effortless elegance, enchanting surroundings, sartorial triumph, natural charm, timeless grace, subtle background blur, realistic forest scene, serene ambiance, professional photoshoot., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Forest park, confident woman, flowing maxi dress, comfortable sandals, serene atmosphere, towering trees, soft sunlight, focused session, graceful demeanor, natural beauty, professional headshot, effortless elegance, enchanting surroundings, sartorial triumph, natural charm, timeless grace, subtle background blur, realistic forest scene, serene ambiance, professional photoshoot., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Forest park, confident woman, flowing maxi dress, comfortable sandals, serene atmosphere, towering trees, soft sunlight, focused session, graceful demeanor, natural beauty, professional headshot, effortless elegance, enchanting surroundings, sartorial triumph, natural charm, timeless grace, subtle background blur, realistic forest scene, serene ambiance, professional photoshoot., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Forest park, confident woman, flowing maxi dress, comfortable sandals, serene atmosphere, towering trees, soft sunlight, focused session, graceful demeanor, natural beauty, professional headshot, effortless elegance, enchanting surroundings, sartorial triumph, natural charm, timeless grace, subtle background blur, realistic forest scene, serene ambiance, professional photoshoot., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Forest park, confident woman, flowing maxi dress, comfortable sandals, serene atmosphere, towering trees, soft sunlight, focused session, graceful demeanor, natural beauty, professional headshot, effortless elegance, enchanting surroundings, sartorial triumph, natural charm, timeless grace, subtle background blur, realistic forest scene, serene ambiance, professional photoshoot., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Forest park, confident woman, flowing maxi dress, comfortable sandals, serene atmosphere, towering trees, soft sunlight, focused session, graceful demeanor, natural beauty, professional headshot, effortless elegance, enchanting surroundings, sartorial triumph, natural charm, timeless grace, subtle background blur, realistic forest scene, serene ambiance, professional photoshoot., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 1 - woman */
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Urban environment, confident woman, tailored blazer, sleek heels, bustling cityscape, city lights, focused session, poised demeanor, modern elegance, professional headshot, chic attire, metropolitan backdrop, dynamic energy, sartorial finesse, captivating portrait, cosmopolitan charm, timeless sophistication, subtle background blur, realistic city scene, urban ambiance, professional photoshoot, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Urban environment, confident woman, tailored blazer, sleek heels, bustling cityscape, city lights, focused session, poised demeanor, modern elegance, professional headshot, chic attire, metropolitan backdrop, dynamic energy, sartorial finesse, captivating portrait, cosmopolitan charm, timeless sophistication, subtle background blur, realistic city scene, urban ambiance, professional photoshoot, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Urban environment, confident woman, tailored blazer, sleek heels, bustling cityscape, city lights, focused session, poised demeanor, modern elegance, professional headshot, chic attire, metropolitan backdrop, dynamic energy, sartorial finesse, captivating portrait, cosmopolitan charm, timeless sophistication, subtle background blur, realistic city scene, urban ambiance, professional photoshoot, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Urban environment, confident woman, tailored blazer, sleek heels, bustling cityscape, city lights, focused session, poised demeanor, modern elegance, professional headshot, chic attire, metropolitan backdrop, dynamic energy, sartorial finesse, captivating portrait, cosmopolitan charm, timeless sophistication, subtle background blur, realistic city scene, urban ambiance, professional photoshoot, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Urban environment, confident woman, tailored blazer, sleek heels, bustling cityscape, city lights, focused session, poised demeanor, modern elegance, professional headshot, chic attire, metropolitan backdrop, dynamic energy, sartorial finesse, captivating portrait, cosmopolitan charm, timeless sophistication, subtle background blur, realistic city scene, urban ambiance, professional photoshoot, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Urban environment, confident woman, tailored blazer, sleek heels, bustling cityscape, city lights, focused session, poised demeanor, modern elegance, professional headshot, chic attire, metropolitan backdrop, dynamic energy, sartorial finesse, captivating portrait, cosmopolitan charm, timeless sophistication, subtle background blur, realistic city scene, urban ambiance, professional photoshoot, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 2 - woman */
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair, Studio environment, confident woman, classic attire, neutral backdrop, poised posture, focused session, timeless elegance, professional headshot, chic outfit, minimalistic setting, sartorial sophistication, captivating portrait, understated charm, poised demeanor, neutral background, professional studio shoot, elegant simplicity, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair, Studio environment, confident woman, classic attire, neutral backdrop, poised posture, focused session, timeless elegance, professional headshot, chic outfit, minimalistic setting, sartorial sophistication, captivating portrait, understated charm, poised demeanor, neutral background, professional studio shoot, elegant simplicity, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair, Studio environment, confident woman, classic attire, neutral backdrop, poised posture, focused session, timeless elegance, professional headshot, chic outfit, minimalistic setting, sartorial sophistication, captivating portrait, understated charm, poised demeanor, neutral background, professional studio shoot, elegant simplicity, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair, Studio environment, confident woman, classic attire, neutral backdrop, poised posture, focused session, timeless elegance, professional headshot, chic outfit, minimalistic setting, sartorial sophistication, captivating portrait, understated charm, poised demeanor, neutral background, professional studio shoot, elegant simplicity, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair, Studio environment, confident woman, classic attire, neutral backdrop, poised posture, focused session, timeless elegance, professional headshot, chic outfit, minimalistic setting, sartorial sophistication, captivating portrait, understated charm, poised demeanor, neutral background, professional studio shoot, elegant simplicity, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair, Studio environment, confident woman, classic attire, neutral backdrop, poised posture, focused session, timeless elegance, professional headshot, chic outfit, minimalistic setting, sartorial sophistication, captivating portrait, understated charm, poised demeanor, neutral background, professional studio shoot, elegant simplicity, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 3 - woman */
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Industrial city vibe, confident woman, edgy outfit, urban streets, artistic graffiti, focused session, fearless demeanor, street-style elegance, professional headshot, contemporary ensemble, urban backdrop, vibrant energy, sartorial flair, captivating portrait, modern attitude, eclectic charm, city exploration, urban chic, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Industrial city vibe, confident woman, edgy outfit, urban streets, artistic graffiti, focused session, fearless demeanor, street-style elegance, professional headshot, contemporary ensemble, urban backdrop, vibrant energy, sartorial flair, captivating portrait, modern attitude, eclectic charm, city exploration, urban chic, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Industrial city vibe, confident woman, edgy outfit, urban streets, artistic graffiti, focused session, fearless demeanor, street-style elegance, professional headshot, contemporary ensemble, urban backdrop, vibrant energy, sartorial flair, captivating portrait, modern attitude, eclectic charm, city exploration, urban chic, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Industrial city vibe, confident woman, edgy outfit, urban streets, artistic graffiti, focused session, fearless demeanor, street-style elegance, professional headshot, contemporary ensemble, urban backdrop, vibrant energy, sartorial flair, captivating portrait, modern attitude, eclectic charm, city exploration, urban chic, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Industrial city vibe, confident woman, edgy outfit, urban streets, artistic graffiti, focused session, fearless demeanor, street-style elegance, professional headshot, contemporary ensemble, urban backdrop, vibrant energy, sartorial flair, captivating portrait, modern attitude, eclectic charm, city exploration, urban chic, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Industrial city vibe, confident woman, edgy outfit, urban streets, artistic graffiti, focused session, fearless demeanor, street-style elegance, professional headshot, contemporary ensemble, urban backdrop, vibrant energy, sartorial flair, captivating portrait, modern attitude, eclectic charm, city exploration, urban chic, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 4 - woman */
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Bohemian city escape, confident woman, flowing attire, cobblestone streets, vintage architecture, focused session, free-spirited demeanor, boho chic, professional headshot, artistic ensemble, charming backdrop, relaxed elegance, captivating portrait, whimsical charm, urban oasis, eclectic style, city wanderer, carefree spirit, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Bohemian city escape, confident woman, flowing attire, cobblestone streets, vintage architecture, focused session, free-spirited demeanor, boho chic, professional headshot, artistic ensemble, charming backdrop, relaxed elegance, captivating portrait, whimsical charm, urban oasis, eclectic style, city wanderer, carefree spirit, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Bohemian city escape, confident woman, flowing attire, cobblestone streets, vintage architecture, focused session, free-spirited demeanor, boho chic, professional headshot, artistic ensemble, charming backdrop, relaxed elegance, captivating portrait, whimsical charm, urban oasis, eclectic style, city wanderer, carefree spirit, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Bohemian city escape, confident woman, flowing attire, cobblestone streets, vintage architecture, focused session, free-spirited demeanor, boho chic, professional headshot, artistic ensemble, charming backdrop, relaxed elegance, captivating portrait, whimsical charm, urban oasis, eclectic style, city wanderer, carefree spirit, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Bohemian city escape, confident woman, flowing attire, cobblestone streets, vintage architecture, focused session, free-spirited demeanor, boho chic, professional headshot, artistic ensemble, charming backdrop, relaxed elegance, captivating portrait, whimsical charm, urban oasis, eclectic style, city wanderer, carefree spirit, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Bohemian city escape, confident woman, flowing attire, cobblestone streets, vintage architecture, focused session, free-spirited demeanor, boho chic, professional headshot, artistic ensemble, charming backdrop, relaxed elegance, captivating portrait, whimsical charm, urban oasis, eclectic style, city wanderer, carefree spirit, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 5 - woman */
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Literary elegance, confident woman, sophisticated dress, book-lined shelves, quiet ambiance, focused session, poised presence, intellectual charm, professional headshot, classic ensemble, library backdrop, timeless allure, sartorial refinement, captivating portrait, scholarly sophistication, knowledge seeker, studious demeanor, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Literary elegance, confident woman, sophisticated dress, book-lined shelves, quiet ambiance, focused session, poised presence, intellectual charm, professional headshot, classic ensemble, library backdrop, timeless allure, sartorial refinement, captivating portrait, scholarly sophistication, knowledge seeker, studious demeanor, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Literary elegance, confident woman, sophisticated dress, book-lined shelves, quiet ambiance, focused session, poised presence, intellectual charm, professional headshot, classic ensemble, library backdrop, timeless allure, sartorial refinement, captivating portrait, scholarly sophistication, knowledge seeker, studious demeanor, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Literary elegance, confident woman, sophisticated dress, book-lined shelves, quiet ambiance, focused session, poised presence, intellectual charm, professional headshot, classic ensemble, library backdrop, timeless allure, sartorial refinement, captivating portrait, scholarly sophistication, knowledge seeker, studious demeanor, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Literary elegance, confident woman, sophisticated dress, book-lined shelves, quiet ambiance, focused session, poised presence, intellectual charm, professional headshot, classic ensemble, library backdrop, timeless allure, sartorial refinement, captivating portrait, scholarly sophistication, knowledge seeker, studious demeanor, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },

            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Literary elegance, confident woman, sophisticated dress, book-lined shelves, quiet ambiance, focused session, poised presence, intellectual charm, professional headshot, classic ensemble, library backdrop, timeless allure, sartorial refinement, captivating portrait, scholarly sophistication, knowledge seeker, studious demeanor, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 5 - woman */
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Transit chic, confident woman, modern attire, bustling train station, commuters passing by, focused session, poised presence, urban elegance, professional headshot, stylish outfit, station backdrop, dynamic energy, sartorial flair, captivating portrait, on-the-go attitude, cosmopolitan charm, city explorer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Transit chic, confident woman, modern attire, bustling train station, commuters passing by, focused session, poised presence, urban elegance, professional headshot, stylish outfit, station backdrop, dynamic energy, sartorial flair, captivating portrait, on-the-go attitude, cosmopolitan charm, city explorer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Transit chic, confident woman, modern attire, bustling train station, commuters passing by, focused session, poised presence, urban elegance, professional headshot, stylish outfit, station backdrop, dynamic energy, sartorial flair, captivating portrait, on-the-go attitude, cosmopolitan charm, city explorer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Transit chic, confident woman, modern attire, bustling train station, commuters passing by, focused session, poised presence, urban elegance, professional headshot, stylish outfit, station backdrop, dynamic energy, sartorial flair, captivating portrait, on-the-go attitude, cosmopolitan charm, city explorer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Transit chic, confident woman, modern attire, bustling train station, commuters passing by, focused session, poised presence, urban elegance, professional headshot, stylish outfit, station backdrop, dynamic energy, sartorial flair, captivating portrait, on-the-go attitude, cosmopolitan charm, city explorer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Transit chic, confident woman, modern attire, bustling train station, commuters passing by, focused session, poised presence, urban elegance, professional headshot, stylish outfit, station backdrop, dynamic energy, sartorial flair, captivating portrait, on-the-go attitude, cosmopolitan charm, city explorer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 6 - woman */
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Café allure, confident woman, casual-chic outfit, cozy café corner, aromatic coffee, focused session, relaxed demeanor, effortless style, professional headshot, comfortable ensemble, café backdrop, inviting ambiance, sartorial comfort, captivating portrait, café culture, leisurely charm, coffee enthusiast, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Café allure, confident woman, casual-chic outfit, cozy café corner, aromatic coffee, focused session, relaxed demeanor, effortless style, professional headshot, comfortable ensemble, café backdrop, inviting ambiance, sartorial comfort, captivating portrait, café culture, leisurely charm, coffee enthusiast, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Café allure, confident woman, casual-chic outfit, cozy café corner, aromatic coffee, focused session, relaxed demeanor, effortless style, professional headshot, comfortable ensemble, café backdrop, inviting ambiance, sartorial comfort, captivating portrait, café culture, leisurely charm, coffee enthusiast, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Café allure, confident woman, casual-chic outfit, cozy café corner, aromatic coffee, focused session, relaxed demeanor, effortless style, professional headshot, comfortable ensemble, café backdrop, inviting ambiance, sartorial comfort, captivating portrait, café culture, leisurely charm, coffee enthusiast, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Café allure, confident woman, casual-chic outfit, cozy café corner, aromatic coffee, focused session, relaxed demeanor, effortless style, professional headshot, comfortable ensemble, café backdrop, inviting ambiance, sartorial comfort, captivating portrait, café culture, leisurely charm, coffee enthusiast, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Café allure, confident woman, casual-chic outfit, cozy café corner, aromatic coffee, focused session, relaxed demeanor, effortless style, professional headshot, comfortable ensemble, café backdrop, inviting ambiance, sartorial comfort, captivating portrait, café culture, leisurely charm, coffee enthusiast, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 7 - woman */
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Park tranquility, confident woman, casual attire, serene park setting, greenery all around, focused session, peaceful presence, natural beauty, professional headshot, relaxed outfit, park backdrop, tranquil atmosphere, sartorial simplicity, captivating portrait, outdoor serenity, nature lover, leisurely charm, park wanderer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Park tranquility, confident woman, casual attire, serene park setting, greenery all around, focused session, peaceful presence, natural beauty, professional headshot, relaxed outfit, park backdrop, tranquil atmosphere, sartorial simplicity, captivating portrait, outdoor serenity, nature lover, leisurely charm, park wanderer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Park tranquility, confident woman, casual attire, serene park setting, greenery all around, focused session, peaceful presence, natural beauty, professional headshot, relaxed outfit, park backdrop, tranquil atmosphere, sartorial simplicity, captivating portrait, outdoor serenity, nature lover, leisurely charm, park wanderer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Park tranquility, confident woman, casual attire, serene park setting, greenery all around, focused session, peaceful presence, natural beauty, professional headshot, relaxed outfit, park backdrop, tranquil atmosphere, sartorial simplicity, captivating portrait, outdoor serenity, nature lover, leisurely charm, park wanderer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Park tranquility, confident woman, casual attire, serene park setting, greenery all around, focused session, peaceful presence, natural beauty, professional headshot, relaxed outfit, park backdrop, tranquil atmosphere, sartorial simplicity, captivating portrait, outdoor serenity, nature lover, leisurely charm, park wanderer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Park tranquility, confident woman, casual attire, serene park setting, greenery all around, focused session, peaceful presence, natural beauty, professional headshot, relaxed outfit, park backdrop, tranquil atmosphere, sartorial simplicity, captivating portrait, outdoor serenity, nature lover, leisurely charm, park wanderer, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 8 - woman */
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4) Lobby elegance, confident woman, sophisticated attire, upscale hotel lobby, grand architecture, focused session, poised presence, luxurious ambiance, professional headshot, refined outfit, lobby backdrop, opulent surroundings, sartorial finesse, captivating portrait, high-end charm, cosmopolitan traveler, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4) Lobby elegance, confident woman, sophisticated attire, upscale hotel lobby, grand architecture, focused session, poised presence, luxurious ambiance, professional headshot, refined outfit, lobby backdrop, opulent surroundings, sartorial finesse, captivating portrait, high-end charm, cosmopolitan traveler, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4) Lobby elegance, confident woman, sophisticated attire, upscale hotel lobby, grand architecture, focused session, poised presence, luxurious ambiance, professional headshot, refined outfit, lobby backdrop, opulent surroundings, sartorial finesse, captivating portrait, high-end charm, cosmopolitan traveler, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4) Lobby elegance, confident woman, sophisticated attire, upscale hotel lobby, grand architecture, focused session, poised presence, luxurious ambiance, professional headshot, refined outfit, lobby backdrop, opulent surroundings, sartorial finesse, captivating portrait, high-end charm, cosmopolitan traveler, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4) Lobby elegance, confident woman, sophisticated attire, upscale hotel lobby, grand architecture, focused session, poised presence, luxurious ambiance, professional headshot, refined outfit, lobby backdrop, opulent surroundings, sartorial finesse, captivating portrait, high-end charm, cosmopolitan traveler, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4) Lobby elegance, confident woman, sophisticated attire, upscale hotel lobby, grand architecture, focused session, poised presence, luxurious ambiance, professional headshot, refined outfit, lobby backdrop, opulent surroundings, sartorial finesse, captivating portrait, high-end charm, cosmopolitan traveler, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },

            /* end of prompt 9 - woman */
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Corporate professionalism, confident woman, professional attire, modern office setting, sleek workspace, focused session, empowered presence, career-driven demeanor, professional headshot, polished outfit, office backdrop, dynamic environment, sartorial excellence, captivating portrait, corporate sophistication, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Corporate professionalism, confident woman, professional attire, modern office setting, sleek workspace, focused session, empowered presence, career-driven demeanor, professional headshot, polished outfit, office backdrop, dynamic environment, sartorial excellence, captivating portrait, corporate sophistication, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Corporate professionalism, confident woman, professional attire, modern office setting, sleek workspace, focused session, empowered presence, career-driven demeanor, professional headshot, polished outfit, office backdrop, dynamic environment, sartorial excellence, captivating portrait, corporate sophistication, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Corporate professionalism, confident woman, professional attire, modern office setting, sleek workspace, focused session, empowered presence, career-driven demeanor, professional headshot, polished outfit, office backdrop, dynamic environment, sartorial excellence, captivating portrait, corporate sophistication, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Corporate professionalism, confident woman, professional attire, modern office setting, sleek workspace, focused session, empowered presence, career-driven demeanor, professional headshot, polished outfit, office backdrop, dynamic environment, sartorial excellence, captivating portrait, corporate sophistication, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Corporate professionalism, confident woman, professional attire, modern office setting, sleek workspace, focused session, empowered presence, career-driven demeanor, professional headshot, polished outfit, office backdrop, dynamic environment, sartorial excellence, captivating portrait, corporate sophistication, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 10 - woman */
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Professional executive, confident woman, formal business attire, modern office setting, polished workspace, focused session, poised demeanor, career-driven presence, professional headshot, corporate outfit, office backdrop, dynamic environment, sartorial finesse, captivating portrait, corporate sophistication, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Professional executive, confident woman, formal business attire, modern office setting, polished workspace, focused session, poised demeanor, career-driven presence, professional headshot, corporate outfit, office backdrop, dynamic environment, sartorial finesse, captivating portrait, corporate sophistication, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Professional executive, confident woman, formal business attire, modern office setting, polished workspace, focused session, poised demeanor, career-driven presence, professional headshot, corporate outfit, office backdrop, dynamic environment, sartorial finesse, captivating portrait, corporate sophistication, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Professional executive, confident woman, formal business attire, modern office setting, polished workspace, focused session, poised demeanor, career-driven presence, professional headshot, corporate outfit, office backdrop, dynamic environment, sartorial finesse, captivating portrait, corporate sophistication, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Professional executive, confident woman, formal business attire, modern office setting, polished workspace, focused session, poised demeanor, career-driven presence, professional headshot, corporate outfit, office backdrop, dynamic environment, sartorial finesse, captivating portrait, corporate sophistication, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Professional executive, confident woman, formal business attire, modern office setting, polished workspace, focused session, poised demeanor, career-driven presence, professional headshot, corporate outfit, office backdrop, dynamic environment, sartorial finesse, captivating portrait, corporate sophistication, ambitious spirit, professional workspace, professional photography, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 11 - woman */
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Elegance in simplicity, confident woman, chic outfit, (white backdrop:1.4), poised presence, focused session, timeless demeanor, professional headshot, minimalist attire, clean background, refined elegance, sartorial finesse, captivating portrait, neutral charm, professional simplicity, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Elegance in simplicity, confident woman, chic outfit, (white backdrop:1.4), poised presence, focused session, timeless demeanor, professional headshot, minimalist attire, clean background, refined elegance, sartorial finesse, captivating portrait, neutral charm, professional simplicity, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Elegance in simplicity, confident woman, chic outfit, (white backdrop:1.4), poised presence, focused session, timeless demeanor, professional headshot, minimalist attire, clean background, refined elegance, sartorial finesse, captivating portrait, neutral charm, professional simplicity, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Elegance in simplicity, confident woman, chic outfit, (white backdrop:1.4), poised presence, focused session, timeless demeanor, professional headshot, minimalist attire, clean background, refined elegance, sartorial finesse, captivating portrait, neutral charm, professional simplicity, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Elegance in simplicity, confident woman, chic outfit, (white backdrop:1.4), poised presence, focused session, timeless demeanor, professional headshot, minimalist attire, clean background, refined elegance, sartorial finesse, captivating portrait, neutral charm, professional simplicity, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Elegance in simplicity, confident woman, chic outfit, (white backdrop:1.4), poised presence, focused session, timeless demeanor, professional headshot, minimalist attire, clean background, refined elegance, sartorial finesse, captivating portrait, neutral charm, professional simplicity, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 12 - woman */
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Bold contrast, confident woman, sophisticated attire, (black backdrop:1.4), empowered presence, focused session, sleek demeanor, professional headshot, monochromatic ensemble, dramatic background, refined elegance, sartorial finesse, captivating portrait, dark allure, professional boldness, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Bold contrast, confident woman, sophisticated attire, (black backdrop:1.4), empowered presence, focused session, sleek demeanor, professional headshot, monochromatic ensemble, dramatic background, refined elegance, sartorial finesse, captivating portrait, dark allure, professional boldness, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Bold contrast, confident woman, sophisticated attire, (black backdrop:1.4), empowered presence, focused session, sleek demeanor, professional headshot, monochromatic ensemble, dramatic background, refined elegance, sartorial finesse, captivating portrait, dark allure, professional boldness, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Bold contrast, confident woman, sophisticated attire, (black backdrop:1.4), empowered presence, focused session, sleek demeanor, professional headshot, monochromatic ensemble, dramatic background, refined elegance, sartorial finesse, captivating portrait, dark allure, professional boldness, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Bold contrast, confident woman, sophisticated attire, (black backdrop:1.4), empowered presence, focused session, sleek demeanor, professional headshot, monochromatic ensemble, dramatic background, refined elegance, sartorial finesse, captivating portrait, dark allure, professional boldness, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Bold contrast, confident woman, sophisticated attire, (black backdrop:1.4), empowered presence, focused session, sleek demeanor, professional headshot, monochromatic ensemble, dramatic background, refined elegance, sartorial finesse, captivating portrait, dark allure, professional boldness, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 13 - woman */
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Tranquil professionalism, confident woman, polished outfit, blue backdrop, poised presence, focused session, serene demeanor, professional headshot, harmonious attire, calming background, refined elegance, sartorial finesse, captivating portrait, soothing charm, professional tranquility, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage1,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Tranquil professionalism, confident woman, polished outfit, blue backdrop, poised presence, focused session, serene demeanor, professional headshot, harmonious attire, calming background, refined elegance, sartorial finesse, captivating portrait, soothing charm, professional tranquility, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage2,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Tranquil professionalism, confident woman, polished outfit, blue backdrop, poised presence, focused session, serene demeanor, professional headshot, harmonious attire, calming background, refined elegance, sartorial finesse, captivating portrait, soothing charm, professional tranquility, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage3,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Tranquil professionalism, confident woman, polished outfit, blue backdrop, poised presence, focused session, serene demeanor, professional headshot, harmonious attire, calming background, refined elegance, sartorial finesse, captivating portrait, soothing charm, professional tranquility, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage4,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Tranquil professionalism, confident woman, polished outfit, blue backdrop, poised presence, focused session, serene demeanor, professional headshot, harmonious attire, calming background, refined elegance, sartorial finesse, captivating portrait, soothing charm, professional tranquility, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage5,
                negativePrompt: negativePrompt3,
            },
            {
                prompt: `RAW photo, professional corporate headshot photo of (beautiful ohwx woman:1.4), good looking hair,Tranquil professionalism, confident woman, polished outfit, blue backdrop, poised presence, focused session, serene demeanor, professional headshot, harmonious attire, calming background, refined elegance, sartorial finesse, captivating portrait, soothing charm, professional tranquility, professional photography., detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
                controlnet_image: poseImage6,
                negativePrompt: negativePrompt3,
            },
            /* end of prompt 14 - woman */
        ]
    }
}

export const generateFinalPromptArray = (gender: any) => {
    return prompts(gender).map((value: any) => {
        return {
            prompt: value.prompt,
            negative_prompt: value.negativePrompt,
            controlnet_image: value.controlnet_image,
        }
    })
}
export const payload = (settings: settings[]) => {
    return settings.map((value) => {
        return {
            prompt: value.prompt,
            negative_prompt: value.negative_prompt,
            steps: 45,
            batch_size: 1,
            enable_hr: true,
            hr_scale: 2,
            hr_upscaler: '4x-UltraSharp',
            denoising_strength: 0.25,
            cfg_scale: 8,
            width: 768,
            height: 768,
            sampler_index: 'DPM++ 2M Karras',
            restore_faces: true,
            alwayson_scripts: {
                controlnet: {
                    args: [
                        {
                            enabled: true,
                            module: 'none',
                            model: 'control_v11p_sd15_openpose [cab727d4]',
                            resize_mode: 'Just Resize',
                            control_mode: 'My prompt is more important',
                            input_image: value.controlnet_image,
                        },
                    ],
                },
            },
        }
    })
}

// {
//     prompt: `professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino, detailed face of (ohwx ${gender}:1.2), black jacket, blue tie, white shirt, studio curtains,studio lighting,(plain white background:1.9), photo studio shoot, white teeth, smile, sony a7r`,
//     controlnet_image: poseImage1,
//     negativePrompt: negativePrompt2,
// },
// {
//     prompt: `professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino, detailed face of (ohwx ${gender}:1.2), black jacket, blue tie, white shirt, studio curtains,studio lighting,(plain white background:1.9), photo studio shoot, white teeth, smile, sony a7r`,
//     controlnet_image: poseImage4,
//     negativePrompt: negativePrompt2,
// },
// {
//     prompt: `professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino, detailed face of (ohwx ${gender}:1.2), white jacket, red tie, black shirt, black studio curtain background,studio lighting,(plain black background:1.9), photo studio shoot, smile, sony a7r`,
//     controlnet_image: poseImage1,
//     negativePrompt: negativePrompt2,
// },
// {
//     prompt: `professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino, detailed face of (ohwx ${gender}:1.2), white jacket, red tie, black shirt, black studio curtain background,studio lighting,(plain black background:1.9), photo studio shoot, smile, sony a7r`,
//     controlnet_image: poseImage2,
//     negativePrompt: negativePrompt2,
// },
// {
//     prompt: `professional corporate headshot photo of  ${
//         gender === 'man' ? 'handsome' : 'beautiful'
//     } (ohwx ${gender}:1.2) by mario testino, detailed face of  ${
//         gender === 'man' ? 'handsome' : 'beautiful'
//     } (ohwx ${gender}:1.2), white suit, red tie, black shirt, black studio curtain background, studio lighting, (plain black background:1.9), photo studio shoot, smile, sony a7r`,
//     controlnet_image: poseImage1,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `professional corporate headshot photo of  ${
//         gender === 'man' ? 'handsome' : 'beautiful'
//     } (ohwx ${gender} man:1.2) by mario testino, detailed face of  ${
//         gender === 'man' ? 'handsome' : 'beautiful'
//     } (ohwx ${gender} man:1.2), white suit, red tie, black shirt, black studio curtain background, studio lighting, (plain black background:1.9), photo studio shoot, smile, sony a7r`,
//     controlnet_image: poseImage2,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `professional corporate headshot photo of  ${
//         gender === 'man' ? 'handsome' : 'beautiful'
//     } (ohwx ${gender} man:1.2) by mario testino, detailed face of  ${
//         gender === 'man' ? 'handsome' : 'beautiful'
//     } (ohwx ${gender} man:1.2), white suit, red tie, black shirt, black studio curtain background, studio lighting, (plain black background:1.9), photo studio shoot, smile, sony a7r`,
//     controlnet_image: poseImage3,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `professional corporate headshot photo of  ${
//         gender === 'man' ? 'handsome' : 'beautiful'
//     } (ohwx ${gender} man:1.2) by mario testino, detailed face of  ${
//         gender === 'man' ? 'handsome' : 'beautiful'
//     } (ohwx ${gender} man:1.2), white suit, red tie, black shirt, black studio curtain background, studio lighting, (plain black background:1.9), photo studio shoot, smile, sony a7r`,
//     controlnet_image: poseImage4,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `professional corporate headshot photo of  ${
//         gender === 'man' ? 'handsome gentleman' : 'beautiful lady'
//     } (ohwx ${gender} man:1.2) by mario testino, detailed face of  ${
//         gender === 'man' ? 'handsome gentleman' : 'beautiful lady'
//     } (ohwx ${gender} man:1.2), white suit, red tie, black shirt, black studio curtain background, studio lighting, (plain black background:1.9), photo studio shoot, smile, sony a7r`,
//     controlnet_image: poseImage1,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `professional corporate headshot photo of  ${
//         gender === 'man' ? 'handsome gentleman' : 'beautiful lady'
//     } (ohwx ${gender} man:1.2) by mario testino, detailed face of  ${
//         gender === 'man' ? 'handsome gentleman' : 'beautiful lady'
//     } (ohwx ${gender} man:1.2), white suit, red tie, black shirt, black studio curtain background, studio lighting, (plain black background:1.9), photo studio shoot, smile, sony a7r`,
//     controlnet_image: poseImage2,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `professional corporate headshot photo of  ${
//         gender === 'man' ? 'handsome gentleman' : 'beautiful lady'
//     } (ohwx ${gender} man:1.2) by mario testino, detailed face of  ${
//         gender === 'man' ? 'handsome gentleman' : 'beautiful lady'
//     } (ohwx ${gender} man:1.2), white suit, red tie, black shirt, black studio curtain background, studio lighting, (plain black background:1.9), photo studio shoot, smile, sony a7r`,
//     controlnet_image: poseImage3,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `professional corporate headshot photo of  ${
//         gender === 'man' ? 'handsome gentleman' : 'beautiful lady'
//     } (ohwx ${gender} man:1.2) by mario testino, detailed face of  ${
//         gender === 'man' ? 'handsome gentleman' : 'beautiful lady'
//     } (ohwx ${gender} man:1.2), white suit, red tie, black shirt, black studio curtain background, studio lighting, (plain black background:1.9), photo studio shoot, smile, sony a7r`,
//     controlnet_image: poseImage4,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino, (person details), background : blurry (backgroubd details) , detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage1,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino, 3d, belt, blurry background, breast hold, building, city, crossed arms, denim, depth of field, fence, fishnet bodysuit, fishnets, looking at viewer, male focus, motion blur, pants, photo \(medium\), photo background, plaid shirt, shirt, smile, solo,blurry image of a building with a blue door and windows in the background and a blue door handle, Andries Stock, p, computer graphics, neoplasticism , detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage2,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino,(ohwx ${gender}:1.2) in a suit and tie smiling for a picture, professional photo, a picture, american barbizon school, background a park with a lot of trees and benches in it and a lot of leaves on the ground and trees with yellow and green leaves, Brassaï, trees, a picture, postminimalism, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage3,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino, 3d, blurry, blurry background, blurry foreground, depth of field, looking at viewer, male focus, pants, photo \(medium\), photo background, photorealistic, realistic, solo, watch, wristwatch,a room with a large window and a chair and a laptop on a desk in it and a potted plant, Andries Stock, minimalist, a minimalist painting, postminimalism, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage4,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino, in a black shirt standing on a sidewalk with his hand in his pocket and looking at the camera, Christian Hilfgott Brand, masculine, a stock photo, private press,a street with cars parked on both sides of it and a bridge in the background on a sunny day, Evgeny Lushpin, tone mapping, a matte painting, arts and crafts movement, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage1,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `AW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino, in a green shirt and hat standing in front of a white background with his hands in his pockets, Christian Hilfgott Brand, green, a picture, tonalism, background : blurry a green field with trees and grass in the background and a path through the grass to the trees on the right, Art Green, green, a picture, postminimalism, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage4,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino, in a suit and shirt standing against a wall with his hands in his pockets and his hands in his pockets, Christian Hilfgott Brand, pale colors, a digital rendering, mannerism, background : blurry a park bench sitting between two large bushes and a tree lined sidewalk in the middle of a park area, Art Green, green, a stock photo, environmental art , detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage1,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) with a (red shirt:1.2) by mario testino, looking at the camera with his hands in his pockets, Christian Hilfgott Brand, product photo, a stock photo, american barbizon school, background : blurry a white room with a white wall and a white floor with a light coming through the window and a white floor with a white wall, David Chipperfield, dim volumetric lighting, an ambient occlusion render, minimalism, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage2,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino, in a tan jacket and black turtle neck sweater standing in front of a white background with his hands in his pockets, Christian Hilfgott Brand, neutral dull colors, a character portrait, barbizon school, background : blurry a long hallway with a yellow chair and a white couch in the middle of it and a large window, Enguerrand Quarton, split lighting, a stock photo, postminimalism) , detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage3,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino, in a yellow suit posing for a picture with his hands in his pockets and his hand in his pocket, Christian Hilfgott Brand, detailed product photo, a pastel, neoclassicism, background : blurry a modern house with a pool and a lit up deck area at night time with a lit up pool, David Chipperfield, unreal render, a digital rendering, modernism, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage4,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino, street next to tall buildings in a city at night time with neon lights, David Diao, neon lighting, cyberpunk art, video art, background : blurry standing next to a pole wearing a blazer and pants with a white t - shirt on, Christian Hilfgott Brand, fashion photoshoot, a stock photo, private press , detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage1,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino, in a striped shirt is standing up and looking at the camera with a serious look on his face, Christian Hilfgott Brand, stylized, a digital rendering, postminimalism, background : blurry a long hallway with a plant wall on the side of it and a black fence on the other side, David Chipperfield, behance hd, a 3D render, environmental art , detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage2,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino,  in a suit and tie posing for a picture with his hands in his pockets and his hands in his pockets, Christian Hilfgott Brand, detailed product photo, a jigsaw puzzle, new objectivity, background : blurry a glass walled office with a wooden floor and a staircase leading up to the second floor of the building, Enguerrand Quarton, archdaily, a cubist painting, cubo-futurism , detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage3,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino, in a green jacket and tan pants is adjusting his tie and looking down at his shirt and jacket, Christian Hilfgott Brand, sharp details, a jigsaw puzzle, arts and crafts movement, background : blurry a hallway with a painting on the wall and a door way to another room with a painting on the wall, Enguerrand Quarton, exquisite detail, a digital rendering, arts and crafts movement, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage4,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino,  in a suit and tie standing in a room with a wooden floor and a wooden table with a chair, Christian Hilfgott Brand, complementing colors, a stock photo, private press, background : blurry  a city street with buildings in the background and a bench in the foreground, Anson Maddocks, summer vibrancy, a tilt shift photo, temporary art, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage1,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino, in a yellow jacket and tie standing in front of a white background with a gold medal on the wall, Christian Hilfgott Brand, yellow, a pastel, rayonism, background : blurry a city street with tall buildings and a few cars driving down it's side walk, with a traffic light on the corner, David Diao, ultra wide angle, a matte painting, american realism , detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage2,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino,in a red jacket and tan pants standing up with his hands in his pockets and his hands in his pockets, Bourgeois, red, a stock photo, maximalism, background : blurry a long hallway with a mirror and a light on the wall and a door on the other side of the hallway, David Chipperfield, rembrandt lighting, a digital rendering, light and space, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage3,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino,in a blue shirt and blue pants standing in front of a white background with a flower pattern, Christian Hilfgott Brand, masculine, a silk screen, maximalism, background : blurry a hallway with a clock and a lamp on the ceiling and a light fixture hanging from the ceiling above, Enguerrand Quarton, fantastically gaudy, a flemish Baroque, barbizon school, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage4,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino,  in a blue shirt and jeans standing in front of a white background with his hands in his pockets, Christian Hilfgott Brand, gradient light blue, a picture, tonalism, background : blurry a long hallway with green and white walls and a green door on the right side of the hallway is a white wall with a green sign on the wall, Andries Stock, green, a stock photo, barbizon school , detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage1,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino,  in a suit and tie standing in front of a fence with trees and bushes behind him, Abdullah Gërguri, sharp details, a mosaic, mannerism, background : blurry a sidewalk next to a sidewalk cafe with people sitting on chairs and walking down the sidewalk, Delaunay, ultra wide angle, a digital rendering, photorealism , detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage2,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino,in a red and blue shirt is posing for a picture with his hands on his hips and his hands on his hips, Christian Hilfgott Brand, product photo, a stock photo, new objectivity, background : blurry a street with a lot of cars parked on the side of it and a building with a mural on the side, Dr. Atl, public works mural, chalk art, harlem renaissance, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage3,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo,professional corporate headshot photo of (ohwx ${gender}:1.2) wearing black jacket and red shirt by mario testino,  (background: white plain :1.4), sony a7r , detailed skin texture, (blush:0.5), (goosebumps:0.5),8k uhd, dslr, studio lighting, high quality`,
//     controlnet_image: poseImage4,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) ,on a blacksurface, on a (plain black background:1.9),(brown jacket:1.2 ,white shirt:1.2) by mario testino, sony a7r , detailed skin texture, (blush:0.5), (goosebumps:0.5),8k uhd, dslr, studio lighting, high quality`,
//     controlnet_image: poseImage4,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) ,on a blacksurface, on a (plain black background:1.9),(white jacket:1.2,black shirt:1.2,white tie:1.2) by mario testino, sony a7r , detailed skin texture, (blush:0.5), (goosebumps:0.5),8k uhd, dslr, studio lighting, high quality`,
//     controlnet_image: poseImage1,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino,in a blue shirt leaning against wall, Christian Hilfgott Brand, promotional image, a silk screen, de stijl, background : blurry a large house with a pond in front of it and a lot of trees around it on a sunny day, Bourgeois, very beautiful, a digital rendering, arts and crafts movement, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage2,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino, in a green and blue shirt is standing with his hands in his pockets and looking at the camera, Christian Hilfgott Brand, green, a flemish Baroque, american barbizon school, background : blurry a street with tables and chairs on both sides of it and people sitting at tables on the side of the street, Bernt Tunold, city background, a stock photo, berlin secession , detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage3,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) ,on a white surface, on a (plain white background:1.9),(brown jacket:1.2 ,white shirt:1.2) by mario testino, sony a7r , detailed skin texture, (blush:0.5), (goosebumps:0.5),8k uhd, dslr, studio lighting, high quality`,
//     controlnet_image: poseImage3,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) ,on a blacksurface, on a (plain black background:1.9),(brown jacket:1.2 ,white shirt:1.2) by mario testino, sony a7r , detailed skin texture, (blush:0.5), (goosebumps:0.5),8k uhd, dslr, studio lighting, high quality`,
//     controlnet_image: poseImage4,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) ,on a blacksurface, on a (plain black background:1.9),(white jacket:1.2,black shirt:1.2,white tie:1.2) by mario testino, sony a7r , detailed skin texture, (blush:0.5), (goosebumps:0.5),8k uhd, dslr, studio lighting, high quality`,
//     controlnet_image: poseImage1,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino,in a blue shirt leaning against a wall with his finger up to his face and his hand on his hip, Christian Hilfgott Brand, promotional image, a silk screen, de stijl, background : blurry a large house with a pond in front of it and a lot of trees around it on a sunny day, Bourgeois, very beautiful, a digital rendering, arts and crafts movement, detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage2,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino, in a green and blue shirt is standing with his hands in his pockets and looking at the camera, Christian Hilfgott Brand, green, a flemish Baroque, american barbizon school, background : blurry a street with tables and chairs on both sides of it and people sitting at tables on the side of the street, Bernt Tunold, city background, a stock photo, berlin secession , detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage3,
//     negativePrompt: negativePrompt,
// },
// {
//     prompt: `RAW photo, professional corporate headshot photo of (ohwx ${gender}:1.2) by mario testino, in a green and blue shirt is standing with his hands in his pockets and looking at the camera, Christian Hilfgott Brand, green, a flemish Baroque, american barbizon school, background : blurry a street with tables and chairs on both sides of it and people sitting at tables on the side of the street, Bernt Tunold, city background, a stock photo, berlin secession , detailed skin texture, (blush:0.5), (goosebumps:0.5), subsurface scattering, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3`,
//     controlnet_image: poseImage3,
//     negativePrompt: negativePrompt,
// }
