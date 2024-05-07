import React from 'react'
import LanguageDropdown from './LanguageDropdown'
import Logo from '../assets/img/logo.png'
import User from '../assets/icons/user.png'
import { NavLink } from 'react-router-dom'
function AdminHeader() {
    return (
        <header>
          <div className="upper-header content-container">
            <div className="language-icons-deskt">
              <LanguageDropdown />
            </div>
            <NavLink to={'/'} className="logo">
              <img src={Logo} alt="" />
            </NavLink>
            <div className="user-icon">
              <img src={User} alt="" />
            </div>
          </div>
          <div className="lower-decoration"></div>
        </header>
      )
    }

export default AdminHeader