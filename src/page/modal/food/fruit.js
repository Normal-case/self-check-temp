function Fruit() {
    return (
        <li>
            과일
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
                        <td colSpan='3'>대부분 해외 국가의 동물검역기관에서 병충해 문제로 먹다 남은 과일도 도착지 국가 반입 시에 폐기, 반송, 과태료 등 불이익이 따를 수 있어 도착 전 항공기에서 모두 섭취 권장</td>
                    </tr>
                </tbody>
            </table>
        </li>
    )
}

export default Fruit