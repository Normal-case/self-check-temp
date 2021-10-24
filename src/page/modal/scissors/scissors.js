function Scissors() {
    return (
        <li>
            가위
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
                        <td colSpan='3'>기내 반입할 경우 날길이가 6cm이하일 경우만 가능</td>
                    </tr>
                </tbody>
            </table>
        </li>
    )
}

export default Scissors