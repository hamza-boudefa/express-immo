import React, { useState } from 'react'
import LocationSelect from '../Selecte menus/LocationSelect'
import OperationSelect from '../Selecte menus/OperationSelect'
import TypeSelect from '../Selecte menus/TypeSelect'
import Test from '../Test'
import './SearchBox.css'




const types = [
    { name: 'Tous' },
    { name: 'Appartmenet'},
    { name: 'Etage de villa'},
    { name: 'villa'},
    { name: 'duplex'},
    { name: 'triplex'},
    { name: 'studio'},
  
  ]
  const locations = [
    { name: 'Tous' },
    { name: 'Tunis' },
    { name: 'Ariana'},
  
  
  ]
// const location
const SearchBox = () => {
  const [type, setType] = useState([])

  const PropertyType=(selected)=>{
    setType(selected)
  }
  console.log(type)

  const [location, setLocation] = useState([])

  const PropertyLocation=(selected)=>{
    setLocation(selected)
  }
  return (
    <div>
       <div className='nav-filter'>
        <LocationSelect  />
        <TypeSelect/>
        <OperationSelect/>
        <button className="Search-btn"> Chercher </button>

       </div>
    </div>
  )
}

export default SearchBox