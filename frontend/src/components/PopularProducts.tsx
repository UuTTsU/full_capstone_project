import React from 'react'
import ProductBox from './ProductBox'

function PopularProducts() {
  const popularProds = new Array(3).fill(null)
  return (
    <div className='popular-items-container'>
        <div className='content-container'>
          <h2>პოპულარული პოდუქტები</h2>
          <div className="popular-items">
            {popularProds.map((each, index) => (
              <ProductBox key={index}/>
            ))}
          </div>
        </div>
    </div>
  )
}

export default PopularProducts