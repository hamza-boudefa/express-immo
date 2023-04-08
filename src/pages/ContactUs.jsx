import React from "react";
import '../assets/style/contactUs.css'
import Footer from "../components/footer/Footer";
import NavBar2 from "../components/navbar/NavBar2";
import callLogo from "../assets/callLogo.png"
import emailLogo from "../assets/emailLogo.png"
import locationLogo from "../assets/locationLogo.png"
import Banner from "../components/banner/Banner";

const ContactUs = () => {

  return (
    <div>
                <NavBar2 />
                <Banner title="Contact" />

                {/* <h2 className="Contact-header" >N'hésitez pas à nous contacter pour tout type d'information</h2> */}
                <div className="ltn__items" >

      <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
        <div className="ltn__contact-address-icon">
          <img
            src={emailLogo}
            alt="Icon Image"
          />
        </div>
        <h3 className="animated fadeIn">Email</h3>
        <p id="agence_cred">
          info@webmail.com <br />
          jobs@webexample.com
        </p>
      </div>
      <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
        <div className="ltn__contact-address-icon">
          <img
            src={callLogo}
            alt="Icon Image"
          />
        </div>
        <h3 className="animated fadeIn">Téléphone</h3>
        <a style={{textDecoration:"unset"}} href="tel:123-456-7890">

        <p id="agence_cred" >
          +216 54 575 579 <br />
        </p>
        </a>
      </div>
      <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
        <div className="ltn__contact-address-icon">
          <img
            src={locationLogo}
            alt="Icon Image"
          />
        </div>
        <h3 className="animated fadeIn">Adresse</h3>
        <p id="agence_cred">
        num 9 nacer2 ariana 
        </p>
      </div>
      </div>
      <iframe className="map" style={{width:"100%", height: "500px", marginBottom:"100px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d797.2566862876588!2d10.157390938102584!3d36.85528607182902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd331110e44375%3A0xa1e5d7192b0e1b0!2sImmeuble%20El%20Ksour!5e0!3m2!1sen!2stn!4v1673201326869!5m2!1sen!2stn" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div>
        <h1>
          
A la recherche d'une maison de rêve?
Nous pouvons vous aider à réaliser votre rêve d'une nouvelle maison 
        </h1>
      </div>
      <Footer />

    </div>
  );
};

export default ContactUs;
