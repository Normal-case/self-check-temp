function BabyFood() {
    return (
        <li>
            이유식
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
                        <td colSpan='3'>객실 반입은 100ml이하로 1인당 1L까지 가능하지만 유아를 동반할 경우 유아용 우유, 물, 주스, 모유, 액체 형태의 음식은 적합한 용량이 허용됨</td>
                    </tr>
                </tbody>
            </table>
        </li>
    )
}

export default BabyFood