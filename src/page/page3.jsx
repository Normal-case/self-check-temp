import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Button } from '@mui/material';



const page3 = () => {
  return (
    <div className="pageWrap arrowWrap">
     <Link to="/" className="BackIcon"><ArrowBackIcon fontSize="large" /></Link>
    <img src="img/check1.png" className="car" />
      <h2>업로드 전 체크해주세요</h2>

 <ul> 

 <li> ➤ 짐 중에서 <span className="textImportant">의류, 수건을 모두 제외</span>해주세요.  <br /> 의류는 반입금지 물품에 포함되지 않아요.</li> <br /> 
 <li> ➤ 모든 물품들은 최대한 서로 <span className="textImportant">겹치지 않도록</span> <br /> 늘어놓아주세요. </li> <br /> 
 <li> ➤ 물품이 잘리거나 겹치지 않았는지 확인했다면,  <br /> <span className="textImportant">가급적이면 위에서 아래로 촬영</span>한 뒤  <br /> 결과를 확인해주세요.</li>
 


 </ul>
<Link to="/page4"> <Button variant="outlined">다음</Button> </Link>
<br />
<br />
    </div>
  );
};

export default page3;
