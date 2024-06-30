import React from 'react'
import img from '../images/contact.jpg'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
    <div className='nav'>
      <div className='navimg'>
        <img src={img} alt="" />
      </div>
      <div className='navtext'>
        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
      </div>
    </div>
    </>
  )
}
