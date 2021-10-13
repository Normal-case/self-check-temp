import React from 'react';
import './modal-card.css'
import liquid from '../images/ap-limit-possible-icon-liquid.png'
import medi from '../images/ap-limit-possible-icon-medi.png'
import macbook from '../images/ap-limit-possible-icon-macbook.png'
import etc from '../images/ap-limit-possible-icon-etc.png'

function CarryLimit() {
    return (
        <div className="modal-wrapper">
            <h2>제한적으로 기내 반입 가능한 물품</h2>
            <div className="flex-card">
                <img src={liquid} alt=""></img>
                <div>
                    <h3>액체류(국제선 출발, 환승에 한함)</h3>
                    <ul>
                        <li>음료, 식품, 화장품 등 액체류(스프레이) 및 젤류(젤 또는 크림) 물품</li>
                        <li>개별 용기당 100ml 이하로 1인당 총 1L 용량의 비닐 지퍼백 1개</li>
                    </ul>
                </div>
            </div>
            <div className="flex-card">
                <img src={medi} alt=""></img>
                <div>
                    <h3>의약품</h3>
                    <ul>
                        <li>여행 중 필요한 개인용 의약품</li>
                        <li>의사가 처방한 의약품은 의사소견서 혹은 처방전 등을 제시할 수 있어야 합니다.</li>
                    </ul>
                </div>
            </div>
            <div className="flex-card">
                <img src={macbook} alt=""></img>
                <div>
                    <h3>MacBook 배터리 리콜 대상</h3>
                    <ul>
                        <li>배터리 화재 위험이 있는 MacBook Pro(Retina, 15inch, Mid 2015) 중 리콜하여 수리되지 않은 일부 제품은 국가/공항에 따라 항공기 운송(휴대/위탁) 금지 또는 휴대만 가능</li>
                    </ul>
                </div>
            </div>
            <div className="flex-card">
                <img src={etc} alt=""></img>
                <div>
                    <h3>기타</h3>
                    <ul>
                        <li>1인당 1개 이하의 라이터 및 안전성냥</li>
                        <li>1인당 2.5kg 이하의 드라이아이스</li>
                        <li>항공사의 승인을 받은 의료용품</li>
                        <li>1인당 12oz(350ml) 이하의 파우더류 물품(미국 출도착편 및 호주 출발편)</li>
                        <li>1) 중국 출발편 경우 휴대/위탁 모두 불가</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CarryLimit