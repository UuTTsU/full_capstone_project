import React from 'react'
import HeroBannerImg from '../assets/img/hero-banner.png'
import { useTranslation } from 'react-i18next'

function HeroBanner() {
  const {t, i18n} = useTranslation()
  return (
    <div className='hero-container'>
        <div className="hero-banner">
            <img src={HeroBannerImg} alt="" />
        </div>
        <div className="hero-text">
            <h1>{t("hero-banner.upperText")}</h1>
            <p>{t("hero-banner.lowerText")}</p>
        </div>
    </div>
  )
}

export default HeroBanner