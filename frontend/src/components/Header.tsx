import React, { useRef, useState, useEffect } from 'react'
import Logo from '../assets/img/logo.png'
import { NavLink } from 'react-router-dom'
import Arrow from '../assets/icons/arrow.png'
import BurgerMenu from '../assets/icons/burgerMenu.png'
import LanguageDropdown from './LanguageDropdown'
import { useTranslation } from 'react-i18next'
import useFetch from '../hooks/useFetch'
import { IProduct } from '../interfaces'
import SearchInput from './SearchInput'


function Header() {
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false)
  const [toggleNav, setToggleNav] = useState<boolean>(false)
  const [toggleSearch, setToggleSearch] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const {t, i18n} = useTranslation()
  const {getData, data} = useFetch()
  const [categories, setCategories] = useState<{ enCategory: string; geoCategory: string; }[]>([])


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        !dropdownRef.current?.contains(event.target as Node)
      ) {
        setToggleDropdown(false)
      }
    }
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    getData({endpoint: 'bestSellers'})
  }, [])

  useEffect(() => {
    const categoriesList = data as IProduct[]
    const mappedCategories = categoriesList?.map((category: IProduct) => ({
      enCategory: category.enCategory,
      geoCategory: category.geoCategory
    }))

    setCategories(mappedCategories)
  }, [data])

  const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)

  return (
    <header>
      <div className="upper-header content-container">
        <div className='burger-menu' onClick={() => setToggleNav(prev => !prev)}>
          <img src={BurgerMenu} alt="" />
        </div>
        <div className="language-icons-deskt">
          <LanguageDropdown />
        </div>
        <NavLink to={'/'} className={`logo ${toggleSearch ? 'hidden' : ''}`}>
          <img src={Logo} alt="" />
        </NavLink>
        <SearchInput toggleSearch={toggleSearch} setToggleSearch={setToggleSearch} />
      </div>
      <nav className={`${toggleNav ? 'open' : ''}`} ref={navRef}>
        <ul className='content-container'>
          <li>
            <NavLink to={'/'}>{t("global.header.home")}</NavLink>
          </li>
          <li>
            <div className="catalogue-container" ref={dropdownRef}>
              <div className={`catalogue-btn ${toggleDropdown ? 'active' : ''}`} onClick={() => setToggleDropdown(prev => !prev)}>
                <p>{t("global.header.catalogue")}</p>
                <div className="catalogue-arrow">
                  <img src={Arrow} alt="" />
                </div>
              </div>
              <div className={`catalogue-dropdown ${toggleDropdown ? 'active' : ''}`}>
                {categories?.map((each, index) => (
                  <NavLink key={index} to={`/catalogue/${each.enCategory}`}>
                    {i18n.language === 'en' ? capitalize(each.enCategory) : each.geoCategory}
                  </NavLink>
                ))}
              </div>
            </div>
          </li>
          <li>
            <NavLink to={'/about'}>{t("global.header.aboutus")}</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'}>{t("global.header.contact")}</NavLink>
          </li>
          <div className="language-icons-mob">
            <LanguageDropdown />
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header
