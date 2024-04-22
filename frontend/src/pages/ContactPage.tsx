import React from 'react'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'

function ContactPage() {
  return (
    <div>
      <Header />
      <Breadcrumbs basePage={'კონტაქტი'}/>
      <Footer />
    </div>
  )
}

export default ContactPage