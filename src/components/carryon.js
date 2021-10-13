import React from 'react';
import './modal-card.css'
import fire from '../images/ap-limit-goods-icon-fire.png'
import gas from '../images/ap-limit-goods-icon-gas.png'
import etc from '../images/ap-limit-goods-icon-etc-dangerous.png'
import lithium from '../images/ap-limit-goods-icon-lithium.png'
import weapone from '../images/ap-limit-goods-icon-weapon.png'

function CarryOn() {
    return (
        <div className="modal-wrapper">
            <h2>기내 반입 금지 물품</h2>
            <div className="flex-card">
                <img src={fire} alt=""></img>
                <div>
                    <h3>발화성/인화성 물질</h3>
                    <ul>
                        <li>휘발유, 페인트, 라이터용 연료 등 발화성/인화성 물질</li>
                    </ul>
                </div>
            </div>
            <div className="flex-card">
                <img src={gas} alt=""></img>
                <div>
                    <h3>고압가스 용기</h3>
                    <ul>
                        <li>산소캔, 부탄가스캔 등 고압가스 용기</li>
                    </ul>
                </div>
            </div>
            <div className="flex-card">
                <img src={weapone} alt=""></img>
                <div>
                    <h3>무기 및 폭발물 종류</h3>
                    <ul>
                        <li>총기, 폭죽 등 무기 및 폭발물 종류</li>
                    </ul>
                </div>
            </div>
            <div className="flex-card">
                <img src={etc} alt=""></img>
                <div>
                    <h3>기타 위험 물질</h3>
                    <ul>
                        <li>소화기, 에어로졸(살충제 등), 락스, 파마약 등 탑승객 및 항공기에 위험이 될 가능성이 있는 물질</li>
                    </ul>
                </div>
            </div>
            <div className="flex-card">
                <img src={lithium} alt=""></img>
                <div>
                    <h3>리튬 배터리 장착 전자기기</h3>
                    <ul>
                        <li>배터리 용량 160Wh 이상의 리듐 배터리가 장착된 전자기기</li>
                        <li>배터리 용량 160Wh 이상의 보조/여분의 리튬 배터리</li>
                        <li>리튬 배터리가 분리되지 않는 전동 휠, 스마트 가방</li>
                        <li>배터리 분리가 불가한 헤어컬(고데기)</li>
                        <li>1) 전동휠체어 등 보행 보조기구는 예외</li>
                        <li>2) 배터리를 부리할 수 있으며 용량이 160Wh 이내인 경우는 배터리 분리 후 배터리는 휴대, 휠/가방 등은 휴대 또는 위탁 가능</li>
                        <li>3) 일본 출발편 한정</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CarryOn