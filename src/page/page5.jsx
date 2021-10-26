import React from "react"
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Button } from '@mui/material'

const Page5 = () => {

    return(
        <div className='pageWrap arrowWrap'>
            <Link to="/" className='BackIcon'><ArrowBackIcon fontSize='large' /></Link>
            <img src='img/exclamation_mark.png' width='48px' />
            <h2>셀프 크기측정 설명서</h2>
<br /><br />
            <img src='img/check2.png' className="car" />

            <h3>셀프 크기체크는 반드시 <span className='red'>모바일 또는<br />태블릿</span> 환경으로 진행해주세요.<br /></h3>
            <br />
                ———

            <br />
            <br />

            <img src='img/sizeSample.png' style={{margin:'12px auto', width:'90%'}} />

            <h3>카메라 화면에 준비된 필터에 맞게 여권을<br /> 위치시킨 뒤, 촬영하기 버튼을 눌러주세요.</h3>

            <br />
            <br />

            <h3>길이를 측정하고자하는 물건을 가로<br />또는 세로로 두고 촬영해주세요.</h3>

            {/* <img src='img/sizeSample.png' style={{margin: '12px auto', width:'90%', border:'1px solid #ddd'}} /> */}
            {/* <img src='img/sizeResult.jpg' style={{margin: '12px auto', width:'90%', border:'1px solid #ddd'}} /> */}
            <Link to='/page6'><Button variant='outlined'>다음</Button></Link>

            <br />
        </div>
    )
}

export default Page5