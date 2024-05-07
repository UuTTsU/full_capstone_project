import React, { useEffect, useState } from 'react'
import ProdItem from '../../components/ProdItem'
import { db } from '../../config/firebase'
import {getDocs , collection} from 'firebase/firestore'
import { useTranslation } from 'react-i18next'
import { IProduct } from '../../interfaces'
import useFetch from '../../hooks/useFetch'


function AdminBestSellers() {
  const [bestSellers, setBestSellers] = useState<IProduct[]>()
  const {t, i18n} = useTranslation()
  const {getData, data} = useFetch()
  // const products = bestSellers?.filter(each => each.isFavorite)
  
  useEffect(() => {
    getData({endpoint: 'bestSellers'})
    setBestSellers(data as IProduct[])
  }, [data])

  useEffect(() => {
    setBestSellers(data as IProduct[])
  }, [data])

  return (
    <div className='admin-items-container'>
      <h1>{t("global.popularProds")}</h1>
      <div className='admin-list-container'>
        {bestSellers && bestSellers?.map(each => (
          <ProdItem key={each.id} id={each.id} prodName={i18n.language === 'en' ? each.enName : each.geoName} endpoint={'bestSellers'} isFavorite={each.isFavorite ?? false} prodInfo={each}/>
        ))}
      </div>
    </div>
  )
}

export default AdminBestSellers