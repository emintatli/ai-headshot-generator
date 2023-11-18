# AI Professional Headshot generator

### Features
* Stripe Payments
* Auto photo crop , resize on client
* Photo criteria checker on client (ai)
* Controlnet positioning
* Image upscaler
* Dreambooth SD trainer
* Custom ai image generation api (python)

### Stack
* Typescript
* Python (for ai part)
* Automatic1111 API (self host)
* Nextjs (app router)
* MongoDB
* NextAuth
* Amazon S3 (to strore traning files,uploaded & generated images etc.)
* Runpod (for ai computing)
## Preview
#### Main page
![](https://i.hizliresim.com/thovdak.png)
#### Dashboard
![](https://i.hizliresim.com/bcowvv9.png)
#### Transaction History Page
![](https://i.hizliresim.com/n5ayh4e.png)
#### Results Page
![](https://i.hizliresim.com/cexe9rm.png)
#### Micro Transaction on results page 
![](https://i.hizliresim.com/gmnio3y.png)
### Photo Upload Page
![](https://i.hizliresim.com/805735k.png)
### Payment Page (Stripe)
![](https://i.hizliresim.com/anw2xuy.png)


## Demo
https://www.headshotrapid.com/

## Cronjobs
You have to change the `_vercel.json` file to `vercel.json` or need to create a cronjob for trigger `/api/update` endpoint for every 5 minutes.This is a must to do.This action will check current generation results and update them accordingly.

## Runpod configurations 
[https://runpod.io/](https://runpod.io?ref=toecyicf "https://runpod.io/")

Docker Image for AI generation: https://hub.docker.com/r/autorun12/runpod-worker-a1111-2/tags
If you dont want to use my docker image you can build your own from my repo : https://github.com/emintatli/runpod-sdapi

You have to run this docker file on runpod serverless and get the id and modify the RUNPOD_SERVERLESS_ID on env file
You can find more info about the deployment from here : https://docs.runpod.io/docs
and also they have discord channel.

###Workflow
![](https://i.hizliresim.com/7a934cb.png)

### ENV file

NEXTAUTH_SECRET= random long key
GOOGLE_CLIENT_ID= https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid
GOOGLE_CLIENT_SECRET=https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid
MONGODB_URI= your db 
NEXTAUTH_URL= https://example.com/api/auth
WEB_URL= your website url https://example.com
STRIPE_PLAN_PREMIUM= stripe product key (ex : price_1sf4t34etfiLt5WO)
STRIPE_UNLOCK_20_PLAN=stripe product key (ex : price_1sf4t34etfiLt5WO)
STRIPE_API_KEY= https://stripe.com/docs/keys
STRIPE_WEBHOOK_SECRET=https://stripe.com/docs/webhooks
AWS_ACCESS_KEY_ID=https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html
AWS_SECRET_ACCESS_KEY=https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html
AWS_REGION= your bucket region ex: us-east-1
AWS_ZIP_BUCKET_NAME= your bucket name
AWS_CKPT_BUCKET_NAME=your bucket name
RUNPOD_API_SECRET=https://docs.runpod.io/
CF_ACCOUNT_ID= no need
CF_API_TOKEN=no need
RUNPOD_SERVERLESS_ID= https://prnt.sc/1azVboQuLr2K

### Changing Prompts
You can change the prompts if you dont like them or if you want to use this app for another purpose.You can also change controlnet poses.
file located at :` /lib/prompts.ts`



