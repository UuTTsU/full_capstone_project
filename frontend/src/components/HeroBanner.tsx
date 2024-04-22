import React from 'react'
import HeroBannerImg from '../assets/img/hero-banner.png'

function HeroBanner() {
  return (
    <div className='hero-container'>
        <div className="hero-banner">
            <img src={HeroBannerImg} alt="" />
        </div>
        <div className="hero-text">
            <p>წიწაკოს ბიო მეურნეობა</p>
            <p>ჩვენ გთავაზობთ ულამაზეს ქოთნის ბოსტნეულს თქვენი აივნების გასაფერადებლად!</p>
        </div>
    </div>
  )
}

export default HeroBanner