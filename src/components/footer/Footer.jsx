import React from 'react'
import { AiFillInstagram } from 'react-icons/ai';
import { CgFacebook } from 'react-icons/cg';
import logo from "../../assets/logoBlan.png";
import  './Footer.css'
const Footer = () => {

    const year = new Date().getFullYear()
  return (
    <div className='footer'>
        <img src={logo} alt=""  style={{width:'100px'}}/>
        <div className='footer-links'>
                <button>Accueil</button>
              <button>Immobiler</button>
              <button>a propo</button>
              <button>contacte</button>
        </div>
        <div className='footer-icons'>
        <CgFacebook id='social-icon' />
            <AiFillInstagram id='social-icon' />
        </div>
        <p className="copyright">
					  Copyright  {year}  Tous droits réservés. – Le 1er site immobilier de la Tunisie
					  </p>
    </div>
  )
}

export default Footer