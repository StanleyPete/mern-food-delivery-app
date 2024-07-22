import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus repudiandae delectus porro rem ullam, aut molestias dicta non minus, vitae molestiae? Saepe enim ullam magni incidunt dolore voluptatum dolorem libero.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="Facebook icon image" />
                <img src={assets.linkedin_icon} alt="Linkedin icon image" />
                <img src={assets.twitter_icon} alt="Twitter icon image" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Free delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>CONTACT</h2>
            <ul>
                <li>+48 123 567 890</li>
                <li>contact@healthyfood.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">©2024 healthyfood.com Inc. All rights reserved</p>
    </div>
  )
}

export default Footer
