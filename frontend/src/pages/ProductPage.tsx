import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'

function ProductPage() {
    const {product} = useParams()
  return (
    <div>
      <Header />
      <Breadcrumbs basePage={'კატალოგი'}/>
      <h1>ProductPage {product}</h1> 
      <Footer />
    </div>
  )
}

export default ProductPage