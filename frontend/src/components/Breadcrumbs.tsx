import React from 'react'
import Arrow from '../assets/icons/breadcrumbsarrow.png'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface IBreadcrumbs{
  basePage: string,
  secondaryUrl: string,
  product?: string,
  prodUrl?: string,
}
function Breadcrumbs({basePage, secondaryUrl, product, prodUrl} : IBreadcrumbs) {
  const {t} = useTranslation()
  const arrElement = () => {
      return(
          <div className="breadcurms-arrow">
              <img src={Arrow} alt="" />
          </div>
      )
    }
  return (
    <div className='content-container'>
      <div className='breadcrumbs'>
        <NavLink to={'/'}>{t("global.header.home")}</NavLink> {arrElement()} 
        <NavLink to={secondaryUrl!} className='active'>{basePage}</NavLink> {product && arrElement()}
        {product && <NavLink to={prodUrl!}>{product}</NavLink>}
      </div>
    </div>
  )
}

export default Breadcrumbs