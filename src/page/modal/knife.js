import React, { useState, useEffect } from 'react'
import './table.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import ArtSword from './knife/artSword'
import Saber from './knife/saber'
import SwordCane from './knife/swordCane'
import ChineseMedicineCuttingKnife from './knife/chineseMedicineCuttingKnife'
import SeatBeltCutter from './knife/seatBeltCutter'
import BoxCutter from './knife/boxCutter'
import CarvingKnife from './knife/carvingKnife'
import CeramicKnife from './knife/ceramicKnife'
import FoldableKnife from './knife/foldableKnife'
import FruitKnife from './knife/fruitKnife'
import HuntingKnife from './knife/huntingKnife'
import IceCarvingKnife from './knife/iceCarvingKnife'
import JackKnife from './knife/jackKnife'
import KitchenKnife from './knife/kitchenKnife'
import Scalpels from './knife/scalpels'
import SwissArmyKnife from './knife/swissArmyKnife'
import UtilityKnife from './knife/utilityKnife'

function KnifeDesc() {

    const [selectValue, setSelectValue] = useState('무술용 검')
    const [displayTable, setDisplayTable] = useState(<ArtSword />)

    useEffect(() => {}, [selectValue])

    const selectDropdown = (e) => {
        const changeValue = e.currentTarget.textContent
        setSelectValue(changeValue)
        if(changeValue === '무술용 검') {
            setDisplayTable(<ArtSword />)
        } else if (changeValue === '펜신용 검') {
            setDisplayTable(<Saber />)
        } else if (changeValue === '칼이 든 지팡이') {
            setDisplayTable(<SwordCane />)
        } else if (changeValue === '한약봉지 자르는 칼') {
            setDisplayTable(<ChineseMedicineCuttingKnife />)
        } else if (changeValue === '안전벨트 자르는 칼') {
            setDisplayTable(<SeatBeltCutter />)
        } else if (changeValue === '얼음조각칼') {
            setDisplayTable(<IceCarvingKnife />)
        } else if (changeValue === '조각칼') {
            setDisplayTable(<CarvingKnife />)
        } else if (changeValue === '세라믹 칼') {
            setDisplayTable(<CeramicKnife />)
        } else if (changeValue === '부엌칼') {
            setDisplayTable(<KitchenKnife />)
        } else if (changeValue === '과도') {
            setDisplayTable(<FruitKnife />)
        } else if (changeValue === '다용도 칼') {
            setDisplayTable(<UtilityKnife />)
        } else if (changeValue === '사냥칼') {
            setDisplayTable(<HuntingKnife />)
        } else if (changeValue === '접이식 칼') {
            setDisplayTable(<FoldableKnife />)
        } else if (changeValue === '맥가이버칼') {
            setDisplayTable(<SwissArmyKnife />)
        } else if (changeValue === '박스커터칼') {
            setDisplayTable(<BoxCutter />)
        } else if (changeValue === '외과용메스') {
            setDisplayTable(<Scalpels />)
        } else if (changeValue === '잭나이프') {
            setDisplayTable(<JackKnife />)
        }

        document.getElementsByClassName('dropdown-content')[0].style.display = 'none'
    }

    const buttonActive = () => {
        document.getElementsByClassName('dropdown-content')[0].style.display = 'block'
    }

    return (
        <>
            <h3>칼 항공기 반입규정</h3>
            <div className='dropdown'>
                <div className='dropdown-button' onClick={buttonActive}>{selectValue} <FontAwesomeIcon icon={faAngleDown} /></div>
                <div className='dropdown-content'>
                    <a onClick={selectDropdown}>무술용 검</a>
                    <a onClick={selectDropdown}>펜신용 검</a>
                    <a onClick={selectDropdown}>칼이 든 지팡이</a>
                    <a onClick={selectDropdown}>한약봉지 자르는 칼</a>
                    <a onClick={selectDropdown}>안전벨트 자르는 칼</a>
                    <a onClick={selectDropdown}>얼음조각칼</a>
                    <a onClick={selectDropdown}>조각칼</a>
                    <a onClick={selectDropdown}>세라믹 칼</a>
                    <a onClick={selectDropdown}>부엌칼</a>
                    <a onClick={selectDropdown}>과도</a>
                    <a onClick={selectDropdown}>다용도 칼</a>
                    <a onClick={selectDropdown}>사냥칼</a>
                    <a onClick={selectDropdown}>접이식 칼</a>
                    <a onClick={selectDropdown}>맥가이버칼</a>
                    <a onClick={selectDropdown}>박스커터칼</a>
                    <a onClick={selectDropdown}>외과용메스</a>
                    <a onClick={selectDropdown}>잭나이프</a>
                </div>
            </div>
            <ul>
                {displayTable}
            </ul>
        </>
    )
}

export default KnifeDesc