import React from 'react'
import Carousell from '../components/Caroussel/Carousell'
import Footer from '../components/footer/Footer'
import NavBar from '../components/navbar/NavBar'
import SearchBox from '../components/searchBox/SearchBox'

const Home = () => {
  return (
    <div>
    <NavBar/>
    <SearchBox/>
    <Carousell/>
    <Footer/>
    </div>
  )
}

export default Home