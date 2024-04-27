import React from 'react'
import './Footer.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
             
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
               <FaInstagramSquare/>
            </div>
            <div className='footer-icons-container'>
               <FaFacebookSquare/>
            </div>
            <div className='footer-icons-container'>
               <FaSquareXTwitter/>
            </div>
        </div>
        <div className='footer-copyright'>
            <hr />
            <p>Copyright @ 2024 - All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer
