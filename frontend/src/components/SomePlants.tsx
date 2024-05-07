import React, { useEffect, useState } from 'react'
import ProductBox from './ProductBox'
import { NavLink } from 'react-router-dom'
import Arrow from '../assets/icons/arrow.png'
import useFetch from '../hooks/useFetch'
import { IProduct } from '../interfaces'
import { useTranslation } from 'react-i18next'

function SomePlants() {
    const {getData, data} = useFetch()
    const [prods, setProds] = useState<IProduct[]>()
    const {t} = useTranslation()

    useEffect(() => {
        getData({endpoint: 'products'})
    }, [])

    useEffect(() => {
        setProds(data as IProduct[])
    }, [data])
  return (
    <div className='some-plants-container'>
        <div className="content-container">
            <h2>{t('global.ourPlants')}</h2>
            <div className="some-plants">
                {prods?.map((each, index) => (
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
            <div className="see-more">
            <NavLink to={'/catalogue/pepper'}>
                <span>მეტის ნახვა</span>
                <img src={Arrow} alt="" />
            </NavLink>
            </div>
        </div>
    </div>
  )
}

export default SomePlants