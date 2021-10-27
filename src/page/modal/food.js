import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import Kimchi from './food/kimchi'
import BabyFood from './food/babyFood'
import BulgogiSauce from './food/bulgogiSauce'
import Cheese from './food/cheese'
import CupRamen from './food/cupRamen'
import FermentedSquid from './food/fermentedSquid'
import Fruit from './food/fruit'
import Gimbap from './food/gimbap'
import HerbalMedicines from './food/herbalMedicines'
import PickledVegetables from './food/pickledVegetables'

function FoodDesc() {

    const [selectValue, setSelectValue] = useState('김치')
    const [displayTable, setDisplayTable] = useState(<Kimchi />)

    useEffect(() => {}, [selectValue])

    const selectDropdown = (e) => {
        const changeValue = e.currentTarget.textContent
        setSelectValue(changeValue)
        if(changeValue === '김치') {
            setDisplayTable(<Kimchi />)
        } else if (changeValue === '이유식') {
            setDisplayTable(<BabyFood />)
        } else if (changeValue === '불고기 양념') {
            setDisplayTable(<BulgogiSauce />)
        } else if (changeValue === '크림치즈') {
            setDisplayTable(<Cheese />)
        } else if (changeValue === '컵라면') {
            setDisplayTable(<CupRamen />)
        } else if (changeValue === '오징어젓') {
            setDisplayTable(<FermentedSquid />)
        } else if (changeValue === '과일') {
            setDisplayTable(<Fruit />)
        } else if (changeValue === '김밥') {
            setDisplayTable(<Gimbap />)
        } else if (changeValue === '한약') {
            setDisplayTable(<HerbalMedicines />)
        } else if (changeValue === '장아찌') {
            setDisplayTable(<PickledVegetables />)
        }

        document.getElementsByClassName('dropdown-content')[0].style.display = 'none'
    }

    const buttonActive = () => {
        document.getElementsByClassName('dropdown-content')[0].style.display = 'block'
    }

    return (
        <>
            <h3>음식물 항공기 반입규정</h3>
            <div className='dropdown'>
                <div className='dropdown-button' onClick={buttonActive}>{selectValue} <FontAwesomeIcon icon={faAngleDown} /></div>
                <div className='dropdown-content'>
                    <a onClick={selectDropdown}>김치</a>
                    <a onClick={selectDropdown}>이유식</a>
                    <a onClick={selectDropdown}>불고기 양념</a>
                    <a onClick={selectDropdown}>크림치즈</a>
                    <a onClick={selectDropdown}>컵라면</a>
                    <a onClick={selectDropdown}>오징어젓</a>
                    <a onClick={selectDropdown}>과일</a>
                    <a onClick={selectDropdown}>김밥</a>
                    <a onClick={selectDropdown}>한약</a>
                    <a onClick={selectDropdown}>장아찌</a>
                </div>
            </div>
            <ul>
                {displayTable}
            </ul>
        </>
    )
}

export default FoodDesc