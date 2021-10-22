import React from 'react'

function VolumnDesc() {
    return (
        <>
            <h3>액체류 항공기 반입규정</h3>
            <b>100ml</b>가 넘으면 <span className='red'><b>기내 반입이 불가능</b></span>하며<br /><b>500ml</b>가 넘으면 <span className='red'><b>기내와 수하물 둘다 불가</b></span>합니다.<br /><span className='green'><b>물건의 용량을 꼭 확인해주세요!</b></span>
        </>
    )
}

export default VolumnDesc