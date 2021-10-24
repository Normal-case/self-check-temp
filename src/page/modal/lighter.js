import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import GunLighter from './lighter/gunLighter'
import Lighter from './lighter/lighter'
import ZippoLighter from './lighter/zippoLighter'

function LighterDesc() {

    const [selectValue, setSelectValue] = useState('물')
    const [displayTable, setDisplayTable] = useState(<Water />)

    useEffect(() => {}, [selectValue])

    const selectDropdown = (e) => {
        const changeValue = e.currentTarget.textContent
        setSelectValue(changeValue)
        if(changeValue === '일반 라이터') {
            setDisplayTable(<Lighter />)
        } else if (changeValue === '지포 라이터') {
            setDisplayTable(<ZippoLighter />)
        } else if (changeValue === '총모양 라이터') {
            setDisplayTable(<GunLighter />)
        }

        document.getElementsByClassName('dropdown-content')[0].style.display = 'none'
    }

    const buttonActive = () => {
        document.getElementsByClassName('dropdown-content')[0].style.display = 'block'
    }

    return (
        <>
            <h3>라이터 항공기 반입규정</h3>
            <div className='dropdown'>
            <div className='dropdown-button' onClick={buttonActive}>{selectValue} <FontAwesomeIcon icon={faAngleDown} /></div>
            <div className='dropdown-content'>
                <a onClick={selectDropdown}>일반 라이터</a>
                <a onClick={selectDropdown}>지포 라이터</a>
                <a onClick={selectDropdown}>총모양 라이터</a>
            </div>
        </div>
        <ul>
            {displayTable}
        </ul>
        </>
    )
}

export default LighterDesc