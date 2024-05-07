import React from 'react'
import { NavLink } from 'react-router-dom'
import Arrow from '../assets/icons/arrow.png'

function GoBackBtn({link} : {link: string}) {
  return (
    <div className='go-back'>
        <NavLink to={link}>
            <img src={Arrow} alt="" />
        </NavLink>
    </div>
  )
}

export default GoBackBtn