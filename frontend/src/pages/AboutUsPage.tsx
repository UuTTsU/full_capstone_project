import React from 'react'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import '../assets/styles/AboutUsPage.css'
import PageTitle from '../components/PageTitle'
import AboutImg2 from '../assets/img/aboutus2.png'
import { useTranslation } from 'react-i18next'

function AboutUsPage() {
  const {t} = useTranslation()
  return (
    <div className='full-page-container'>
      <Header />
      <Breadcrumbs secondaryUrl={'/about'} basePage={t("global.header.aboutus")} />
      <PageTitle pageTitle={t("global.header.aboutus")}link={'/'} />
      <div className="about-content">
            <div className="about-img">
              {/* <img src={AboutImg} alt="" /> */}
              <img src={AboutImg2} alt="" />
            </div>
          <div className="content-container">
            <div className="about-txt">
              <p>{t("global.aboutusText")}</p>
            </div>
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUsPage