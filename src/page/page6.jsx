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

    const b64ToBlob = (realData, cType) => {

    }

    const drawToCanvas = () => {
        try {
            const ctx = canvasRef.current.getContext('2d')
            canvasRef.current.width = webRef.current.video.videoWidth
            canvasRef.current.height = webRef.current.video.videoHeight

            if(ctx && ctx !== null) {
                if (webRef.current) {
                    const img = webRef.current.getScreenshot()
                    var block = img.split(';')
                    var cType = block[0].split(':')[1]
                    var realData = block[1].split(',')[1]
                    var blob = b64ToBlob(realData, cType)
                    ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height)
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
        None: {display: 'none'},
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
         style={Styles.Video}
        />
        <canvas ref={canvasRef} style={Styles.Video} />
        <button onClick={startOrStop} style={Styles.Button}>{timer ? '촬영하기' : '다시촬영'}</button>
        </>
    );
}

export default Page6