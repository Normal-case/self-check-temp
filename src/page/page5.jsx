import React from "react"
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const Page5 = () => {

    return(
        <div className='pageWrap arrowWrap'>
            <Link to="/" className='BackIcon'><ArrowBackIcon fontSize='large' /></Link>
            <img src='img/exclamation_mark.png' width='48px' />
            <h3>셀프 크기 측정 설명 페이지</h3>

            <img src='img/sizeSettings.jpg' style={{margin:'12px auto', width:'90%', border:'1px solid #ddd'}} />

            <h3><span className='red'>셀프 크기 체크는 반드시 모바일 또는 테블릿으로 진행해주세요!</span> <br />크기를 측정하고 싶은 물건을 <br />여권과 함께 책상 또는 바닥에 준비해주세요.</h3>

            <br />
            <br />

            <img src='img/sizeTakePhoto.jgp' style={{margin:'12px auto', width:'90%', border:'1px solid #ddd'}} />

            <h3>카메라 화면에 준비된 필터에 맞게 <br />여권을 위치시키고 촬영하기 버튼을 클릭해주세요.<br />화면이 멈추고 크기 체크 시작 버튼이 활성화되면 버튼을 눌러주세요.<br />다시촬영 버튼을 클릭하면 화면이 다시 활성화되고 촬영하실 수 있습니다.</h3>

            <br />
            <br />

            <img src='img/sizeSpinner.jpg' style={{margin: '12px auto', width:'90%', border:'1px solid #ddd'}} />

            <h3>크기 체크 시작 버튼을 눌렀을 경우<br />위 사진과 같이 크기 측정이 시작됩니다.</h3>

            <br />
            <br />

            <img src='img/sizeResult.jpg' style={{margin: '12px auto', width:'90%', border:'1px solid #ddd'}} />

            <h3>체크가 끝나면 위 사진과 같이<br />측정 물체의 길이가 출력됩니다.</h3>

            <Link to='/page6'><Button variant='outlined'>다음</Button></Link>

            <br />
        </div>
    )
}

export default Page5
