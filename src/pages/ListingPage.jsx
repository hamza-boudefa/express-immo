import React from 'react'
import Footer from '../components/footer/Footer'
import NavBar2 from '../components/navbar/NavBar2'
import PropertyCard from '../components/PropertiesCard/PropertyCard'
import ListingSearch from '../components/listingSearch/ListingSearch'
import Banner from '../components/banner/Banner'

const ListingPage = () => {
  return (
    <div>
        <NavBar2/>
        <Banner title="Immobiler" />
        <ListingSearch/>
        <PropertyCard/>
        <Footer/>
    </div>
  )
}

export default ListingPage