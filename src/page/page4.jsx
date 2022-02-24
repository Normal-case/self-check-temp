import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import imageCompression from 'browser-image-compression';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import API from '../api-server';
import Loader from 'react-loader-spinner';

import CupDesc from './modal/cup';
import BottleDesc from './modal/bottle';
import DriverDesc from './modal/driver';
import KnifeDesc from './modal/knife';
import LighterDesc from './modal/lighter';
import ScissorsDesc from './modal/scissors';
import SprayDesc from './modal/spray';
import FoodDesc from './modal/food';
import Modal from './modal';

// upload image component and display result component for self check
const Page4 = () => {
  const [selectedFile, setSelectedFile] = useState(); // image file that will be sent to the server
  const [imgBase64, setImgBase64] = useState(); // image file that display on the page
  const [uploaded, setUploaded] = useState(false); // uploaded => custom image uploaded, !uploaded => default image uploaded
  const [spinner, setSpinner] = useState(false); // spinner => display spinner, !spinner => hide spinner
  const [resultResponse, setResultResponse] = useState(null); // save information received from the server
  const [pageName, setPageName] = useState('uploadPage'); // pageName == uploadPage ? upload page : result page
  const [labelResult, setLabelResult] = useState(null); // save labelResult Object
  const [modalVisible, setModalVisible] = useState(false); // modal display variable
  const [modalCase, setModalCase] = useState(''); // product name

  // label change english name to korean name
  const labelNameChange = {
    cup: '컵',
    bottle: '병',
    knife: '칼',
    scissors: '가위',
    spray: '스프레이',
    lighter: '라이터',
    screwdriver: '드라이버',
    food: '음식물',
  };

  useEffect(() => {}, [spinner]);

  // resize uploaded image before sending server
  const resizeImage = async (targetImage) => {
    const options = {
      maxWidthOrHeight: 1280,
    };

    try {
      const compressedFile = await imageCompression(targetImage, options);
      setSelectedFile(compressedFile);
      handleChangeFile(compressedFile);
    } catch (error) {
      console.log(error);
    }
  };

  // preview uploaded image function
  const handleChangeFile = (compressedFile) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString());
      }
    };
    if (compressedFile) {
      reader.readAsDataURL(compressedFile);
      setUploaded(true);
    }
  };

  // send image file to server when the self-check button click
  const submitImage = () => {
    const formData = new FormData();
    formData.append('img', selectedFile);
    setSpinner(true);
    API.imageSend(formData)
      .then((resp) => getResponse(resp))
      .catch((error) => console.log(error));
  };

  // send image file to server for getting ocr information
  const ocrCheck = () => {
    const formData = new FormData();
    formData.append('img', selectedFile);
    setSpinner(true);
    API.ocrSend(formData)
      .then((resp) => getResponse(resp))
      .catch((error) => console.log(error));
  };

  // save response
  // resp => {'data': {'after_detection':'base64 img', 'label':'detected label'}}
  const getResponse = (resp) => {
    setResultResponse(resp);
    setSpinner(false);
    setPageName('resultPage');
    const label_result = [];
    for (let i = 0; i < resp['data']['label'].length; i++) {
      const labName = labelNameChange[resp['data']['label'][i]];
      if (label_result[labName] !== undefined) {
        label_result[labName] += 1;
      } else {
        label_result[labName] = 1;
      }
    }
    setLabelResult(label_result);
  };

  // open modal
  const openModal = (product) => {
    setModalVisible(true);
    setModalCase(product);
  };

  // close modal
  const closeModal = () => {
    setModalVisible(false);
  };

  // reload web page
  const retry = () => {
    window.location.reload();
  };

  // choose the right modal
  const chooseModal = () => {
    switch (modalCase) {
      case '컵':
        return <CupDesc />;
      case '병':
        return <BottleDesc />;
      case '칼':
        return <KnifeDesc />;
      case '가위':
        return <ScissorsDesc />;
      case '스프레이':
        return <SprayDesc />;
      case '라이터':
        return <LighterDesc />;
      case '드라이버':
        return <DriverDesc />;
      case '음식물':
        return <FoodDesc />;
      default:
        return;
    }
  };

  return (
    <div className="pageWrap arrowWrap">
      <Link to="/page3" className="BackIcon">
        <ArrowBackIcon fontSize="large" />
      </Link>
      {pageName === 'uploadPage' ? (
        <div>
          {!uploaded ? (
            <div className="downloadWrap">
              {' '}
              <img src="img/download.png" width="100px" />{' '}
            </div>
          ) : (
            <div className="downloadWrap downloadClearWrap">
              {' '}
              <img src={imgBase64} width="80px" />{' '}
            </div>
          )}
          <label htmlFor="input-file" id="inputFileLabel">
            사진 업로드
          </label>
          <input
            type="file"
            id="input-file"
            style={{ display: 'none' }}
            onChange={(e) => resizeImage(e.target.files[0])}
          />
          <ul className="caution_ul">
            <li>
              ➤ <b>무늬가 없는 배경</b>에서 촬영해주세요.
            </li>
            <li>
              ➤ <b>물품 전체</b>가 나오도록 촬영해주세요.
            </li>
            <li>
              ➤ <b>물품이 겹치지 않게</b> 촬영해주세요.
            </li>
          </ul>
          <button
            className="selfCheckBtn"
            disabled={!uploaded}
            onClick={submitImage}
          >
            셀프 체크 시작!
          </button>{' '}
          <br />
          <br />
          {/* <span className='adminLink' onClick={ocrCheck}>OCR 추가</span> */}
          {spinner ? (
            <div className="modal">
              <div className="spinnerModal">
                <Loader
                  type="Circles"
                  color="#00BFFF"
                  height={100}
                  width={100}
                />{' '}
                <br />
                <span className="selfCheckDelayText">
                  셀프 체크 중입니다...
                </span>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="SelfWrap">
          <h3>➤ 셀프체크 결과입니다.</h3>
          <img
            src={
              'data:image/gif;base64,' +
              resultResponse['data']['after_detection']
            }
            alt=""
          />
          <div className="TableWrap">
            {labelResult ? (
              <div>
                <h3>발견된 물품</h3>
                {Object.keys(labelResult).map((key) => (
                  <div className="TableRow">
                    <span>
                      <b>{key}</b>
                    </span>
                    <Button
                      onClick={() => {
                        openModal(key);
                      }}
                      variant="outlined"
                      style={{ border: '1px solid #333', color: '#333' }}
                    >
                      반입규정 확인
                    </Button>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <div className="ButtonWrap">
            <Button
              onClick={() => {
                retry();
              }}
              varient="outlined"
              style={{
                border: '1px solid #333',
                color: '#333',
                borderRadius: '5px',
              }}
            >
              다시하기
            </Button>
            &nbsp;&nbsp;
            <Link to="/">
              <Button
                varient="outlined"
                style={{
                  border: '1px solid #333',
                  color: '#333',
                  borderRadius: '5px',
                }}
              >
                처음으로
              </Button>
            </Link>
          </div>
        </div>
      )}

      {modalVisible && (
        <Modal
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
        >
          {chooseModal()}
        </Modal>
      )}
    </div>
  );
};

export default Page4;
