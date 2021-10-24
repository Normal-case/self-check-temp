import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import HairConditioner from './bottle/hairConditioner'
import HairDye from './bottle/hairDye'
import HairGel from './bottle/hairGel'
import HairOil from './bottle/hairOil'
import Juice from './bottle/juice'
import MedicalAlcohol from './bottle/medicalAlcohol'
import Shampoo from './bottle/shampoo'
import Water from './bottle/water'
import ShowerGel from './bottle/showerGel'

function BottleDesc() {

    const [selectValue, setSelectValue] = useState('물')
    const [displayTable, setDisplayTable] = useState(<Water />)

    useEffect(() => {}, [selectValue])

    const selectDropdown = (e) => {
        const changeValue = e.currentTarget.textContent
        setSelectValue(changeValue)
        if(changeValue === '물') {
            setDisplayTable(<Water />)
        } else if (changeValue === '린스') {
            setDisplayTable(<HairConditioner />)
        } else if (changeValue === '염색약') {
            setDisplayTable(<HairDye />)
        } else if (changeValue === '헤어젤') {
            setDisplayTable(<HairGel />)
        } else if (changeValue === '헤어오일') {
            setDisplayTable(<HairOil />)
        } else if (changeValue === '주스') {
            setDisplayTable(<Juice />)
        } else if (changeValue === '의료용 소독 알코올') {
            setDisplayTable(<MedicalAlcohol />)
        } else if (changeValue === '샴푸') {
            setDisplayTable(<Shampoo />)
        } else if (changeValue === '샤워젤') {
            setDisplayTable(<ShowerGel />)
        }

        document.getElementsByClassName('dropdown-content')[0].style.display = 'none'
    }

    const buttonActive = () => {
        document.getElementsByClassName('dropdown-content')[0].style.display = 'block'
    }

    return (
        <>
            <h3>병 항공기 반입규정</h3>
            <div className='dropdown'>
            <div className='dropdown-button' onClick={buttonActive}>{selectValue} <FontAwesomeIcon icon={faAngleDown} /></div>
            <div className='dropdown-content'>
                <a onClick={selectDropdown}>물</a>
                <a onClick={selectDropdown}>린스</a>
                <a onClick={selectDropdown}>염색약</a>
                <a onClick={selectDropdown}>헤어젤</a>
                <a onClick={selectDropdown}>헤어오일</a>
                <a onClick={selectDropdown}>주스</a>
                <a onClick={selectDropdown}>의료용 소독 알코올</a>
                <a onClick={selectDropdown}>샴푸</a>
                <a onClick={selectDropdown}>샤워젤</a>
            </div>
        </div>
        <ul>
            {displayTable}
        </ul>
    </>
    )
}

export default BottleDesc