import React, { useState } from 'react'
import './ContactForm.css'
import Button from './Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import logo from '../images/img.svg'

export default function ContactForm() {
  const [name,setName]=useState("xyz");
  const onsubmit=(e)=>{
    e.preventDefault();
    console.log(e);
    setName(e.target[0].value);
    console.log("name",e.target[0].value);
    console.log("email",e.target[1].value);
    console.log("text",e.target[2].value);
  }
  return (
    <>
    <div className='contactform'>
        <div className='contactcontent'>
            <div className='contactbtn'>
                <Button text="VIA SUPPORT CHAT " primary={true} icon={<MdMessage fontSize="24px"/>} />
                 &nbsp;
                <Button text="VIA CALL" primary={true} icon={<FaPhoneAlt fontSize="24px" />} />
            </div>
            <div className='contactbtn'>
              <Button text="VIA EMAIL FORM" primary={false} icon={<HiMail fontSize="24px"/>} />
            </div>
            <form onSubmit={onsubmit}>
              <div className='formctrl'>
                <label htmlFor="name"  >Name</label>
                <input type="text" name='name' />
              </div>
              <div className='formctrl formemail'>
                <label htmlFor="email">E-Mail</label>
                <input type="email" name='email' />
              </div>
              <div className='formctrl'>
                <label htmlFor="text">Text</label>
                <textarea name="text" id="" rows={4} ></textarea>
              </div>
              <div className='submitbtn'>
                <Button primary={true} text="SUBMIT"/>
              </div>
              {/* <p>{name + " follows coding"}</p> */}
            </form>
        </div>
        <div className='contactimg'>
          <img src={logo} alt="" />
        </div>
    </div> 
    </>
  )
}
