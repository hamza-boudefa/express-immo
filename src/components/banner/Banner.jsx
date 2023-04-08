import React from 'react'

const Banner = ({title}) => {
    const Background="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/bg/14.jpg"
  return (
    <div style={{height:"300px" , backgroundImage: `url(${Background})`,backgroundSize: "cover",
    backgroundPosition:" center center",
    backgroundRepeat: "no-repeat", display:"flex", alignItems:"center", paddingLeft:'50px'}} >
        <h1 style={{fontFamily:"Open sans, sans-serif",fontSize:"30px", fontWeight:"800"}} >{title}</h1>
    </div>
  )
}

export default Banner