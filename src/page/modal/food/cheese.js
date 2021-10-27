function Cheese() {
    return (
        <li>
            크림 치즈
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
                        <td colSpan='3'>크림 치즈는 액체 형태로 간주하여 객실 반입시 100ml 이하만 반입 가능하며 가축전염병 문제로 유가공품은 도착 전 항공기에서 모두 섭취 권장</td>
                    </tr>
                </tbody>
            </table>
        </li>
    )
}

export default Cheese