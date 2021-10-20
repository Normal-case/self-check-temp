import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Button, Modal } from '@mui/material';

const page2 = () => {
  return (
    <div className="pageWrap arrowWrap">
     <Link to="/" className="BackIcon"><ArrowBackIcon fontSize="large" /></Link>
      <img src="img/exclamation_mark.png" width="48px" />
      <h2>셀프 체크 설명서</h2>

<img src="img/guide1.png" style={{margin:'12px auto', width:"90%"}} />

<h3>먼저, 항공기에 반입 가능한지 <br /> 확인하고 싶은 물품들을 <br /> 책상 또는 바닥에 잘 나열해주세요.</h3>


<br />
<br />

<img src="img/guide2.png" style={{margin:'12px auto', width:"90%", border:'1px solid #ddd'}} />
<h3>사진을 찍은 후, <br /> 셀프 체크 화면에 사진을 업로드 해주세요.<br /> 
셀프 체크 시작버튼이 활성화 되면 <br /> 해당 버튼을 눌러 시작해주세요.
</h3>

<br />
<br />

<img src="img/guide3.png" style={{margin:'12px auto', width:"90%", border:'1px solid #ddd'}} />
<h3>검사 결과와 함께 검출된 물품의 <br /> 항공 규정을 확인할 수 있습니다. <br /> <br /> 
금지 물품은 <span className="red">빨간색</span> , <br /> 기내&위탁 가능 물품은 <span className="green">초록색</span> , <br /> 크기&용량 제한 물품은 <span className="yellow">노란색</span>으로 표기됩니다.</h3>


<br />
<br />

<footer>
{/* <Link to="/page3"><img src="img/q.png" width="48px" /></Link> */}
<Link to="/page3"> <Button variant="outlined">다음</Button> </Link>
</footer>

<br />
    </div>
  );
};

export default page2;
