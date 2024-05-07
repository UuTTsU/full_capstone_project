import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { IProduct } from '../../interfaces'
import ProdItem from '../../components/ProdItem'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

function AdminProducts() {
  const {getData, data} = useFetch()
  const [products, setProducts] = useState<IProduct[]>([])
  const {i18n} = useTranslation()
  const navigate = useNavigate()
  
  useEffect(() => {
    getData({endpoint: 'products'})
    setProducts(data as IProduct[])
  }, [data])

  const addNew = () => {
    navigate(`/admin/products/${uuidv4()}`)
  }

  return (
    <div className='admin-items-container'>
      <div className='add-prod-title'>
        <h1>კატალოგი</h1>
          <div className="add-new" onClick={addNew}>
          +
        </div>
      </div>
      <div className="admin-list-container">
        {products?.map((each, index) => (
          <ProdItem key={each.id} id={each.id} prodName={i18n.language === 'en' ? each.enName : each.geoName} endpoint={'products'} isFavorite={each.isFavorite ?? false} prodInfo={each}/>
        ))}
      </div>
    </div>
  )
}

export default AdminProducts