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
            <img src='img/check1.png' className="car" />

            <h3>셀프 부피체크는 반드시 <span className='red'>모바일 또는<br />태블릿</span> 환경으로 진행해주세요.<br /></h3>
            <br />
                ———

            <br />
            <br />

            <img src='img/volumeSample.png' style={{margin:'12px auto', width:'45%'}} />

            <h3>카메라 화면에 <span className='textImportant'>준비된 필터에 맞게 여권을<br /> 위치</span>시킨 뒤, 촬영하기 버튼을 눌러주세요.</h3>

            <br />

            <h3><span className='textImportant'>부피를 측정하고자하는 병을 세로로 세워 촬영해주세요.</span></h3> 

            {/* <img src='img/volumnSample.png' style={{margin: '12px auto', width:'90%', border:'1px solid #ddd'}} /> */}

            {/* <img src='img/volumnResult.jpg' style={{margin: '12px auto', width:'90%', border:'1px solid #ddd'}} /> */}

            <br />

            <Link to='/page8'><Button variant='outlined'>다음</Button></Link>

            <br />
        </div>
    )
}

export default Page7
