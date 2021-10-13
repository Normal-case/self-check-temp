import React from 'react';
import './modal-card.css'
import broken from '../images/ap-limit-goods-icon-broken.png'
import electronics from '../images/ap-limit-goods-icon-electronics.png'
import money from '../images/ap-limit-goods-icon-money.png'
import battery from '../images/ap-limit-goods-icon-battery.png'

function Checked() {
    return (
        <div className="modal-wrapper">
            <h2>위탁 수하물 제한 물품</h2>
            <div className="flex-card">
                <img src={broken} alt=""></img>
                <div>
                    <h3>파손 또는 손상되기 쉬운 물품</h3>
                    <ul>
                        <li>도자기, 액자, 유리제품 등</li>
                    </ul>
                </div>
            </div>
            <div className="flex-card">
                <img src={electronics} alt=""></img>
                <div>
                    <h3>전자제품</h3>
                    <ul>
                        <li>노트북, 카메라, 휴대전화 등 고가의 전자제품</li>
                    </ul>
                </div>
            </div>
            <div className="flex-card">
                <img src={money} alt=""></img>
                <div>
                    <h3>고가품 및 귀중품</h3>
                    <ul>
                        <li>화폐, 보석, 현금, 유가증권, 견본, 서류 등</li>
                    </ul>
                </div>
            </div>
            <div className="flex-card">
                <img src={battery} alt=""></img>
                <div>
                    <h3>여객기로 운송 가능한 휴대용 전자기기의 보조/여분 배터리는 휴대만 가능</h3>
                    <ul>
                        <li>예) 니켈수소, 니켈카드뮴, 알카라인, 망간 등</li>
                    </ul>
                </div>
            </div>
            <div className="flex-card">
                <img src={battery} alt=""></img>
                <div>
                    <h3>보조/여분 리튬배터리 및 리튬배터리 장착 전자기기</h3>
                    <ul>
                        <li>배터리 용량이 160Wh 미만이며 단락 방지 포장된 여분/보조 배터리</li>
                        <li>배터리 용량이 100Wh 이하인 전자담배</li>
                        <li>배터리 용량이 상기 조건을 초과하거나 확인이 불가할 경우 운송이 거절될 수 있습니다.(위탁, 휴대 모두 불가)</li>
                        <li>1) 100Wh 이하 배터리 최대 20개+100Wh 초과 160Wh 미만 배터리 최대 2개 휴대 가능(해외 출발편의 경우 공항/국가별도 강화된 규정 적용 가능)</li>
                        <li>2) 기내에서 충전 및 사용은 엄격히 금지됩니다.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Checked