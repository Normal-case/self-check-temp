import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imageCompression from 'browser-image-compression';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import API from '../api-server'
import Loader from "react-loader-spinner"

import CupDesc from './modal/cup'
import BottleDesc from './modal/bottle'
import DriverDesc from './modal/driver'
import KnifeDesc from './modal/knife'
import LighterDesc from './modal/lighter'
import ScissorsDesc from './modal/scissors'
import SprayDesc from './modal/spray'
import Modal from './modal'


const Page4 = () => {

  const [selectedFile, setSelectedFile] = useState()
  const [imgBase64, setImgBase64] = useState('img/download.png')
  const [thumbnail, setThumbnail] = useState(null)
  const [uploaded, setUploaded] = useState(false)
  const [spinner, setSpinner] = useState(false)
  const [resultResponse, setResultResponse] = useState(null)
  const [pageName, setPageName] = useState('uploadPage')
  const [labelResult, setLabelResult] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [modalCase, setModalCase] = useState('')
  const labelNameChange = {
    'cup': '컵',
    'bottle': '병',
    'knife': '칼',
    'scissors': '가위',
    'spray': '스프레이',
    'lighter': '라이터',
    'driver': '드라이버'
  }

  useEffect(() => {}, [spinner])


  // 사용자가 업로드한 이미지를 축소하는 함수
  const resizeImage = async (targetImage) => {
    const options = {
      maxWidthOrHeight: 1280
    }

    try {
      const compressedFile = await imageCompression(targetImage, options);
      setSelectedFile(compressedFile)
      handleChangeFile(compressedFile)
    }
    catch (error) {
      console.log(error)
    }
  }

  // 사용자가 업로드한 이미지를 thumbnail로 만들어 미리보기 이미지를 만드는 함수
  const handleChangeFile = (compressedFile) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      if(base64) {
        setImgBase64(base64.toString());
      }
    }
    if (compressedFile) {
      reader.readAsDataURL(compressedFile);
      setThumbnail(compressedFile)
      setUploaded(true)
    }
  }


  // 셀프체크 버튼을 눌렀을 때 서버로 압축된 파일을 전송하는 함수
  const submitImage = () => {
    const formData = new FormData()
    formData.append('img', selectedFile)
    setSpinner(true)
    API.imageSend(formData)
      .then(resp => getResponse(resp))
      .catch(error => console.log(error))
  }

  const getResponse = (resp) => {
    setResultResponse(resp)
    setSpinner(false)
    setPageName('resultPage')
    const label_result = []
    for(let i=0;i<resp['data']['label'].length;i++){
      const labName = labelNameChange[resp['data']['label'][i]]
      if(label_result[labName] !== undefined){
        label_result[labName] += 1
      } else {
        label_result[labName] = 1
      }
    }
    setLabelResult(label_result)
  }

  const openModal = product => {
    setModalVisible(true)
    setModalCase(product)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const chooseModal = () => {
    switch(modalCase) {
      case '컵':
        return <CupDesc />
      case '병':
        return <BottleDesc />
      case '칼':
        return <KnifeDesc />
      case '가위':
        return <ScissorsDesc />
      case '스프레이':
        return <SprayDesc />
      case '라이터':
        return <LighterDesc />
      case '드라이버':
        return <DriverDesc />
      default:
        return
    }
  }

  return (
    <div className='pageWrap arrowWrap'>
      <Link to="/page3" className="BackIcon"><ArrowBackIcon fontSize="large" /></Link>
      { pageName === 'uploadPage' ? 
        <div>
          {/* { !uploaded ? <h3>사진을 업로드해주세요.</h3> : <h3>사진이 업로드 되었습니다!</h3> } */}

          { !uploaded ? <div className="downloadWrap"> <img src='img/download.png' width="100px" /> </div> : <div className="downloadWrap downloadClearWrap"> <img src={imgBase64} width="80px" /> </div>  }
          <label htmlFor='input-file' id='inputFileLabel'>사진 업로드</label>
          <input type='file' id='input-file' style={{display:'none'}} onChange={(e) => resizeImage(e.target.files[0])} />

          <ul className="caution_ul">
            <li><img src="img/check.png" width="24px" className="photoCheck" /> <b>무늬가 없는 배경</b>에서 촬영해주세요.</li>
            <li><img src="img/check.png" width="24px" className="photoCheck" /> <b>물품 전체</b>가 나오도록 촬영해주세요.</li>
            <li><img src="img/check.png" width="24px" className="photoCheck" /> <b>물품이 겹치지 않게</b> 촬영해주세요.</li>
          </ul>

          <button className="selfCheckBtn" disabled={!uploaded} onClick={submitImage}>셀프 체크 시작!</button>
          { spinner ? <div className='modal'>
            <div className='spinnerModal'>
              <Loader type="Circles" color="#00BFFF" height={100} width={100} /> <br />
              <span className="selfCheckDelayText">셀프 체크 중입니다...</span>
            </div>
          </div> : null}
        </div>
         : <div>
            <h3>셀프체크 결과입니다.</h3>
            <img src={'data:image/gif;base64,' + resultResponse['data']['after_detection']} alt='' className='resultImg' />
            <div>
              {labelResult ? Object.keys(labelResult).map((key) => (<div className='resultBtn' onClick={() => {openModal(key)}}><b>{key}</b>이(가) <b>{labelResult[key]}개</b> 발견되었습니다.</div>)) : null}
            </div>
           </div>
      }

      {
        modalVisible && <Modal
        visible={modalVisible}
        closable={true}
        maskClosable={true}
        onClose={closeModal}>
          { chooseModal() }
        </Modal>
      }
    </div>
  );
};

export default Page4;