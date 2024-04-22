import React from 'react'
import Arrow from '../assets/icons/breadcrumbsarrow.png'
import { NavLink } from 'react-router-dom'

function Breadcrumbs({basePage, url} : {basePage: string, url?: string}) {
    const arrElement = () => {
        return(
            <div className="breadcurms-arrow">
                <img src={Arrow} alt="" />
            </div>
        )
    }
  return (
    <div className='breadcrumbs content-container'><NavLink to={'/'}>მთავარი</NavLink> {arrElement()} <NavLink to={url!} className='active'>{basePage}</NavLink></div>
  )
}

export default Breadcrumbs