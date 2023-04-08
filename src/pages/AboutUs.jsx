import React from 'react'
import About from '../components/about/About'
import Banner from '../components/banner/Banner'
import Footer from '../components/footer/Footer'
import NavBar2 from '../components/navbar/NavBar2'

const AboutUs = () => {
  return (
    <div>
           <NavBar2 />
           <Banner title="A propo" />
      <About />
      <Footer />
    </div>
  )
}

export default AboutUs

