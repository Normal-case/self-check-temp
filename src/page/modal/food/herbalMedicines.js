function HerbalMedicines() {
    return (
        <li>
            김치
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
                        <td>X</td>
                        <td>X</td>
                        <td>O</td>
                    </tr>
                    <tr>
                        <td colSpan='3'>객실 반입은 100ml이하로 1인당 1L까지 가능하지만 의사처방전이 있는 처방 약품의 경우 비행여정에 적합한 경우 적합한 용량은 반입 가능</td>
                    </tr>
                </tbody>
            </table>
        </li>
    )
}

export default HerbalMedicines