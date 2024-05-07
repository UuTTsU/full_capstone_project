import React from 'react'
import Peper from '../assets/img/peper.png'
import { NavLink } from 'react-router-dom'
import { IProduct } from '../interfaces'
import { useTranslation } from 'react-i18next'


function ProductBox({id, geoName, enName, enDescr, geoDescr, images, price, enCategory, geoCategory, isAvailable } : IProduct) {
  const {i18n} = useTranslation()
  const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)
  return (
    <NavLink to={`/catalogue/pepper/${id}`} className='product-box'>
        <div className="product-img">
            <img src={images[0]} alt="" />
        </div>
        <div className="product-info">
            <p className='product-descr'>{i18n.language === 'en' ? capitalize(enCategory) : geoCategory}</p>
            <p className='product-name'>{i18n.language === 'en' ? enName : geoName}</p>
            <p className='product-price'>{price} {i18n.language === 'en' ? ' GEL' : ' ₾'}</p>
        </div>
    </NavLink>
  )
}

export default ProductBox