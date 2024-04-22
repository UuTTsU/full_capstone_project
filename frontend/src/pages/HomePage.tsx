import React from 'react'
import Header from '../components/Header'
import '../assets/styles/HomePage.css'
import HeroBanner from '../components/HeroBanner'
import PopularProducts from '../components/PopularProducts'
import SomePlants from '../components/SomePlants'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div className='page-container'>
        <Header />
        <HeroBanner />
        <PopularProducts />
        <SomePlants />
        <Footer />
    </div>
  )
}

export default HomePage