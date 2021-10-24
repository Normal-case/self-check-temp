function TentPeg() {
    return (
        <li>
            텐트못
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
                        <td colSpan='3'>기내 반입 시 날길이가 6cm이하인 경우 반입 가능</td>
                    </tr>
                </tbody>
            </table>
        </li>
    )
}

export default TentPeg