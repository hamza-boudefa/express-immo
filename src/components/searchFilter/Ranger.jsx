import React, { useState } from 'react'
import {  RangeSlider } from 'rsuite';

import './Ranger.css'
const Ranger = () => {

  const curency="MD"
  const curency2="DT"
    const [range, setrange] = useState([400,1000000])
    console.log(range)
  return (
    <div style={{height:'73px'}} >
    <h1 className='ranger-title' > prix</h1>
    <div className='ranger-container'>
      <div className='ranger-values' >
      <p   >{range[0]}DT </p>
      -
      <p  >{range[1]} DT </p>
      </div>
  
        <RangeSlider defaultValue={[400, 900000]} min={0} step={100} max={1000000}  onChange={value => {
        setrange(value); 
      }} />
    </div>
    </div>
  )
}

export default Ranger


