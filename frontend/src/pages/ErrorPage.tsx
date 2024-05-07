import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SadIcon from '../assets/icons/sadIcon.png'
import '../assets/styles/ErrorPage.css'
import { NavLink } from 'react-router-dom'
function ErrorPage() {
  return (
    <div className='full-page-container'>
        <Header />
        <div className="error-page">
            <div className="content-container">
                <h1>პროდუქტი ვერ მოიძებნა
                    <img src={SadIcon} alt="" />
                </h1>
                <p>მოძებნე <NavLink to={'/catalogue/pepper'}>კატალოგში</NavLink>, ან <NavLink to={'/contact'}>მოგვწერე</NavLink> და ჩვენ დაგეხმარებით პოვნაში</p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ErrorPage