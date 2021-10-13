import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Modal from '@material-ui/core/Modal';

const page3 = () => {
  return (
    <div className="pageWrap arrowWrap">
     <Link to="/page2" className="BackIcon"><ArrowBackIcon fontSize="large" /></Link>
      <img src="img/exclamation_mark.png" width="100px" />
      <h2>셀프 체크 설명서</h2>

<img src="img/cont.jpeg" style={{margin:'12px'}} />

<h3>금지 물품은 <br /> <span className="red"> 빨간색 </span> 으로 표시됩니다.</h3>
<p>가장 많이 적발되는 물품은 화장품(86.3%), 생수(5%)에요.</p>

<br />
<br />

<img src="img/cont.jpeg" style={{margin:'12px'}} />
<h3>기내, 또는 위탁 가능 물품은 <br /> <span className="green">초록색</span>으로 표시됩니다.</h3>
<p>가장 많이 적발되는 물품은 화장품(86.3%), 생수(5%)에요.</p>

<br />
<br />

<img src="img/cont.jpeg" style={{margin:'12px'}} />
<h3>크기 또는 용량 제한 물품은 <br /> <span className="yellow">노란색</span>으로 표시됩니다.</h3>
<p>가장 많이 적발되는 물품은 화장품(86.3%), 생수(5%)에요.</p>

<br />
<br />

<footer>
<Link to="/page3"><img src="img/q.png" width="60px" /></Link>
<Link to="/page4"> <img src="img/arrow.png" className="frontarrow"/></Link>
</footer>

<br />
    </div>
  );
};

export default page3;
