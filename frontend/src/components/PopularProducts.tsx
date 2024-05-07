import React, { useEffect, useState } from 'react'
import ProductBox from './ProductBox'
import { IProduct } from '../interfaces'
import { useTranslation } from 'react-i18next'
import useFetch from '../hooks/useFetch'

function PopularProducts() {
  const {t,} = useTranslation()
  const {getData, data} = useFetch()



  useEffect(() => {
    getData({ endpoint: 'bestSellers' })
  }, [])

  const bestSellers = data as IProduct[]

  return (
    <div className='popular-items-container'>
        <div className="popular-title-container">
          <div className="popular-title">
            <h2>{t("global.popularProds")}</h2>
          </div>
        </div>
        <div className='content-container'>
          <div className="popular-items">
            {bestSellers?.map((each, index) => (
              <ProductBox 
                key={each.id}
                id={each.id}
                enCategory={each.enCategory}
                geoCategory={each.geoCategory}
                geoName={each.geoName}
                enName={each.enName}
                geoDescr={each.geoDescr}
                enDescr={each.enDescr}
                price={each.price}
                images={each.images} 
                isAvailable={each.isAvailable}              
              />
            ))}
          </div>
        </div>
    </div>
  )
}

export default PopularProducts