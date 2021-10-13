import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const page2 = () => {
  return (
    <div className="pageWrap arrowWrap">
     <Link to="/page1" className="BackIcon"><ArrowBackIcon fontSize="large" /></Link>
    <img src="img/car.png" className="car" />
      <h2>업로드 전 체크해주세요</h2>

 <ul> 
 <li> ✔️ <span className="textImportant"><b> 무늬가 없는 배경</b></span> 에서 촬영해주세요.</li>
 <li> ✔️  <span className="textImportant"><b> 물품 전체</b></span>가 나오도록 촬영해주세요.</li>
 <li> ✔️  <span className="textImportant"><b> 물품이 겹치지 않게</b></span> 촬영해주세요.</li>
 </ul>
<Link to="/page3"> <img src="img/arrow.png" className="frontarrow"/></Link>
<h4>다음으로</h4>
    </div>
  );
};

export default page2;
