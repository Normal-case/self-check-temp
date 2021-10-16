import React, { useState, useRef } from "react";
import Webcam from 'react-webcam'

const Page6 = () => {

    const webRef = useRef(null)
    const canvasRef = useRef(null)
    const videoContraints = {
        facingMode: 'environment'
    }
    const showImage = () => {
        console.log(webRef.current.getScreenshot())
    }

    return (
        <>
        <p>React WebCam</p>
        <Webcam
         ref={webRef}
         videoConstraints={videoContraints}
        />
        <button onClick={showImage}>Capture Image</button>
        </>
    );
}

export default Page6