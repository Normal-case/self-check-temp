import React, { useState, useRef, useEffect } from "react";
import API from '../api-server'
import Webcam from 'react-webcam'
import { isMobile } from 'react-device-detect'
import imageCompression from "browser-image-compression"
import Loader from "react-loader-spinner"

const Page6 = () => {

    const [timer, setTimer] = useState(undefined)
    const [resultImg, setResultImg] = useState(null)
    const [spinner, setSpinner] = useState(false)
    const [pageName, setPageName] = useState('uploadPage')
    const [resultResponse, setResultResponse] = useState(null)
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
            resizeImage(canvasRef.current.toDataURL())
            clearInterval(timer)
            setTimer(undefined)
        }
    }

    const b64ToFile = (realData, contentType='', sliceSize=512) => {
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

        const file = new File(byteArrays, 'send.png', {type: contentType})
        return file
    }

    const submitSizeAssume = () => {
        const formData = new FormData()
        formData.append('screen_img', resultImg)
        setSpinner(true)
        API.sizeSend(formData)
            .then(resp => getResponse(resp))
            .catch(error => console.log(error))
    }

    const getResponse = (resp) => {
        setResultResponse(resp)
        console.log(resp)
        setSpinner(false)
        setPageName('resultPage')
    }

    const resizeImage = async (targetImage) => {
        var block = targetImage.split(';')
        var cType = block[0].split(':')[1]
        var realData = block[1].split(',')[1]
        var blob = b64ToFile(realData, cType)
        const options = {
            maxWidthOrHeight: 1280
        }

        try {
            const compressedFile = await imageCompression(blob, options)
            setResultImg(compressedFile)
        } catch (error) {
            console.log(error)
        }
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
        None: {display: 'none'},
        Hide: {width: '0%'},
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
        { isMobile ?
        <>
            { pageName === 'uploadPage' ?
                <div>
                    { spinner ? 
                        <div className='modal'>
                            <div className='spinnerModal'>
                                <Loader type="Circles" color="#00BFFF" height={100} width={100} /><br />
                                <span className="selfCheckDelayText">셀프 체크 중입니다...</span>
                            </div>
                        </div> : null
                    }
                    <h3>셀프 크기 측정</h3>
                    <Webcam ref={webRef} videoConstraints={videoContraints} style={Styles.Hide} />
                    <canvas ref={canvasRef} style={Styles.Video} />
                    <button onClick={startOrStop} style={Styles.Button}>{timer ? '촬영하기' : '다시촬영'}</button>
                    <button className="sizeCheckBtn" onClick={submitSizeAssume} disabled={timer}>크기 체크 시작</button>
                </div>
            :  <img src={'data:image/gif;base64,' + resultResponse['data']['after_detection']} alt='' className='resultImg' />
            }
        </>
        : <div><h3>PC는 기능을 지원하지 않습니다.</h3></div>
        }

        </>
    );
}

export default Page6