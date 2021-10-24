function Water() {
    return (
        <li>
            물
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
                        <td colSpan='3'>기내 반입할 경우 개별 용기당 100ml 이하로 1인당 1L 투명비닐 지퍼백 1개에 한해 반입 가능 *유아를 동반할 경우 유아용 음식은 100ml이상이라도 비행여정에 적한한 용량은 허용됨</td>
                    </tr>
                </tbody>
            </table>
        </li>
    )
}

export default Water