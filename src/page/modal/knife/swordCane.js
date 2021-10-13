function SwordCane() {
    return (
        <li>
            칼이 든 지팡이
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
                        <td>X</td>
                    </tr>
                    <tr>
                        <td colSpan='3'>칼날의 길이가 15cm이상이고 흉기성이 뚜렷할 경우 공항 경찰대에서 추가적인 조사가 이루어질 수 있음</td>
                    </tr>
                </tbody>
            </table>
        </li>
    )
}

export default SwordCane