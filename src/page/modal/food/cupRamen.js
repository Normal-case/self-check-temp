function CupRamen() {
    return (
        <li>
            컵라면
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
                        <td colSpan='3'>객실 반입시 액상 스프가 없는 경우에 한해 반입 가능하며 객실 반입할 경우 개별 용기당 100ml 이하로만 가능하다.</td>
                    </tr>
                </tbody>
            </table>
        </li>
    )
}

export default CupRamen