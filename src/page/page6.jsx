import { StylesContext } from "@material-ui/styles";
import React, { useState, useRef, useEffect } from "react";
import Webcam from 'react-webcam'
import { isMobile } from 'react-device-detect'

const Page6 = () => {

    const [timer, setTimer] = useState(undefined)
    const webRef = useRef(null)
    const canvasRef = useRef(null)

    const videoContraints = {
        facingMode: 'environment'
    }

    useEffect(() => {
        if(isMobile){
            startOrStop()
        }
    }, [])

    const startOrStop = () => {
        if(!timer) {
            const t = setInterval(() => drawToCanvas(), 0.1)
            setTimer(t)
        } else {
            console.log(webRef.current.getScreenshot())
            clearInterval(timer)
            setTimer(undefined)
        }
    }

    const b64ToBlob = (realData, contentType='', sliceSize=512) => {
        const byteCharacters = atob(realData)
        const byteArrays = []

        for (let offset=0;offset<byteCharacters.length;offset+=sliceSize){
            const slice = byteCharacters.slice(offset, offset + sliceSize)

            const byteNumbers = new Array(slice.length)
            for(let i=0;i<slice.length;i++){
                byteNumbers[i] = slice.charCodeAt(i)
            }

            const byteArray = new Uint8Array(byteNumbers)
            byteArrays.push(byteArray)
        }

        const blob = new Blob(byteArrays, {type: contentType})
        return blob
    }

    const drawToCanvas = () => {
        try {
            const ctx = canvasRef.current.getContext('2d')
            canvasRef.current.width = webRef.current.video.videoWidth
            canvasRef.current.height = webRef.current.video.videoHeight

            if(ctx && ctx !== null) {
                if (webRef.current) {
                    ctx.drawImage(webRef.current.video, 0, 0, canvasRef.current.width, canvasRef.current.height)
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

        } catch (error) {
            console.log(error)
        }
    }

    const Styles = {
        None: {width: '0%'},
        Video: {width:'100%'},
        Button: {
            width: '100px',
            height: '30px',
            borderRadius: '4px',
            backgroundColor: '#FFA500'
        }
    }

    return (
        <>
        <p>React WebCam</p>
        <Webcam
         ref={webRef}
         videoConstraints={videoContraints}
         style={Styles.None}
        />
        <canvas ref={canvasRef} style={Styles.Video} />
        <button onClick={startOrStop} style={Styles.Button}>{timer ? '촬영하기' : '다시촬영'}</button>
        </>
    );
}

export default Page6