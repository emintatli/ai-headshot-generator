'use client'
import React, { useEffect, useRef, useState } from 'react'
import smartcrop from 'smartcrop'
import { Tooltip } from 'react-tooltip'
import 'react-toastify/dist/ReactToastify.css'
import * as faceapi from 'face-api.js'
import DefaultButton from '../buttons/DefaultButton'
import { downloadZip } from 'client-zip'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
type Props = {}

const Upload = (props: Props) => {
    const router = useRouter()
    const [name, setName] = useState<string>('')
    const [uploadedFiles, setUploaded] = useState<
        Array<{
            accepted: boolean
            declineReason: string
            image: string
            uploading: boolean
        }>
    >([])
    const [loadingModels, setLoadingModels] = useState<boolean>(true)
    const [uploading, setUploading] = useState<boolean>(false)
    const [buttonLoading, setButtonLoading] = useState<boolean>(false)
    const [gender, setGender] = useState<string>('')
    useEffect(() => {
        faceapi.loadTinyFaceDetectorModel('/models').then(() => {
            setLoadingModels(false)
        })
    }, [])

    const handleImages = async (image: string) => {
        setUploading(true)
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d') as any
        const _img = new Image()
        _img.src = image
        _img.onload = () => {
            let accepted = true
            let declineReason = ''
            if (_img.width < 768 || _img.height < 768) {
                accepted = false
                declineReason = 'Image is too small'
            }

            smartcrop
                .crop(_img, { width: 768, height: 768 })
                .then(async function (result) {
                    //console.log(result)
                    const detections = await faceapi.detectAllFaces(
                        _img,
                        new faceapi.TinyFaceDetectorOptions()
                    )
                    //console.log(detections)
                    if (detections.length > 1) {
                        accepted = false
                        declineReason = 'More than one face detected'
                    } else if (detections.length === 0) {
                        console.log(detections)
                        accepted = false
                        declineReason = 'No face detected'
                    } else if (
                        detections[0].imageWidth / detections[0].box.width >
                        5
                    ) {
                        accepted = false
                        declineReason = 'Face is too small'
                    }

                    canvas.width = 768
                    canvas.height = 768

                    ctx.drawImage(
                        _img,
                        result.topCrop.x,
                        result.topCrop.y,
                        result.topCrop.width,
                        result.topCrop.height,
                        0,
                        0,
                        768,
                        768
                    )
                    const croppedDetections = await faceapi.detectAllFaces(
                        canvas,
                        new faceapi.TinyFaceDetectorOptions()
                    )
                    //console.log(croppedDetections)
                    if (croppedDetections.length > 1) {
                        accepted = false
                        declineReason = 'More than one face detected'
                    } else if (croppedDetections.length === 0) {
                        console.log(croppedDetections)
                        accepted = false
                        declineReason = 'No face detected'
                    } else if (
                        croppedDetections[0].imageWidth /
                            croppedDetections[0].box.width >
                        5
                    ) {
                        accepted = false
                        declineReason = 'Face is too small'
                    }

                    const croppedImageData = canvas.toDataURL()
                    setUploaded((prev) => [
                        ...prev,
                        {
                            image: croppedImageData,
                            accepted,
                            declineReason,
                            uploading,
                        },
                    ])
                    setUploading(false)
                })
        }
    }
    if (loadingModels || uploading) {
        return (
            <div className="flex items-center justify-center">
                <img src="/images/Rollin.svg" width={100} height={100} />
            </div>
        )
    }
    const calcTotal = () => {
        return uploadedFiles.filter((value) => value.accepted).length
    }

    const createArchive = async () => {
        if (!gender) {
            toast.error('Please select a gender')
            setButtonLoading(false)
            return
        }
        if (!name) {
            toast.error('Please enter a name')
            setButtonLoading(false)
            return
        }
        setButtonLoading(true)
        let imageResponseData = []
        for (let i = 0; i < uploadedFiles.length; i++) {
            if (uploadedFiles[i].accepted) {
                imageResponseData.push({
                    name: `${uuidv4()}.png`,
                    input: await fetch(uploadedFiles[i].image),
                })
            }
        }

        const blob = await downloadZip(imageResponseData).blob()
        await uploadZip(blob)
    }

    const uploadZip = async (blob: Blob) => {
        const data = await (await fetch('/api/upload')).json()
        if (!data.url) {
            toast.error('Something went wrong, please try again.')
            return
        }
        const _data = await fetch(data.url, {
            method: 'PUT',
            body: blob,
            headers: {
                'Content-Type': blob.type,
            },
        })
        if (_data.ok) {
            if (!gender) {
                toast.error('Please select a gender.')
                setButtonLoading(false)
                return
            }
            await fetch('/api/upload/complete', {
                method: 'POST',
                body: JSON.stringify({
                    filename: data.filename,
                    gender: gender,
                    name: name,
                }),
            })
            router.push('/dashboard/board')
        } else {
            toast.error('Something went wrong, please try again.')
            setButtonLoading(false)
        }
    }

    const tooltip = () => {
        if (calcTotal() < 15) {
            return 'You need to upload atleast 15 accepted images to continue.'
        } else if (buttonLoading) {
            return 'Processing...'
        } else if (calcTotal() >= 25) {
            return 'You can only upload upto 24 images.'
        } else {
            return 'Click to start'
        }
    }

    return (
        <>
            <ToastContainer />
            <Tooltip id="my-tooltip" className="z-50" />
            <div className="flex items-center flex-col justify-center w-full">
                <>
                    {calcTotal() > 0 ? (
                        <div
                            className="w-full"
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content={tooltip()}
                        >
                            <DefaultButton
                                onClick={createArchive}
                                style={
                                    calcTotal() >= 15 &&
                                    calcTotal() < 25 &&
                                    !buttonLoading
                                        ? 'primary'
                                        : 'disabled'
                                }
                                loading={buttonLoading}
                                className="w-full"
                                text={`${
                                    buttonLoading ? 'Processing...' : 'Start'
                                }`}
                            />
                        </div>
                    ) : null}

                    {
                        <div className="my-3 flex flex-col sm:flex-row gap-3 justify-between w-full items-center">
                            <div className="w-1/2">
                                <div className="mb-2 text-sm">
                                    Who&apos;s photos are you uploading?
                                </div>
                                <div className="flex gap-3 w-full">
                                    <DefaultButton
                                        style={
                                            gender === 'man'
                                                ? 'primary'
                                                : 'secondary'
                                        }
                                        onClick={() => {
                                            setGender('man')
                                        }}
                                        className="w-full"
                                        text="Male"
                                    />
                                    <DefaultButton
                                        style={
                                            gender === 'woman'
                                                ? 'primary'
                                                : 'secondary'
                                        }
                                        onClick={() => {
                                            setGender('woman')
                                        }}
                                        className="w-full"
                                        text="Female"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col w-1/2">
                                <div className="mb-2 text-sm">Name:</div>
                                <input
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }}
                                    defaultValue={name}
                                    className="border border-slate-400 rounded-md pl-1"
                                />
                            </div>
                        </div>
                    }

                    {uploadedFiles.length > 0 ? (
                        <>
                            <h3 className="font-semibold text-sm">
                                Accepted Images{' '}
                                <span
                                    className={
                                        calcTotal() >= 15 && calcTotal() < 25
                                            ? 'text-green-500'
                                            : 'text-red-500'
                                    }
                                >
                                    {calcTotal()}
                                </span>
                                /15
                            </h3>
                            {calcTotal() >= 25 ? (
                                <div className='text-xs text-red-500'> You can only upload up to 24 images.You can use Clear button button below to retry.</div>
                            ) : null}
                            <div className="flex flex-wrap justify-center px-6 pt-5 pb-6 bg-emerald-100 w-full rounded">
                                {uploadedFiles.map((image, index) => (
                                    <div key={index}>
                                        {image.accepted ? (
                                            <>
                                                <div
                                                    key={index}
                                                    className="relative w-12 h-12 m-2 border rounded-lg relative"
                                                >
                                                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-emerald-100 z-20 bg-opacity-50 flex items-center justify-center">
                                                        <img
                                                            src="/images/correct.png"
                                                            width={16}
                                                            height={16}
                                                        />
                                                    </div>

                                                    <img
                                                        src={image.image}
                                                        className="absolute object-cover w-full h-full z-10 rounded-md"
                                                    />
                                                </div>
                                            </>
                                        ) : null}
                                    </div>
                                ))}
                                {uploadedFiles.length > 0 ? (
                                    <>
                                        <label
                                            htmlFor="dropzone-file"
                                            className="flex items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 p-3 relative w-12 h-12 m-2 border rounded-lg relative"
                                        >
                                            <img
                                                src="/images/plus.png"
                                                width={24}
                                                height={24}
                                            />
                                            <input
                                                id="dropzone-file"
                                                type="file"
                                                disabled={buttonLoading}
                                                accept="image/png,image/jpg, image/jpeg"
                                                className="hidden"
                                                multiple
                                                onChange={(e) => {
                                                    if (e.target.files) {
                                                        Object.values(
                                                            e.target.files
                                                        ).map((image: File) => {
                                                            const _img =
                                                                URL.createObjectURL(
                                                                    image
                                                                )
                                                            handleImages(_img)
                                                            return _img
                                                        })
                                                    }
                                                }}
                                            />
                                        </label>
                                    </>
                                ) : null}
                            </div>
                            <h3 className="font-semibold text-sm mt-3">
                                Rejected{' '}
                                <span className="font-normal text-sm">
                                    (Images that do not meet the requirements)
                                </span>
                            </h3>
                            <div className="flex flex-wrap justify-center px-6 pt-5 pb-6 bg-rose-100 w-full mb-3 rounded">
                                {uploadedFiles.map((image, index) => (
                                    <div key={index}>
                                        {!image.accepted ? (
                                            <>
                                                <div
                                                    data-tooltip-id="my-tooltip"
                                                    data-tooltip-content={
                                                        image.declineReason
                                                    }
                                                    key={index}
                                                    className="relative w-12 h-12 m-2 border rounded-lg relative"
                                                >
                                                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-rose-100 z-20 bg-opacity-50 flex items-center justify-center">
                                                        <img
                                                            src="/images/close.png"
                                                            width={16}
                                                            height={16}
                                                        />
                                                    </div>

                                                    <img
                                                        src={image.image}
                                                        className="absolute object-cover w-full h-full z-10 rounded-md"
                                                    />
                                                </div>
                                            </>
                                        ) : null}
                                    </div>
                                ))}
                            </div>
                            <div className="w-full">
                                <p className="text-xs text-right italic">
                                    *Rejected images will
                                    <span className="font-semibold"> not </span>
                                    be used.
                                </p>
                            </div>
                        </>
                    ) : null}
                </>
                {uploadedFiles.length === 0 ? (
                    <>
                        <label
                            htmlFor="dropzone-file"
                            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 p-3"
                        >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">
                                        Click to upload
                                    </span>
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    Select 15-24 images in PNG, JPG (MIN.
                                    768x768px)
                                </p>
                            </div>

                            <input
                                id="dropzone-file"
                                type="file"
                                accept="image/png,image/jpg, image/jpeg"
                                className="hidden"
                                multiple
                                onChange={(e) => {
                                    if (e.target.files) {
                                        Object.values(e.target.files).map(
                                            (image: File) => {
                                                const _img =
                                                    URL.createObjectURL(image)
                                                handleImages(_img)
                                                return _img
                                            }
                                        )
                                    }
                                }}
                            />
                        </label>
                    </>
                ) : null}
                <DefaultButton
                    onClick={() => {
                        location.reload()
                    }}
                    style='error'
                    text="Clear"
                    className="w-full mt-3"
                    icon={
                        <FontAwesomeIcon
                            icon={faTrash}
                            style={{ color: '#ffffff' }}
                        />
                    }
                />
            </div>
        </>
    )
}

export default Upload
