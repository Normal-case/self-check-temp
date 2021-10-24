import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import NailScissors from './scissors/nailScissors'
import Scissors from './scissors/scissors'

function ScissorsDesc() {

    const [selectValue, setSelectValue] = useState('가위')
    const [displayTable, setDisplayTable] = useState(<Scissors />)

    useEffect(() => {}, [selectValue])

    const selectDropdown = (e) => {
        const changeValue = e.currentTarget.textContent
        setSelectValue(changeValue)
        if(changeValue === '가위') {
            setDisplayTable(<Scissors />)
        } else if (changeValue === '손톱정리용 가위') {
            setDisplayTable(<NailScissors />)
        }

        document.getElementsByClassName('dropdown-content')[0].style.display = 'none'
    }

    const buttonActive = () => {
        document.getElementsByClassName('dropdown-content')[0].style.display = 'block'
    }

    return (
        <>
            <h3>가위 항공기 반입규정</h3>
            <div className='dropdown'>
            <div className='dropdown-button' onClick={buttonActive}>{selectValue} <FontAwesomeIcon icon={faAngleDown} /></div>
            <div className='dropdown-content'>
                <a onClick={selectDropdown}>가위</a>
                <a onClick={selectDropdown}>손톱정리용 가위</a>
            </div>
        </div>
        <ul>
            {displayTable}
        </ul>
        </>
    )
}

export default ScissorsDesc