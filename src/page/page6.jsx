import React, { useState, useRef } from "react";
import Webcam from 'react-webcam'

const Page6 = () => {

    const webRef = useRef(null)
    const showImage = () => {
        console.log(webRef.current.getScreenshot())
    }

    return (
        <>
        <p>React WebCam</p>
        <button onClick={showImage}>Capture Image</button>
        </>
    );
}

export default Page6