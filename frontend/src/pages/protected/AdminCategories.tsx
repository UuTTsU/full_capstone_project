import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { ICategory } from '../../interfaces'
import CategoryItem from '../../components/CategoryItem'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

function AdminCategories() {
    const {getData, data} = useFetch()
    const [categories, setCategories] = useState<ICategory[] | []>([])
    const {i18n} = useTranslation()
    const navigate = useNavigate()

    useEffect(() => {
      fetchData()
    }, [])

    const fetchData = async () => {
      const fetchedData = await getData({ endpoint: 'categories' })
      setCategories(fetchedData as ICategory[])
    }

    const addCategory = () => {
        navigate(`/admin/categories/${uuidv4()}`)
    }

    const handleCategoryDeletion = async (categoryId: string) => {
      await fetchData()
  }

  return (
    <div className="admin-items-container">
      <div className='add-prod-title'>
        <h1>კატეგორია</h1>
        <div className="add-new" onClick={addCategory}>
          +
        </div>
      </div>
      <div className="admin-list-container">
        {categories?.map((each, index) => (
            <CategoryItem key={each.id} id={each.id} category={i18n.language === 'en' ? each.enCategory : each.geoCategory}  onDelete={handleCategoryDeletion} />
        ))}
      </div>
    </div>
  )
}

export default AdminCategories