function SeatBeltCutter() {
    return (
        <li>
            안전벨트 자르는 칼
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
                        <td>O</td>
                        <td>X</td>
                    </tr>
                    <tr>
                        <td colSpan='3'>칼이 분리되거나 망치를 포함하는 경우 위탁수하물로만 반입 가능</td>
                    </tr>
                </tbody>
            </table>
        </li>
    )
}

export default SeatBeltCutter