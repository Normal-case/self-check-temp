import React, { useState, useRef, useEffect } from "react";
import API from '../api-server'
import Webcam from 'react-webcam'
import { isMobile } from 'react-device-detect'
import imageCompression from "browser-image-compression"
import Loader from "react-loader-spinner"
import { Link } from "react-router-dom";
import { Button } from '@mui/material';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const Page6 = () => {

    const [timer, setTimer] = useState(undefined)
    const [resultImg, setResultImg] = useState(null)
    const [spinner, setSpinner] = useState(false)
    const [pageName, setPageName] = useState('uploadPage')
    const [resultResponse, setResultResponse] = useState(null)
    const [scissors, setScissors] = useState(null)
    const [driver, setDriver] = useState(null)
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

        setScissors(resp['data']['scissors'].reduce(function(a, b) {return a + b;}, 0))
        setDriver(resp['data']['driver'].reduce(function(a, b) {return a + b;}, 0))
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

    const retry = () => {
        window.location.reload()
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

                const blockSize = 7
                // Rect => (x, y, w, h)
                const x = canvasRef.current.width * 0.1
                const y = canvasRef.current.height * 0.4
                const w = canvasRef.current.height * 0.2 * 88 / 125
                const h = canvasRef.current.height * 0.2

                ctx.fillStyle = "white"

                ctx.fillRect((x - blockSize), (y - blockSize), blockSize, 2 * blockSize)
                ctx.fillRect(x, (y - blockSize), blockSize, blockSize)
                
                ctx.fillRect((x + w - blockSize), (y - blockSize), 2 * blockSize, blockSize)
                ctx.fillRect((x + w), y, blockSize, blockSize)
        
                ctx.fillRect((x + w - blockSize), (y + h), 2 * blockSize, blockSize)
                ctx.fillRect((x + w), (y + h - blockSize), blockSize, blockSize)
        
                ctx.fillRect((x - blockSize), (y + h - blockSize), blockSize, 2 * blockSize)
                ctx.fillRect(x, (y + h), blockSize, blockSize)
            }

        } catch (error) {
            console.log(error)
        }
    }

    const Styles = {
        None: {display: 'none'},
        Hide: {width: '0%'},
        Video: {width:'100%', margin:'0', padding:'0'},
    }

    return (
        <>
        { isMobile ?
        <>
            { pageName === 'uploadPage' ?
            <div className='sizeCameraWrap'>
                <div className='selfwrap'>
                    { spinner ? 
                        <div className='modal'>
                            <div className='spinnerModal'>
                                <Loader type="Circles" color="#00BFFF" height={100} width={100} /><br />
                                <span className="selfCheckDelayText">셀프 체크 중입니다...</span>
                            </div>
                        </div> : null
                    }
                    <div className="selfHeaderWrap">
                    <Box sx={{ flexGrow: 1 }} className="selfHeader">
                    <AppBar position="static" style={{backgroundColor:"#fff", color:"#333", padding:"8px"}}>
                        <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        셀프 크기 측정
                        </Typography>
                        <Button color="inherit" variant="outlined" onClick={() => startOrStop()}> <CameraAltIcon /> &nbsp;{timer ? '촬영하기':'다시촬영'}</Button>
                        </Toolbar>
                    </AppBar>
                    </Box>
                    <div className='canvasDisplay'>
                        <Webcam ref={webRef} videoConstraints={videoContraints} style={Styles.Hide} />
                        <canvas ref={canvasRef} style={Styles.Video} />
                    </div>
                    <p> <Button color="inherit" variant="outlined" onClick={() => submitSizeAssume()} className="sizeCheckBtn" disabled={timer}>크기 체크 시작</Button></p>
</div>
                </div></div> :
                <div style={{textAlign:'center'}}>
                    <h3>크기 측정 결과</h3>
                    <img src={'data:image/png;base64,' + resultResponse['data']['after_detection']} alt='' className='resultImg' style={{width:'90%'}} />
                    { 
                        // 아무것도 발견하지 못했을 경우
                        driver === 0 && scissors === 0 
                        ? <div>
                            물체가 인식되지 않았습니다. 다시 시도해주세요
                            <div className='ButtonWrap'>
                                <Button onClick={() => {retry()}} varient='outlined' style={{border:'1px solid #333', color:'#333', borderRadius:'5px'}}>다시하기</Button>&nbsp;&nbsp;<Link to='/'><Button varient='outlined' style={{border:'1px solid #333', color:'#333', borderRadius:'5px'}}>처음으로</Button></Link>
                            </div>                            
                          </div> :
                        
                        // 가위만 발견되었을 경우
                        driver === 0 && scissors !== 0 
                        ? <div>
                            측정된 가위
                            <table>
                                <thead>
                                    <tr>
                                        <th>기내반입 가능</th>
                                        <th>기내반입 불가</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{resultResponse['data']['scissors'][0]}개</td>
                                        <td>{resultResponse['data']['scissors'][1]}개</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='ButtonWrap'>
                                <Button onClick={() => {retry()}} varient='outlined' style={{border:'1px solid #333', color:'#333', borderRadius:'5px'}}>다시하기</Button>&nbsp;&nbsp;<Link to='/'><Button varient='outlined' style={{border:'1px solid #333', color:'#333', borderRadius:'5px'}}>처음으로</Button></Link>
                            </div>                            
                          </div> :

                        // 드라이버만 발견되었을 경우
                        driver !== 0 && scissors === 0 
                        ? <div>
                            측정된 드라이버
                            <table>
                                <thead>
                                    <tr>
                                        <th>기내반입 가능</th>
                                        <th>기내반입 불가</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{resultResponse['data']['driver'][0]}개</td>
                                        <td>{resultResponse['data']['driver'][1]}개</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='ButtonWrap'>
                                <Button onClick={() => {retry()}} varient='outlined' style={{border:'1px solid #333', color:'#333', borderRadius:'5px'}}>다시하기</Button>&nbsp;&nbsp;<Link to='/'><Button varient='outlined' style={{border:'1px solid #333', color:'#333', borderRadius:'5px'}}>처음으로</Button></Link>
                            </div>                            
                          </div> :

                        // 드라이버와 가위 둘다 발견되었을 경우
                        driver !== 0 && scissors !== 0 
                        ? <div>
                            측정된 가위
                            <table>
                                <thead>
                                    <tr>
                                        <th>기내반입 가능</th>
                                        <th>기내반입 불가</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{resultResponse['data']['scissors'][0]}개</td>
                                        <td>{resultResponse['data']['scissors'][1]}개</td>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                            <br />
                            측정된 드라이버
                            <table>
                                <thead>
                                    <tr>
                                        <th>기내반입 가능</th>
                                        <th>기내반입 불가</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{resultResponse['data']['driver'][0]}개</td>
                                        <td>{resultResponse['data']['driver'][1]}개</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='ButtonWrap'>
                                <Button onClick={() => {retry()}} varient='outlined' style={{border:'1px solid #333', color:'#333', borderRadius:'5px'}}>다시하기</Button>&nbsp;&nbsp;<Link to='/'><Button varient='outlined' style={{border:'1px solid #333', color:'#333', borderRadius:'5px'}}>처음으로</Button></Link>
                            </div>                            
                          </div> : null
                    }
                </div>
            }
        </>
        : <div><h3>PC는 기능을 지원하지 않습니다.</h3></div>
        }

        </>
    );
}

export default Page6