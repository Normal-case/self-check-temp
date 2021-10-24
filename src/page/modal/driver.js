import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import Burin from './driver/burin'
import Chisel from './driver/chisel'
import DrillBit from './driver/drillBit'
import IcePick from './driver/icePick'
import Screwdriver from './driver/screwdriver'
import TentPeg from './driver/tentPeg'

function DriverDesc() {

    const [selectValue, setSelectValue] = useState('얼음송곳')
    const [displayTable, setDisplayTable] = useState(<IcePick />)

    useEffect(() => {}, [selectValue])

    const selectDropdown = (e) => {
        const changeValue = e.currentTarget.textContent
        setSelectValue(changeValue)
        if(changeValue === '얼음송곳') {
            setDisplayTable(<IcePick />)
        } else if (changeValue === '스크루드라이버') {
            setDisplayTable(<Screwdriver />)
        } else if (changeValue === '드릴날') {
            setDisplayTable(<DrillBit />)
        } else if (changeValue === '끌') {
            setDisplayTable(<Chisel />)
        } else if (changeValue === '정') {
            setDisplayTable(<Burin />)
        } else if (changeValue === '텐트못') {
            setDisplayTable(<TentPeg />)
        }

        document.getElementsByClassName('dropdown-content')[0].style.display = 'none'
    }

    const buttonActive = () => {
        document.getElementsByClassName('dropdown-content')[0].style.display = 'block'
    }

    return (
        <>
            <h3>드라이버 항공기 반입규정</h3>
            <div className='dropdown'>
                <div className='dropdown-button' onClick={buttonActive}>{selectValue} <FontAwesomeIcon icon={faAngleDown} /></div>
                <div className='dropdown-content'>
                    <a onClick={selectDropdown}>얼음송곳</a>
                    <a onClick={selectDropdown}>스크루드라이버</a>
                    <a onClick={selectDropdown}>드릴날</a>
                    <a onClick={selectDropdown}>끌</a>
                    <a onClick={selectDropdown}>정</a>
                    <a onClick={selectDropdown}>텐트못</a>
                </div>
            </div>
            <ul>
                {displayTable}
            </ul>
        </>
    )
}

export default DriverDesc