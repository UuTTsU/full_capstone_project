import React from 'react'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import AboutImg from '../assets/img/aboutus.png'
import '../assets/styles/AboutUsPage.css'
function AboutUsPage() {
  return (
    <div>
      <Header />
      <Breadcrumbs basePage={'ჩვენ შესახებ'} />
      <div className="content-container">
        <h1>ჩვენ შესახებ</h1>
      </div>
      <div className="about-content">
          <img src={AboutImg} alt="" />
          <div className="content-container">
            <div className="about-txt">
              <p>წიწაკო არის ბიო მეურნეობა, რომელიც გთავაზობთ ულამაზეს დეკორატიულ ბოსტნეულს, თქვენი აივნების გასალამაზებლად. ჩვენი მცენარეები იზრდებიან სათბურში, რაც იცავს გარე დაბინძურებისაგან, მავნე მწერებისა თუ სხვა ბუნებრივი მოვლენებისაგან და უზრუნველყოფს განსაკუთრებბულ გემოვნურ თვისებებს.ჩვენი მცენარეების რეალიზება ხდება შესაბამის ქოთნებში, თანდართული მოვლის ინსტრუქციით. ჩვენი იდეის მიზანია, რომ ფართოდ დავნერგოთ ბიოლოგიური დანამატებით კარგი გემოვნური თვისებების მქონე ბოსტნეულის მოყვანის კულტურა, რაც ხელს შეუწყობს ადგილობრივ მოსახლეობაში ბიო მეურნეობის წარმოების წახალისებას, ურბანული მებაღეობის  ხელშეწყობას და განვითარებას ქალაქის პირობებში.</p>
            </div>
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUsPage