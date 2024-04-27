import React from 'react'
import './CSS/LoginSignup.css'

const LoginSighup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
           <h1>Sign Up</h1>
           <div className='loginsignup-fields'>
              <input type="text" placeholder='Your Name'/>
              <input type="email" placeholder='Email Address'/>
              <input type="password" placeholder='Password'/>
           </div>
           <button>Contine</button>
           <p className='loginsignup-login'>Already have an accouunt? <span>Login here</span></p>
           <div className='loginsignup-agree'>
              <input type="checkbox" name='' id=''/>
              <p>By continuing, i agree to the tterms of use & privacy policy.</p>
           </div>
      </div>
    </div>
  )
}

export default LoginSighup
