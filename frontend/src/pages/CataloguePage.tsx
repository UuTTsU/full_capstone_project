import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import ProductBox from '../components/ProductBox'
import '../assets/styles/CataloguePage.css'
import Pagination from '../components/Pagination'
import PageTitle from '../components/PageTitle'
import { db } from '../config/firebase'
import { collection, getDocs } from "firebase/firestore"
import { IProduct } from '../interfaces'
import { useTranslation } from 'react-i18next'
import useFetch from '../hooks/useFetch'

function CataloguePage() {
  const {type} = useParams()
  const [products, setProducts] = useState<IProduct[]>()
  const {t, i18n} = useTranslation()
  const {getData, data} = useFetch()

  useEffect(() => {
    getData({endpoint: 'products'})
  }, [])


  useEffect(() => {
    setProducts(data as IProduct[])
  }, [data])
  
  const [currPage, setCurrPage] = useState<number>(1)

  const prodPerPage = 16
  const startIndex = (currPage - 1) * prodPerPage
  const endIndex = startIndex + prodPerPage
  const filteredProd = products?.filter(each => each.enCategory === type)
  const displayedProds = filteredProd?.slice(startIndex, endIndex)
  const totalPages = Math.ceil((products?.length || 0) / prodPerPage)

  useEffect(() => {
    setCurrPage(1)
  }, [type])


  const currLoc = useLocation()

  return (
    <div className='full-page-container'>
      <Header />
      <Breadcrumbs secondaryUrl={currLoc.pathname} basePage={t("global.header.catalogue")}/>
      <PageTitle link='/' pageTitle={t('global.ourPlants')} />
      <div className="content-container">
        {displayedProds?.length === 0
          ? <h1 className='no-prod-text'>{t('global.noProducts')}</h1>
          :        
          <div className="products-container">
            {
              displayedProds?.map((each, index) => (
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
              ))
            }
          </div>
        }
      </div>
      {displayedProds?.length === 0 
        ? null
        : <Pagination totalPages={totalPages} setCurrPage={setCurrPage} currPage={currPage}/>
      }
      <Footer />
    </div>
  )
}

export default CataloguePage