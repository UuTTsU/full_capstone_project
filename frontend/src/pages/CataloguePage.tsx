import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import ProductBox from '../components/ProductBox'
import '../assets/styles/CataloguePage.css'
import Pagination from '../components/Pagination'

function CataloguePage() {
  const products = new Array(150).fill(null)
  const [currPage, setCurrPage] = useState<number>(1)

  const prodPerPage = 16
  const startIndex = (currPage - 1) * prodPerPage
  const endIndex = startIndex + prodPerPage
  const displayedProds = products?.slice(startIndex, endIndex)
  const totalPages = Math.ceil(products?.length / prodPerPage)
  return (
    <div>
      <Header />
      <Breadcrumbs basePage={'კატალოგი'}/>
      <div className="content-container">
        <h1>ჩვენი მცენარეები</h1>
        <div className="products-container">
          {
            displayedProds?.map((each, index) => (
              <ProductBox key={index} id={index}/>
            ))
          }
        </div>
      </div>
      <Pagination totalPages={totalPages} setCurrPage={setCurrPage} currPage={currPage}/>
      <Footer />
    </div>
  )
}

export default CataloguePage