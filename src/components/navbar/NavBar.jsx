import React, { useEffect, useState } from "react";
import logo from "../../assets/logoBlan.png";
import logo2 from "../../assets/logo-2.png";
import "./NavBar.css";
import { CgClose, CgFacebook } from "react-icons/cg";
import { AiFillInstagram } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";

import { GiHamburgerMenu } from "react-icons/gi";
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  const [toogle, setToogle] = useState(false);
  const handleToggle = () => {
    setToogle(!toogle);
    console.log(document.getElementById('check').checked)
  };

  return (
    <div className="Navbar">
      <div
        className="v"
        style={{
          backgroundColor: navbar ? "black" : "transparent",
          transition: "0.3s",
          position:"fixed"
        }}
      >
        <section className="navbar-cred">
          <div className="nav-cred">
      
            <a href=""> <HiOutlineMail id="nav-icon" /> expressImmo@gmail </a>
        
            <a href=""> <IoLocationOutline id="nav-icon" /> num 9 nacer2 ariana</a>
          </div>

          <div className="nav-social" style={{display:'flex'}} >
           <a href="https://www.facebook.com/expressimmobilie"  target="_blank"><CgFacebook id="nav-social-icon" /></a> 
            <a href="https://www.instagram.com/expressimmobiliere/" target="_blank" rel="noopener noreferrer"><AiFillInstagram id="nav-social-icon" /></a>
          </div>
        </section>
        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
          <GiHamburgerMenu
            className="hmburgericon"
            color="#fff"
            style={{ width: "40px", height: "40px" }}
            onClick={handleToggle}
          />
        </label>
        <section className="sec">
          <div className="nav-links" id="nav-links">
            <img src={logo} alt="sds" />
            <div className="nav-links-btns">
            <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
          <CgClose
            className="hmburgericon"
            color="#fff"
            style={{position:'sticky',top:"0", width: "40px", height: "40px" }}
          />
        </label>
        <LinkContainer to="/">
        <button>Accueil</button>

        </LinkContainer>
        <LinkContainer to="/Listing">
        <button>Immobiler</button>

        </LinkContainer>
        <LinkContainer to="/about">
        <button>a propo</button>

        </LinkContainer>
        <LinkContainer to="/Contact">
        <button>contacte</button>
        </LinkContainer>
              <button className="nav-add"> ajouter une annonce </button>
            </div>
          </div>
        </section>
      </div>
      <h1 className="banner-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum.</h1>

    </div>
  );
};

export default NavBar;
