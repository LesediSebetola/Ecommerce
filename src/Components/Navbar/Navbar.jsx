import React, { useContext } from 'react'
import './Navbar.css'
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <h3 onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration: "none", color:"rgb(30, 179, 216)"}}>LesD-SHOP</Link>  </h3>
      </div>
     
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart' style={{textDecoration: "none", color:"rgb(30, 179, 216)"}}><FaShoppingCart className='cart-icon' /></Link> 
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
