import React, { useEffect, useState } from 'react' 
import { Navigate, useNavigate, useParams } from 'react-router-dom' 
import { storage } from '../../config/firebase' 
import { useTranslation } from 'react-i18next' 
import { ICategory, IProduct } from '../../interfaces' 
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage' 
import ProdNameInput from '../../components/ProdNameInput' 
import ProdDescrInput from '../../components/ProdDescrInput' 
import ProdPriceInput from '../../components/ProdPriceInput' 
import ProdImageInput from '../../components/ProdImageInput' 
import useFetch from '../../hooks/useFetch'
import useRequest from '../../hooks/useRequest'
import ProdAvailabilityInput from '../../components/ProdAvailabilityInput'
import ProdCategoryInput from '../../components/ProdCategoryInput'

function AdminProdDetails() {
  const {bestSellers, products, prodId } = useParams() 
  const [prodInfo, setProdInfo] = useState<IProduct | null>(null) 
  const [categories, setCategories] = useState<ICategory[] | []>([])
  
  const { i18n } = useTranslation()
  const {getData, data: productsData} = useFetch()
  const {getData: getCategories, data: categoriesData } = useFetch()
  const {requestData} = useRequest()
  const navigate = useNavigate()
  
  const endpointToUse = bestSellers ? bestSellers : products || ''

  useEffect(() => {
    getData({ endpoint: endpointToUse.toString(), id: prodId })
    getCategories({ endpoint: 'categories' })
  }, [])

  useEffect(() => {
    if (productsData) {
      setProdInfo(productsData as IProduct)
    }
    if (categoriesData) {
      setCategories(categoriesData as ICategory[])
    }
  }, [productsData, categoriesData])


  const handleProdInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldToChange: string) => {
    if (prodInfo) {
      setProdInfo({ ...prodInfo, [fieldToChange]: e.target.value }) 
    }
  }

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files) 
  
      const imageURLs: string[] = [] 
  
      for (const file of filesArray) {
        const storageRef = ref(storage, `images/${file.name}`) 
        const snapshot = await uploadBytes(storageRef, file) 
        const downloadURL = await getDownloadURL(snapshot.ref) 
  
        imageURLs.push(downloadURL) 
      }
  
      setProdInfo((prevProdInfo: IProduct | null) => ({
        ...prevProdInfo!,
        images: [...(prevProdInfo?.images || []), ...imageURLs]
      })) 
    }
  }

  const handleCategoryChange = (geoCategory: string, enCategory: string) => {
    if (prodInfo) {
      setProdInfo({ ...prodInfo, enCategory: enCategory, geoCategory: geoCategory })
    }
  }

  const handleToggleAvailability = () => {
    if (prodInfo) {
      setProdInfo({ ...prodInfo, isAvailable: !prodInfo.isAvailable })
    }
  }

  const onDeleteImage = (index: number) => {
    if (prodInfo) {
      const updatedImages = prodInfo.images.filter((_, i) => i !== index)
      setProdInfo({ ...prodInfo, images: updatedImages })
    }
  }

  const updateProdInfo = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault() 

    if (prodInfo && prodId) {
      await requestData({ endpoint: endpointToUse.toString(), id: prodId, data: prodInfo })
    }

    navigate(`/admin/${endpointToUse}`)
  }

  return (
    <div className="admin-items-container">
      <h1>{i18n.language === 'en' ? prodInfo?.enName : prodInfo?.geoName}</h1>
      <div className='admin-list-container'>
        <div className="short-fields">
          <ProdNameInput
            label="ქართული სახელი"
            value={prodInfo?.geoName || ''}
            onChange={(e) => handleProdInfoChange(e, 'geoName')}
          />
          <ProdNameInput
            label="ინგლისური სახელი"
            value={prodInfo?.enName || ''}
            onChange={(e) => handleProdInfoChange(e, 'enName')}
          />
          <ProdCategoryInput
              label="კატეგორია"
              value={prodInfo?.geoCategory || ''}
              categories={categories}
              onChange={(geoCategory, enCategory) => handleCategoryChange(geoCategory, enCategory)}
          />
          <ProdPriceInput
            label="პროდუქტის ფასი"
            value={prodInfo?.price || ''}
            onChange={(e) => handleProdInfoChange(e, 'price')}
          />
          <ProdAvailabilityInput isAvailable={prodInfo?.isAvailable ?? false} onToggle={handleToggleAvailability} />
        </div>
        <div className="big-inputs">
          <ProdDescrInput
            label="ინგლისური აღწერა"
            value={prodInfo?.enDescr || ''}
            onChange={(e) => handleProdInfoChange(e, 'enDescr')}
          />
          <ProdDescrInput
            label="ქართული აღწერა"
            value={prodInfo?.geoDescr || ''}
            onChange={(e) => handleProdInfoChange(e, 'geoDescr')}
          />
        </div>
        <ProdImageInput onChange={handleImageChange} onDeleteImage={onDeleteImage} prodImages={prodInfo?.images ?? []}/>
        <button id='save-btn' onClick={(e) => updateProdInfo(e)}>{i18n.language === 'en' ? 'Save' : 'შენახვა'}</button>
      </div>
    </div>
  ) 
}

export default AdminProdDetails 
