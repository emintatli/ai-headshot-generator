'use client'
import React, { useState } from 'react'
import { downloadZip } from 'client-zip'
import { v4 as uuidv4 } from 'uuid'
import DefaultButton from './DefaultButton'
const DownloadZip = ({
    uploadedFiles,
    text,
}: {
    uploadedFiles: Array<string>
    text: string
}) => {
    const [buttonLoading, setButtonLoading] = useState(false)
    const createArchive = async () => {
        setButtonLoading(true)
        let imageResponseData = []
        for (let i = 0; i < uploadedFiles.length; i++) {
            imageResponseData.push({
                name: `${uuidv4()}.png`,
                input: await fetch(uploadedFiles[i]),
            })
        }

        const blob = await downloadZip(imageResponseData).blob()
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = url
        a.click()
        setButtonLoading(false)
    }

    return (
        <DefaultButton
            onClick={createArchive}
            loading={buttonLoading}
            text={text}
        />
    )
}

export default DownloadZip
