import React from 'react'
import FBG from '../assets/icons/fbG.png'
import IGG from '../assets/icons/igG.png'
import WhatsappG from '../assets/icons/whatsappG.png'
import MSNG from '../assets/icons/msng.png'
import Phone from '../assets/icons/phone.png'
import Email from '../assets/icons/email.png'
import Location from '../assets/icons/location.png'
import Share from '../assets/icons/share.png'

function ContactLinks() {
  return (
    <div className="contact-info-cont">
        <div className="soc-links">
            <div className="contact-item">
                <div className="icon-container">
                    <img src={Phone} alt="" />
                </div>
            </div>
            <div className="contact-item">
                <div className="icon-container">
                    <img src={Email} alt="" />
                </div>
            </div>
            <div className="contact-item">
                <div className="icon-container">
                    <img src={Location} alt="" />
                </div>
            </div>
            <div className="contact-item">
                <div className="icon-container">
                    <img src={Share} alt="" />
                </div>
            </div>
        </div>
        <div className='soc-links-text'>
            <a href="tel:+995577093525">+995 577 09 35 25</a>
            <a href="mailto: ttsitsako@gmail.com">ttsitsako@gmail.com</a>
            <p>ანტონ ცოფურაშვილის ქ. 1, ნორიო</p>
            <div className='contact-links'>
                <p>სოციალური ქსელები:</p>
                <div className="footer-right">
                    <a href="/#" className="soc-img">
                        <img src={FBG} alt="" />
                    </a>
                    <a href="/#" className="soc-img">
                        <img src={IGG} alt="" />
                    </a>
                    <a href="/#" className="soc-img">
                        <img src={WhatsappG} alt="" />
                    </a>
                    <a href="/#" className="soc-img">
                        <img src={MSNG} alt="" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactLinks