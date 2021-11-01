import React from "react"
import { Link } from "react-router-dom"
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Button, Modal } from '@mui/material'

// description self detection check component
const page2 = () => {
  return (
    <div className="pageWrap arrowWrap">
      <Link to="/" className="BackIcon"><ArrowBackIcon fontSize="large" /></Link>
      <img src="img/exclamation_mark.png" width="48px" />
      <h2>셀프 체크 설명서</h2>

      <img src="img/beforeUpload.png" style={{margin:'12px auto', width:"60%", border:'1px solid #ddd'}} />

      <ul>
        <li> ➤ 항공기 반입 여부를 확인하고 싶은 물건을<br />책상 또는 바닥에 나열해주세요.</li><br />
        <li> ➤ 사진을 찍은 후 셀프 체크 화면에 사진을 업로드 해주세요.</li>
      </ul>

      <h3>사진을 찍은 후, <br /> 셀프 체크 화면에 사진을 업로드 해주세요.<br /> 
      셀프 체크 시작버튼이 활성화 되면 <br /> 해당 버튼을 눌러 시작해주세요.
      </h3>

      <br />
      <br />

      <h3>검사 결과와 함께 검출된 물품의 <br /> 항공 규정을 확인할 수 있습니다.</h3>

      <br />
      <br />

      <h3>규정을 통해 보다 자세한 내용을<br />확인할 수 있습니다.</h3>

      <footer>
      <Link to="/page3"> <Button variant="outlined">다음</Button> </Link>
      </footer>

      <br />
    </div>
  )
}

export default page2;
