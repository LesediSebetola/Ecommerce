import React from 'react'
import './Footer.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-bg'>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-links'>
               <li>Features</li>
               <li>Pricing</li>
               <li>Affillate</li>
               <li>Blog</li>
               <li>Blog</li>
           </div>
          
        <div className='footer-social-icon'>
            
               <FaInstagramSquare/>
          
            
               <FaFacebookSquare/>
         
        
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
