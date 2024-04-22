import React from 'react'
import ProductBox from './ProductBox'
import { NavLink } from 'react-router-dom'
import Arrow from '../assets/icons/arrow.png'

function SomePlants() {
    const somePlants = new Array(8).fill(null)
  return (
    <div className='some-plants-container'>
        <div className="content-container">
            <h2>ჩვენი მცენარეები</h2>
            <div className="some-plants">
                {somePlants.map((each, index) => (
                    <ProductBox key={index} />
                ))}
            </div>
            <div className="see-more">
            <NavLink to={'/catalogue/peper'}>
                <span>მეტის ნახვა</span>
                <img src={Arrow} alt="" />
            </NavLink>
            </div>
        </div>
    </div>
  )
}

export default SomePlants