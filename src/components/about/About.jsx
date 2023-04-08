import React from 'react'
import { GrFacebook } from 'react-icons/gr'
import {RiInstagramFill} from 'react-icons/ri'
import './About.css'
const About = () => {
  return (
    <div>
        <div className="about-section">
		<div className="about-container">
			<div className="about-content-section">
				<div className="about-title">
					<h1>About Us</h1>
				</div>
				<div className="about-content">
					<h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.</p>
					
				</div>
				
			</div>
			<div className="about-image-section">
				<img src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/service/11.jpg"/>
			</div>
		</div>
	</div>
    </div>
  )
}

export default About