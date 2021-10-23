import React from "react"
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Button } from '@mui/material'

const Page7 = () => {

    return(
        <div className='pageWrap arrowWrap'>
            <Link to="/" className='BackIcon'><ArrowBackIcon fontSize='large' /></Link>
            <img src='img/exclamation_mark.png' width='48px' />
            <h2>셀프 부피측정 설명서</h2>
<br /><br />
            <img src='img/check2.png' className="car" />

            <h3>셀프 부피체크는 반드시 <span className='red'>모바일 또는<br />태블릿</span> 환경으로 진행해주세요.<br /></h3>
            <br />
                ———

            <br />
            <br />

            <h3>먼저, 부피를 측정하고 싶은 물건을 <br />여권과 함께 넓은 바닥에 놓아주세요.</h3>

            <img src='img/guide4.png' style={{margin:'12px auto', width:'90%'}} />

            <h3>카메라 화면에 준비된 필터에 맞게 여권을<br /> 위치시킨 뒤, 촬영하기 버튼을 눌러주세요.</h3>

            <br />
            <br /> 

            <img src='img/guide5.png' style={{margin: '12px auto', width:'90%', border:'1px solid #ddd'}} />
        <h3>① 다시 촬영 버튼을 클릭하면<br />화면이 다시 활성화되고, 재활영이 가능합니다.</h3> 
           <h3>② 화면이 멈추고 크기 체크 시작 버튼이<br /> 활성화되면 버튼을 눌러주세요. </h3>

            <br />
            <br />
            <img src='img/guide7.png' style={{margin: '12px auto', width:'90%', border:'1px solid #ddd'}} />
            <h3>체크가 끝나면 위 사진과 같이<br />측정 물체의 부피가 출력됩니다.</h3>

            <br />
            <br />

            <Link to='/page8'><Button variant='outlined'>다음</Button></Link>

            <br />
        </div>
    )
}

export default Page7
