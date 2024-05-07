import React, { useEffect, useState } from 'react'
import Geo from '../assets/img/geo.png'
import En from '../assets/img/en.png'
import Arrow from '../assets/icons/arrow.png'
import i18n from '../i18n'

function LanguageDropdown() {
    const [toggleDropdown, setToggleDropdown] = useState<boolean>(false) 
    const [selectedLanguage, setSelectedLanguage] = useState<string>(
        localStorage.getItem('selectedLanguage') || 'en'
    ) 

    const handleLanguageToggle = () => {
        setToggleDropdown(prev => !prev) 
    } 

    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language) 
        localStorage.setItem('selectedLanguage', language) 
        setToggleDropdown(false)
    } 

    useEffect(() => {
        i18n.changeLanguage(selectedLanguage)
    }, [selectedLanguage])
    return (
        <div className={`language-change-container ${toggleDropdown ? 'active' : ''}`}>
            <div className={`selected-lang ${toggleDropdown ? 'active' : ''}`} onClick={handleLanguageToggle}>
                <div className="language-icons">
                    <img src={selectedLanguage === 'en' ? En : Geo} alt="" />
                </div>
                <img src={Arrow} alt="" />
            </div>
            <div className={`lang-option ${toggleDropdown ? 'active' : ''}`}>
                <div onClick={() => handleLanguageChange(selectedLanguage === 'en' ? 'ge' : 'en')}>
                    <img src={selectedLanguage === 'en' ? Geo : En} alt="" />
                </div>
            </div>
        </div>
    ) 
}

export default LanguageDropdown 
