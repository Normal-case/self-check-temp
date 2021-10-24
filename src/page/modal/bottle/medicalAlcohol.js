function MedicalAlcohol() {
    return (
        <li>
            의료용 소독 알코올
            <table>
                <thead>
                    <tr>
                        <th>위탁수하물</th>
                        <th>기내휴대</th>
                        <th>특별규정</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>O</td>
                        <td>X</td>
                        <td>O</td>
                    </tr>
                    <tr>
                        <td colSpan='3'>위탁수하물 반입 시 500ml이하로 1인당 2L이하까지만 반입 가능. 기내 반입할 경우 개별 용기당 100ml 이하로 1인당 1L 투명비닐 지퍼백 1개에 한해 반입 가능 *의약품인 경우 의사 처방전 등 관련 증명서를 보안검색요원에게 제시하고 적장하다고 판단될 경우 비행 중 필요한 용량에 한해 객실반입 가능</td>
                    </tr>
                </tbody>
            </table>
        </li>
    )
}

export default MedicalAlcohol