import React, { useState, useEffect, useRef} from "react"
import API from '../api-server'
import { isMobile } from 'react-device-detect'
import imageCompression from "browser-image-compression"

const Page5 = () => {

    const [timer, setTimer] = useState(undefined)
    const [savepoint, setSavepoint] = useState('notNow')
    const [resultFile, setResultFile] = useState(null)
    const videoRef = useRef(null)
    const canvasRef = useRef(null)
    const mounted = useRef(false)

    useEffect(() => {
        if(isMobile){
            getWebcam((stream => {
                videoRef.current.srcObject = stream
            }))
            
            startOrStop()
        }
        
    }, [])

    const getWebcam = (callback) => {
        try {
            const constraints = {
                'video': {facingMode: 'environment'},
                'audio': false
            }
            navigator.mediaDevices.getUserMedia(constraints)
                .then(callback)
        } catch (error) {
            console.log(error)
            return undefined
        }
    }

    const startOrStop = () => {
        if(!timer) {
            const t = setInterval(() => drawToCanvas(), 0.1)
            setTimer(t)
        } else {
            clearInterval(timer)
            setTimer(undefined)
        }
    }

    const stopVideo = () => {
        startOrStop()
        if(savepoint==='now') {
            setSavepoint('notNow')
        } else {
            setSavepoint('now')
        }
    }

    const submitSizeAssume = () => {
        const formData = new FormData()
        formData.append("base64_img", resultFile)
        API.sizeSend(formData)
            .then(resp => console.log(resp))
            .catch(error => console.log(error))
    }

    const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
        const byteCharacters = atob(b64Data)
        const byteArrays = []

        for (let offset=0;offset<byteCharacters.length;offset+=sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize)

            const byteNumbers = new Array(slice.length)
            for(let i=0;i<slice.length;i++) {
                byteNumbers[i] = slice.charCodeAt(i)
            }

            const byteArray = new Uint8Array(byteNumbers)
            byteArrays.push(byteArray)
        }

        const blob = new Blob(byteArrays, {type: contentType})
        return blob
    }

    const resizeImage = async (targetImage) => {
        console.log(targetImage)
        var block = targetImage.split(';')
        var cType = block[0].split(':')[1]
        var realData = block[1].split(',')[1]
        var blob = b64toBlob(realData, cType)
        const options = {
            maxWidthOrHeight: 1280
        }

        try {
            const compressedFile = await imageCompression(blob, options)
            setResultFile(compressedFile)
        }
        catch (error) { console.log(error) }
    }

    const drawToCanvas = () => {
        try {
            const ctx = canvasRef.current.getContext('2d')
            canvasRef.current.width = videoRef.current.videoWidth
            canvasRef.current.height = videoRef.current.videoHeight

            if(ctx && ctx !== null) {
                if (videoRef.current) {
                    ctx.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height)
                }

                const half = parseInt(canvasRef.current.height / 2)
                const blockSize = 7

                ctx.fillStyle = "white"
                ctx.fillRect((25 - blockSize), half - (62 + blockSize), blockSize, 2 * blockSize)
                ctx.fillRect(25, half - (62 + blockSize), blockSize, blockSize)
                
                ctx.fillRect((113 - blockSize), half - (62 + blockSize), 2 * blockSize, blockSize)
                ctx.fillRect(113, half - 62, blockSize, blockSize)
        
                ctx.fillRect((113 - blockSize), half + 62, 2 * blockSize, blockSize)
                ctx.fillRect(113, half + (62 - blockSize), blockSize, blockSize)
        
                ctx.fillRect((25 - blockSize), half + (62 - blockSize), blockSize, 2 * blockSize)
                ctx.fillRect(25, half + 62, blockSize, blockSize)
            }

            if(savepoint === 'now'){
                resizeImage(ctx.canvas.toDataURL("image/png"))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const Styles = {
        Video: {width:"100%"},
        Canvas: {width:"100%"},
        None: {display: 'none'},
        Button: {
          width: '100px',
          height: '30px',
          borderRadius: '4px',
          backgroundColor: '#FFA500'
        }
    }

    return(
        <>
            { isMobile ?
            <div>
                <h3>셀프 크기 측정</h3>
                <video ref={videoRef} autoPlay style={Styles.None} />
                <canvas ref={canvasRef} autoPlay style={Styles.Canvas} />
                <button style={Styles.Button} onClick={stopVideo}>{savepoint === "notNow" ? '촬영하기' : '다시촬영'}</button>
                <button className="sizeCheckBtn" onClick={submitSizeAssume} disabled={savepoint === "notNow"}>크기 체크 시작</button>
            </div>
            : <div><h3>PC 환경이다.</h3></div>
            }
        </>
    )
}

export default Page5
