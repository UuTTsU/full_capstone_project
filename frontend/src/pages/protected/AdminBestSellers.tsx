import React, { useEffect, useState } from 'react'
import ProdItem from '../../components/ProdItem'
import { db } from '../../config/firebase'
import {getDocs , collection, deleteDoc, doc} from 'firebase/firestore'
import { useTranslation } from 'react-i18next'
import { IProduct } from '../../interfaces'
import useFetch from '../../hooks/useFetch'


function AdminBestSellers() {
  const [bestSellers, setBestSellers] = useState<IProduct[]>()
  const {t, i18n} = useTranslation()
  const {getData, data} = useFetch()
  
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const fetchedData = await getData({ endpoint: 'bestSellers' })
    setBestSellers(fetchedData as IProduct[])
  }

  const handleDeleteItem = async (productId: string) => {
    await deleteDoc(doc(db, 'bestSellers', productId))
    fetchData()
  }

  return (
    <div className='admin-items-container'>
      <h1>{t("global.popularProds")}</h1>
      <div className='admin-list-container'>
        {bestSellers && bestSellers?.map(each => (
          <ProdItem 
            key={each.id} 
            id={each.id} prodName={i18n.language === 'en' ? each.enName : each.geoName} 
            endpoint={'bestSellers'} 
            isFavorite={each.isFavorite ?? false} 
            prodInfo={each} 
            onDelete={handleDeleteItem}/>
        ))}
      </div>
    </div>
  )
}

export default AdminBestSellers