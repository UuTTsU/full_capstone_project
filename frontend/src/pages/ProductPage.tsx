import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'
import ProductGallery from '../components/ProductGallery'
import '../assets/styles/ProductPage.css'
import ProductDetails from '../components/ProductDetails'
import { db } from '../config/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { IProduct } from '../interfaces'
import { useTranslation } from 'react-i18next'
import useFetch from '../hooks/useFetch'

function ProductPage() {
    const {bestSellers, products, productId} = useParams()
    const prodLoc = useLocation()
    const {t, i18n} = useTranslation()
    const [prodInfo, setProdInfo] = useState<IProduct | null>(null)

    const {getData, data} = useFetch()

    useEffect(() => {
      getData({endpoint: 'products', id: productId })
    }, [])

    useEffect(() => {
      setProdInfo(data as IProduct)
      console.log(prodInfo)
    }, [data])

    const prodName = i18n.language === 'en' ? prodInfo?.enName : prodInfo?.geoName
    const prodDescr = i18n.language === 'en' ? prodInfo?.enDescr : prodInfo?.geoDescr
  return (
    <div className='full-page-container'>
      <Header />
      <Breadcrumbs secondaryUrl={'/catalogue/pepper'} basePage={t("global.popularProds")} product={prodName} prodUrl={prodLoc.pathname}/>
      <div className="product-title-cont">
        {productId && <PageTitle pageTitle={prodName ?? ''} link={`/catalogue/${prodInfo?.enCategory}`} />}
      </div>
      <div className="content-container">
        <div className="prod-content-container">
          <ProductGallery prodImages={prodInfo?.images ?? []}/>
          {productId && <ProductDetails prodName={prodName ?? ''} prodPrice={prodInfo?.price ?? ''} prodDescr={prodDescr ?? ''} isAvailable={prodInfo?.isAvailable || false}/>}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductPage