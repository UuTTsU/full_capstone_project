import React, { useState } from 'react'
import Geo from '../assets/img/geo.png'
import Logo from '../assets/img/logo.png'
import SearchIcon from '../assets/icons/search.png'
import { NavLink } from 'react-router-dom'
import Arrow from '../assets/icons/arrow.png'

function Header() {
    const [toggleDropdown, setToggleDropdown] = useState<boolean>(false)
    
  return (
    <header>
        <div className="upper-header">
            <div className="language-icons">
                <img src={Geo} alt="" />
            </div>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="search-field">
                <img src={SearchIcon} alt="" />
            </div>
        </div>
        <nav>
            <ul className='content-container'>
                <li>
                    <NavLink to={'/'}>მთავარი</NavLink>
                </li>
                <li>
                    <div className="catalogue-container">
                        <div className={`catalogue-btn ${toggleDropdown ? 'active' : ''}`} onClick={() => setToggleDropdown(prev => !prev)}>
                            <p>კატალოგი</p>
                            <div className="catalogue-arrow">
                                <img src={Arrow} alt="" />
                            </div>
                        </div>
                        <div className={`catalogue-dropdown ${toggleDropdown ? 'active' : ''}`}>
                            <NavLink to={'/catalogue/wiwaka'}>წიწაკა</NavLink>
                            <NavLink to={'/catalogue/juja-pomidori'}>ჯუჯა წიწაკა</NavLink>
                            <NavLink to={'/catalogue/baziliki'}>ბაზილიკი</NavLink>
                        </div>
                    </div>
                </li>
                <li>
                    <NavLink to={'/about'}>ჩვენ შესახებ</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'}>კონტაქტი</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header