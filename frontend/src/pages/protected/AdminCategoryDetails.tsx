import React, { useEffect, useState } from 'react'
import ProdNameInput from '../../components/ProdNameInput'
import useFetch from '../../hooks/useFetch'
import { useTranslation } from 'react-i18next'
import useRequest from '../../hooks/useRequest'
import { useNavigate, useParams } from 'react-router-dom'
import { ICategory } from '../../interfaces'

function AdminCategoryDetails() {
    const {categoryId } = useParams()
    const [categoryInfo, setCategoryInfo] = useState<ICategory | null>( null)
    const { i18n } = useTranslation()
    const {getData, data} = useFetch()
    const {requestData} = useRequest()
    const navigate = useNavigate()

    useEffect(() => {
        getData({endpoint: 'categories', id: categoryId})
      }, [])
    
    useEffect(() => {
      setCategoryInfo(data as ICategory)
    }, [data])


    const handleCategoryInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldToChange: string) => {
        if (categoryInfo) {
          setCategoryInfo({ ...categoryInfo, [fieldToChange]: e.target.value }) 
        }
      }

    const updateProdInfo = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault() 

        if (categoryInfo && categoryId) {
            await requestData({endpoint: 'categories', id: categoryId, data: categoryInfo})
        }
    
        navigate(`/admin/categories`)
    }
  return (
    <div className='admin-items-container'>
        <div className="admin-list-container categories-input-container">
            <ProdNameInput
                label="ქართული კატეგორია"
                value={categoryInfo?.geoCategory || ''}
                onChange={(e) => handleCategoryInfoChange(e, 'geoCategory')}
            />
            <ProdNameInput
                label="ინგლისური კატეგორია"
                value={categoryInfo?.enCategory || ''}
                onChange={(e) => handleCategoryInfoChange(e, 'enCategory')}
            />
        </div>
        <button id='save-btn' onClick={(e) => updateProdInfo(e)}>{i18n.language === 'en' ? 'Save' : 'შენახვა'}</button>
    </div>
  )
}

export default AdminCategoryDetails